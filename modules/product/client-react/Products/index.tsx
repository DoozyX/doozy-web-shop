import React, { useState } from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';

import settings from '@gqlapp/config';
import { PageLayout } from '@gqlapp/look-client-react';

import GET_ALL_PRODUCTS from '../graphql/GetAllProducts.graphql';
import CATEGORIES_QUERY from '../graphql/CategoriesQuery.graphql';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { RouteComponentProps } from 'react-router-dom';
import { Card, Image, Rating, Loader, List, Checkbox, Header } from 'semantic-ui-react';

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
  const [categoryFilters, setCategoryFilters] = useState([]);
  const {
    data: { products },
    loading
  } = useQuery(GET_ALL_PRODUCTS);
  const {
    data: { categories },
    loading: loadingcat
  } = useQuery(CATEGORIES_QUERY);

  return (
    <PageLayout>
      {renderMetaData(t)}
      {loading || loadingcat ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Header as="h1" dividing>
              {t('products')}
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

          <div
            style={{
              width: '15%',
              display: 'inline-table'
            }}
          >
            <Header as="h3" dividing>
              Categories filter
            </Header>
            <List>
              {categories.map((category: any) => (
                <List.Item key={'c' + category.id}>
                  <Checkbox
                    label={category.name}
                    id={category.id}
                    onChange={(_e, data) => {
                      if (data.checked) {
                        let filters = categoryFilters;
                        filters = filters.concat(data.id);
                        setCategoryFilters(filters);
                      } else {
                        let filters = categoryFilters;
                        filters = filters.filter(item => item !== data.id);
                        setCategoryFilters(filters);
                      }
                    }}
                  />
                </List.Item>
              ))}
            </List>
          </div>
          <div
            style={{
              width: '85%',
              display: 'inline-block',
              paddingLeft: '2em'
            }}
          >
            <Card.Group itemsPerRow={5}>
              {products
                .filter(({ category, brand }: any) => {
                  let valid = true;
                  if (categoryFilters.length > 0) {
                    const categoryIndex = categoryFilters.indexOf(category.id);
                    valid = categoryIndex > -1;
                  }
                  return valid;
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
        </React.Fragment>
      )}
    </PageLayout>
  );
};

export default translate('product')(Products);
