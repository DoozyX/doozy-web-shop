import React, { Suspense, useState } from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-apollo-hooks';

import settings from '../../../../settings';
import { PageLayout } from '@gqlapp/look-client-react';

import GET_ALL_PRODUCTS from '../graphql/GetAllProducts.graphql';
import {
  Card,
  Spinner,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Button,
  CardSubtitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  CardDeck
} from 'reactstrap';

interface ProductProps {
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

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ProductCard = ({ name, size, price, imageSource }: ProductType) => (
  <Card style={{ minWidth: '200px' }}>
    <CardImg top width="100%" src={imageSource} alt="Card image cap" />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{price} MKD</CardSubtitle>
      <CardText>{size} kg</CardText>
      <Button>View</Button>
      <Button>Buy</Button>
    </CardBody>
  </Card>
);

const SortTypes = {
  PRICE_ASCENDING: 'sortByPriceAscending',
  PRICE_DESCENDING: 'sortByPriceDescending'
};

const Products = (props: ProductProps) => {
  const [sortBy, setSortBy] = useState(SortTypes.PRICE_ASCENDING);
  const { data } = useQuery(GET_ALL_PRODUCTS, { suspend: true });

  const t = props.t;

  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Spinner />}>
        <div style={{ width: '100%', display: 'flex', 'justify-content': 'space-between' }}>
          <h1>{t('products')}</h1>
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
        <Container>
          <CardDeck>
            {data.products
              .sort((a: { price: number }, b: { price: number }) =>
                sortBy === SortTypes.PRICE_ASCENDING ? a.price - b.price : b.price - a.price
              )
              .map((product: ProductType) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  size={product.size}
                  price={product.price}
                  imageSource={product.imageSource}
                />
              ))}
          </CardDeck>
        </Container>
      </Suspense>
    </PageLayout>
  );
};

export default translate('product')(Products);
