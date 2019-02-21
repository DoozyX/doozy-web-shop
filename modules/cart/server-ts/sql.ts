import { knex } from '@gqlapp/database-server-ts';

export default class Cart {
  public carts() {
    return knex.select();
  }
}
