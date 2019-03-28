import React from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { UncontrolledCarousel } from 'reactstrap';
import { Query } from 'react-apollo';

import settings from '../../../../settings';

import { PageLayout } from '@gqlapp/look-client-react';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Icon, Divider, Loader, Card, Image, Rating } from 'semantic-ui-react';

import BRANDS_QUERY from '../graphql/BrandsQuery.graphql';
import GET_TOP_CATEGORIES_QUERY from '../graphql/GetTopCategoriesQuery.graphql';
import GET_TOP_PRODUCTS_QUERY from '../graphql/GetTopProducts.graphql';
import GET_NEW_PRODUCTS_QUERY from '../graphql/GetNewProducts.graphql';

interface ProductProps extends RouteComponentProps {
  t: TranslateFunction;
}

const items = [
  {
    src: 'http://b.webpurr.com/Z97J.webp',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'PROMOTION 1'
  },
  {
    src: 'http://b.webpurr.com/PN7m.webp',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'PROMOTION 2'
  },
  {
    src: 'http://b.webpurr.com/x2dx.webp',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'PROMOTION 3'
  }
];

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

class Home extends React.Component<ProductProps> {
  public render() {
    const t = this.props.t;
    const history = this.props.history;
    return (
      <PageLayout>
        {renderMetaData(t)}

        <UncontrolledCarousel
          style={{
            position: 'absolute',
            width: '100%',
            left: '0'
          }}
          items={items}
        />
        <Divider
          horizontal
          style={{
            marginTop: '520px'
          }}
        >
          <Header as="h4">
            <Icon name="th" />
            Categories
          </Header>
        </Divider>
        <div>
          <Query query={GET_TOP_CATEGORIES_QUERY}>
            {({ loading, error, data: { topCategories } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                <Loader />
              ) : (
                <Card.Group itemsPerRow={5}>
                  {topCategories.map((category: any, i: any) => (
                    <Card
                      key={i}
                      image={category.image}
                      header={category.name}
                      onClick={() => history.push('/products')}
                    />
                  ))}
                </Card.Group>
              );
            }}
          </Query>
        </div>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="tag" />
            Brands
          </Header>
        </Divider>
        <div>
          <Query query={BRANDS_QUERY}>
            {({ loading, error, data: { brands } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                <Loader />
              ) : (
                <Card.Group itemsPerRow={5}>
                  {brands.map((brand: any, i: any) => (
                    <Card key={i} image={brand.image} header={brand.name} onClick={() => history.push('/products')} />
                  ))}
                </Card.Group>
              );
            }}
          </Query>
        </div>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="fire" />
            Top Products
          </Header>
        </Divider>
        <div>
          <Query query={GET_TOP_PRODUCTS_QUERY}>
            {({ loading, error, data: { topProducts } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                <Loader />
              ) : (
                <Card.Group itemsPerRow={5}>
                  {topProducts.map((product: any, i: any) => (
                    <Card key={i} onClick={() => history.push(`/product/${product.id}`)}>
                      <Image src={product.imageSource} />
                      <Card.Content textAlign="center">
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Meta>
                          <span className="price">
                            <b>{product.price} MKD</b>
                          </span>
                        </Card.Meta>
                        <Card.Description>{product.size} kg</Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign="center">
                        <Rating icon="star" defaultRating={product.rating} maxRating={5} />
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              );
            }}
          </Query>
        </div>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="newspaper" />
            New Products
          </Header>
        </Divider>
        <div>
          <Query query={GET_NEW_PRODUCTS_QUERY}>
            {({ loading, error, data: { newProducts } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                <Loader />
              ) : (
                <Card.Group itemsPerRow={5}>
                  {newProducts.map((product: any, i: any) => (
                    <Card key={i} onClick={() => history.push(`/product/${product.id}`)}>
                      <Image src={product.imageSource} />
                      <Card.Content textAlign="center">
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Meta>
                          <span className="price">
                            <b>{product.price} MKD</b>
                          </span>
                        </Card.Meta>
                        <Card.Description>{product.size} kg</Card.Description>
                      </Card.Content>
                      <Card.Content extra textAlign="center">
                        <Rating icon="star" defaultRating={product.rating} maxRating={5} />
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              );
            }}
          </Query>
        </div>
      </PageLayout>
    );
  }
}

export default translate('product')(Home);
