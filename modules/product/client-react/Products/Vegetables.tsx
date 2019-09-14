import React, { useState } from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';

import settings from '../../../../settings';
import { PageLayout } from '@gqlapp/look-client-react';

import GET_ALL_PRODUCTS from '../graphql/GetAllProducts.graphql';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { RouteComponentProps } from 'react-router-dom';
import { Card, Image, Rating, Header } from 'semantic-ui-react';

interface ProductProps extends RouteComponentProps {
  t: TranslateFunction;
}

interface ProductType {
  id: number;
  name: string;
  rating: number;
  size: string;
  imageSource: string;
  price: number;
}

interface ProductCardProps extends ProductType {
  onView: () => void;
}
const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ProductCard = ({ id, name, size, price, imageSource, rating, onView }: ProductCardProps) => {
  return (
    <Card onClick={onView}>
      <Image src={imageSource} />
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="price">
            <b>{price} MKD</b>
          </span>
        </Card.Meta>
        <Card.Description>{size} kg</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Rating icon="star" defaultRating={rating} maxRating={5} />
      </Card.Content>
    </Card>
  );
};

const SortTypes = {
  PRICE_ASCENDING: 'sortByPriceAscending',
  PRICE_DESCENDING: 'sortByPriceDescending'
};

const Products = ({ t, history }: ProductProps) => {
  const [sortBy, setSortBy] = useState(SortTypes.PRICE_ASCENDING);
  const {
    data: { products }
  } = useQuery(GET_ALL_PRODUCTS);

  return (
    <PageLayout>
      {renderMetaData(t)}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Header as="h1" dividing>
          Vegetables
        </Header>
        <UncontrolledDropdown>
          <DropdownToggle caret>{t(sortBy)}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                setSortBy(SortTypes.PRICE_ASCENDING);
              }}
            >
              {t('sortByPriceAscending')}
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setSortBy(SortTypes.PRICE_DESCENDING);
              }}
            >
              {t('sortByPriceDescending')}
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div>
        <Card.Group itemsPerRow={5}>
          {products
            .filter(({ category }: any) => {
              return category.name === 'Vegetables';
            })
            .sort((a: { price: number }, b: { price: number }) =>
              sortBy === SortTypes.PRICE_ASCENDING ? a.price - b.price : b.price - a.price
            )
            .map(({ id, name, rating, size, price, imageSource }: ProductType) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                rating={rating}
                size={size}
                price={price}
                imageSource={imageSource}
                onView={() => history.push(`/product/${id}`)}
              />
            ))}
        </Card.Group>
      </div>
    </PageLayout>
  );
};

export default translate('product')(Products);
