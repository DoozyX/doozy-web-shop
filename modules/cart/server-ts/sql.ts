import { knex, returnId } from '@gqlapp/database-server-ts';

export interface CartItem {
  productId: number;
  userId: number;
  quantity: number;
}

export class Cart {
  public insert({ productId, userId, quantity }: CartItem) {
    return knex('cart_items').insert({ product_id: productId, user_id: userId, quantity });
  }

  public updateQuantity({ productId, userId, quantity }: CartItem) {
    return knex('cart_items')
      .update({ quantity })
      .where({ product_id: productId })
      .andWhere({ user_id: userId });
  }

  public getForUser(userId: number) {
    return knex
      .select('*')
      .from('cart_items')
      .where('user_id', '=', userId);
  }

  public delete({ productId, userId }: any) {
    return knex('cart_items')
      .where('product_id', productId)
      .andWhere('user_id', userId)
      .del();
  }
  public emptyForUser(userId: number) {
    knex('cart_items')
      .where('user_id', userId)
      .del();
  }
}

export class Order {
  public insert({ userId, price }: any) {
    return returnId(knex('order')).insert({ userId, price });
  }

  public getForUser(userId: number) {
    return knex
      .select('*')
      .from('order')
      .where('userId', '=', userId);
  }
}

export class OrderItem {
  public insert({ orderId, productId, quantity }: any) {
    return knex('order_item').insert({ orderId, productId, quantity });
  }

  public getForOrder(orderId: number) {
    return knex
      .select('*')
      .from('order_item')
      .where('orderId', '=', orderId);
  }
}

