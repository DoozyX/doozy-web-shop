import knex from '../../../packages/server/src/sql/connector';

export interface Product {
  id: number;
  name: string;
  rating: number;
  size: string;
  type: string;
}

export interface Identifier {
  id: number;
}

export default class ProductDAO {
  public get(id: number) {
    return knex
      .select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type')
      .from('product as p')
      .where('p.id', '=', id)
      .first();
  }

  public getAll() {
    return knex.select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type').from('product as p');
  }
}
