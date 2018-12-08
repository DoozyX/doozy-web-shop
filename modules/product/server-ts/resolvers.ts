import { BrandType, CategoryType, Identifier, ProductType } from './sql';
import { ProductContext } from './index';
// import { createBatchResolver } from 'graphql-resolve-batch'; TODO: refactor subtypes with batch resolver

export default () => ({
  Query: {
    product(obj: any, { id }: Identifier, context: ProductContext) {
      return context.Product.get(id);
    },
    products(obj: any, args: any, context: ProductContext) {
      return context.Product.getAll();
    },
    categories(obj: any, args: any, context: ProductContext) {
      return context.Category.getAll();
    },
    brands(obj: any, args: any, context: ProductContext) {
      return context.Brand.getAll();
    }
  },
  Product: {
    brand(obj: ProductType, args: any, context: ProductContext) {
      return context.Brand.get(obj.brandId);
    },
    category(obj: ProductType, args: any, context: ProductContext) {
      return context.Category.get(obj.categoryId);
    }
  },
  Brand: {
    products(obj: BrandType, args: any, context: ProductContext) {
      return context.Product.getAllForBrand(obj.id);
    }
  },
  Category: {
    products(obj: CategoryType, args: any, context: ProductContext) {
      return context.Product.getAllForCategory(obj.id);
    }
  }
});
