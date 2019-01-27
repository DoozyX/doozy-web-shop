import { knex } from '@gqlapp/database-server-ts';

export interface ProductType {
  id: number;
  name: string;
  rating: number;
  size: string;
  type: string;
  categoryId: number;
  brandId: number;
}

export interface BrandType {
  id: number;
  name: string;
}

export interface CategoryType {
  id: number;
  name: string;
}

export interface Identifier {
  id: number;
}

export class Product {
  public get(id: number) {
    return knex
      .select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type', 'p.brandId', 'p.categoryId')
      .from('product as p')
      .where('p.id', '=', id)
      .first();
  }

  public getAllForBrand(id: number) {
    return knex
      .select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type', 'p.brandId', 'p.categoryId')
      .from('product as p')
      .where('p.brandId', '=', id);
  }

  public getAllForCategory(id: number) {
    return knex
      .select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type', 'p.brandId', 'p.categoryId')
      .from('product as p')
      .where('p.categoryId', '=', id);
  }

  public getAll() {
    return knex
      .select('p.id', 'p.name', 'p.rating', 'p.size', 'p.type', 'p.brandId', 'p.categoryId')
      .from('product as p');
  }
}

export class Brand {
  public get(id: number) {
    return knex
      .select('b.id', 'b.name')
      .from('brand as b')
      .where('b.id', '=', id)
      .first();
  }

  public getAll() {
    return knex.select('b.id', 'b.name').from('brand as b');
  }
}

export class Category {
  public get(id: number) {
    return knex
      .select('c.id', 'c.name')
      .from('category as c')
      .where('c.id', '=', id)
      .first();
  }

  public getAll() {
    return knex.select('c.id', 'c.name').from('category as c');
  }
}
