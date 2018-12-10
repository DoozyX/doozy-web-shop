import knex from '../../../packages/server/src/sql/connector';

export default class Article {
  public articles() {
    return knex.select();
  }
}
