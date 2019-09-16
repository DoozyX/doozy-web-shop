import React from 'react';
import { Content, Spinner } from 'native-base';

import CategoriesListview from './CategoriesListview';
import ProductsListView from './ProductsListView';
import CarouselView from '../components/CarouselView';

const ProductView = ({ loading, t, items, topCategories, brands, topProducts, newProducts, navigation }: any) => {
  if (loading) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  }
  return (
    <Content>
      <CarouselView items={items} />
      <CategoriesListview items={topCategories} title={'Categories'} onClick={() => navigation.push('Products')} />
      <CategoriesListview items={brands} title={'Brands'} onClick={() => navigation.push('Products')} />
      <ProductsListView
        items={topProducts}
        title={'Top Products'}
        onClick={(id: any) => navigation.push('Product', { id })}
      />
      <ProductsListView
        items={newProducts}
        title={'New Products'}
        onClick={(id: any) => navigation.push('Product', { id })}
      />
    </Content>
  );
};

export default ProductView;
