import { knex, returnId } from '@gqlapp/database-server-ts';

export interface ProductType {
  id: number;
  name: string;
  rating: number;
  size: string;
  type: string;
  categoryId: number;
  brandId: number;
}

export interface Review {
  userId: number;
  productId: number;
  content: string;
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
      .select('*')
      .from('product as p')
      .where('p.id', '=', id)
      .first();
  }

  public getAllForBrand(id: number) {
    return knex
      .select('*')
      .from('product as p')
      .where('p.brandId', '=', id);
  }

  public getAllForCategory(id: number) {
    return knex
      .select('*')
      .from('product as p')
      .where('p.categoryId', '=', id);
  }

  public getAll() {
    return knex.select('*').from('product as p');
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

  public searchForProduct(search: string) {
    return knex
      .distinct('c.id', 'c.name')
      .select()
      .from('category as c')
      .join('product as p', 'c.id', '=', 'p.categoryId')
      .where('p.name', 'like', '%' + search + '%');
  }
}

export class Review {
  public insert(content: any, productId: any, userId: any) {
    return returnId(knex('review')).insert({ content, productId, userId });
  }

  public async getForProduct(productId: number) {
    return knex
      .select('*')
      .from('review')
      .where('productId', productId);
  }
}
