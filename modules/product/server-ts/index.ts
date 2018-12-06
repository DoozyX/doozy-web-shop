import ServerModule from '@module/module-server-ts';

import schema from './schema.graphql';
import createResolvers from './resolvers';
import Product from './sql';

export interface ProductContext {
  Product: Product;
}

export default new ServerModule({
  schema: [schema],
  createResolversFunc: [createResolvers],
  createContextFunc: [() => ({ Product: new Product() })]
});
