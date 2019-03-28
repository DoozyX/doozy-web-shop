import withAuth from 'graphql-auth';

import { Cart as CartDAO, Order as OrderDAO, OrderItem as OrderItemDAO } from './sql';

interface CartItemInput {
  productId: number;
  quantity: number;
}

export default () => ({
  Query: {
    getCartItems: withAuth((_obj: any, _args: any, { Cart, identity }: { Cart: CartDAO; identity: any }) => {
      return Cart.getForUser(identity.id);
    }),
    getOrders: withAuth((_obj: any, _args: any, { Order, identity }: { Order: OrderDAO; identity: any }) => {
      return Order.getForUser(identity.id);
    })
  },
  Order: {
    items({ id }: any, _args: any, { OrderItem }: any) {
      return OrderItem.getForOrder(id);
    }
  },
  OrderItem: {
    product({ productId }: any, _args: any, { Product }: any) {
      return Product.get(productId);
    }
  },
  CartItem: {
    product({ product_id }: any, _args: any, { Product }: any) {
      return Product.get(product_id);
    }
  },
  Mutation: {
    addProductToCart: withAuth(
      async (
        _obj: any,
        { productId, quantity }: CartItemInput,
        { Cart, identity }: { Cart: CartDAO; identity: any }
      ) => {
        try {
          return !!(await Cart.insert({ productId, userId: identity.id, quantity }));
        } catch {
          return !!(await Cart.updateQuantity({ productId, userId: identity.id, quantity }));
        }
      }
    ),
    changeCartItemQuantity: withAuth(
      async (
        _obj: any,
        { productId, quantity }: CartItemInput,
        { Cart, identity }: { Cart: CartDAO; identity: any }
      ) => {
        return !!(await Cart.updateQuantity({ productId, userId: identity.id, quantity }));
      }
    ),
    removeCartItem: withAuth(
      async (_obj: any, { productId }: CartItemInput, { Cart, identity }: { Cart: CartDAO; identity: any }) => {
        return !!(await Cart.delete({ productId, userId: identity.id }));
      }
    ),
    makeOrder: withAuth(
      async (
        _obj: any,
        { input: { products, quantities } }: any,
        { Order, OrderItem, identity }: { Order: OrderDAO; OrderItem: OrderItemDAO; identity: any }
      ) => {
        const price = 500;
        const orderInsert = await Order.insert({ userId: identity.id, price });
        const orderId = orderInsert[0];

        for (let i = 0; i < products.length; ++i) {
          await OrderItem.insert({ orderId, productId: products[i], quantity: quantities[i] });
        }
        return true;
      }
    )
  }
});
