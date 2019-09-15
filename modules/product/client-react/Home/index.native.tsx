import React from 'react';
import { useTranslation } from '@gqlapp/i18n-client-react';
import { useQuery } from '@apollo/react-hooks';

import BRANDS_QUERY from '../graphql/BrandsQuery.graphql';
import GET_TOP_CATEGORIES_QUERY from '../graphql/GetTopCategoriesQuery.graphql';
import GET_TOP_PRODUCTS_QUERY from '../graphql/GetTopProducts.graphql';
import GET_NEW_PRODUCTS_QUERY from '../graphql/GetNewProducts.graphql';

import HomeView from './HomeView';

const items = [
  {
    thumbnail: 'http://b.webpurr.com/Z97J.webp',
    src: 'http://b.webpurr.com/Z97J.webp',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'PROMOTION 1',
    title: 'PROMOTION 1'
  },
  {
    thumbnail: 'http://b.webpurr.com/PN7m.webp',
    src: 'http://b.webpurr.com/PN7m.webp',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'PROMOTION 2',
    title: 'PROMOTION 2'
  },
  {
    thumbnail: 'http://b.webpurr.com/x2dx.webp',
    src: 'http://b.webpurr.com/x2dx.webp',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'PROMOTION 3',
    title: 'PROMOTION 3'
  }
];

const Articles = ({ history, navigation }: any) => {
  const {
    data: { brands },
    loading: brandsLoading
  } = useQuery(BRANDS_QUERY);
  const {
    data: { topCategories },
    loading: topCategoriesLoading
  } = useQuery(GET_TOP_CATEGORIES_QUERY);
  const {
    data: { topProducts },
    loading: topProductsLoading
  } = useQuery(GET_TOP_PRODUCTS_QUERY);
  const {
    data: { newProducts },
    loading: newProductsLoading
  } = useQuery(GET_NEW_PRODUCTS_QUERY);
  const { t } = useTranslation('article');
  return (
    <HomeView
      loading={brandsLoading || topCategoriesLoading || topProductsLoading || newProductsLoading}
      {...{ t, items, brands, topCategories, topProducts, newProducts, history, navigation }}
    />
  );
};

export default Articles;
