import ServerModule from '@gqlapp/module-server-ts';

import schema from './schema.graphql';
import createResolvers from './resolvers';
import { Product, Category, Brand, Review } from './sql';

export interface ProductContext {
  Product: Product;
  Category: Category;
  Brand: Brand;
  Review: Review;
  User: any;
  identity: any;
}

export default new ServerModule({
  schema: [schema],
  createResolversFunc: [createResolvers],
  createContextFunc: [
    () => ({
      Product: new Product(),
      Category: new Category(),
      Brand: new Brand(),
      Review: new Review()
    })
  ]
});
