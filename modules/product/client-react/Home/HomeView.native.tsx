import React from 'react';
import { Container, Content, Spinner } from 'native-base';

import CategoriesListview from './CategoriesListview';
import ProductsListView from './ProductsListView';
import CarouselView from '../components/CarouselView';

const ProductView = ({ loading, t, items, topCategories, brands, topProducts, newProducts, navigation }: any) => {
  if (loading) {
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }
  return (
    <Container>
      <Content>
        <CarouselView items={items} />
        <CategoriesListview items={topCategories} title={'Categories'} onClick={() => navigation.push('Products')} />
        <CategoriesListview items={brands} title={'Brands'} onClick={() => navigation.push('Products')} />
        <ProductsListView items={topProducts} title={'Top Products'} onClick={() => navigation.push('Products')} />
        <ProductsListView items={newProducts} title={'New Products'} onClick={() => navigation.push('Products')} />
      </Content>
    </Container>
  );
};

export default ProductView;
