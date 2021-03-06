import withAuth from 'graphql-auth';

import { BrandType, CategoryType, Identifier, ProductType } from './sql';
import { ProductContext } from './index';
// import { createBatchResolver } from 'graphql-resolve-batch'; TODO: refactor subtypes with batch resolver

export default () => ({
  Query: {
    product(_obj: any, { id }: Identifier, context: ProductContext) {
      return context.Product.get(id);
    },
    products(_obj: any, _args: any, context: ProductContext) {
      return context.Product.getAll();
    },
    topProducts(_obj: any, _args: any, context: ProductContext) {
      return context.Product.getTop();
    },
    newProducts(_obj: any, _args: any, context: ProductContext) {
      return context.Product.getNew();
    },
    categories(_obj: any, _args: any, context: ProductContext) {
      return context.Category.getAll();
    },
    topCategories(_obj: any, _args: any, context: ProductContext) {
      return context.Category.getTop(5);
    },
    brands(_obj: any, _args: any, context: ProductContext) {
      return context.Brand.getAll();
    },
    searchProducts(_obj: any, { search }: any, context: ProductContext) {
      return context.Product.searchProduct(search);
    },
    searchProductsWithCategory(_obj: any, { search }: any, context: ProductContext) {
      return context.Category.searchForProduct(search);
    }
  },
  ProductSearchWithCategory: {
    results(obj: BrandType, _args: any, { Product }: ProductContext, info: any) {
      return Product.getAllForBrand(obj.id);
    }
  },
  Product: {
    brand(obj: ProductType, _args: any, { Brand }: ProductContext) {
      return Brand.get(obj.brandId);
    },
    category(obj: ProductType, _args: any, { Category }: ProductContext) {
      return Category.get(obj.categoryId);
    },
    reviews(obj: ProductType, _args: any, { Review }: ProductContext) {
      return Review.getForProduct(obj.id);
    },
    images(obj: ProductType, _args: any, { ProductImage }: ProductContext) {
      return ProductImage.getForProduct(obj.id);
    }
  },
  Brand: {
    products(obj: BrandType, _args: any, { Product }: ProductContext) {
      return Product.getAllForBrand(obj.id);
    }
  },
  Category: {
    products(obj: CategoryType, _args: any, { Product }: ProductContext) {
      return Product.getAllForCategory(obj.id);
    }
  },
  Review: {
    user(obj: any, _args: any, { User }: ProductContext) {
      return User.getUserPublicInfoById(obj.userId);
    }
  },
  Mutation: {
    addReviewToProduct: withAuth(
      async (_obj: any, { productId, content }: any, { Review, req: { identity } }: ProductContext) => {
        return !!(await Review.insert(content, productId, identity.id));
      }
    )
  }
});
