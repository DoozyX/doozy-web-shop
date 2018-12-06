import { Identifier } from './sql';
import { ProductContext } from './index';

interface ProductsParams {
  limit: number;
  after: number;
}

export default () => ({
  Query: {
    product(obj: any, { id }: Identifier, context: any) {
      return context.Post.post(id);
    },
    products(obj: any, { limit, after }: ProductsParams, context: ProductContext) {
      return context.Product.getAll();
    }
  }
});
