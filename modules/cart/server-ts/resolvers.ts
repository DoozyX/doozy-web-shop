import withAuth from 'graphql-auth';

import CartDAO from './sql';

interface CartItemInput {
  productId: number;
  quantity: number;
}

export default () => ({
  Query: {
    getCartItems: withAuth((_obj: any, _args: any, { Cart, identity }: { Cart: CartDAO; identity: any }) => {
      return Cart.getForUser(identity.id);
    })
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
    )
  }
});
