import React from 'react';
import { translate, TranslateFunction } from '@module/i18n-client-react';
import Helmet from 'react-helmet';
import { Button, Card, CardBody, CardGroup, CardTitle, UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import settings from '../../../../settings';

import { PageLayout } from '../../../../packages/client/src/modules/common/components/web';
import CATEGORIES_QUERY from '../graphql/CategoriesQuery.graphql';
import BRANDS_QUERY from '../graphql/BrandsQuery.graphql';

const H1 = styled.h1`
  text-align: center;
`;

interface ProductProps {
  t: TranslateFunction;
}

const items = [
  {
    src: 'https://www.ecoseibsrl.it/wp-content/uploads/2016/09/wallpaper-natura-2.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://www.ecoseibsrl.it/wp-content/uploads/2016/09/wallpaper-natura-2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://www.ecoseibsrl.it/wp-content/uploads/2016/09/wallpaper-natura-2.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
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
    return (
      <PageLayout>
        {renderMetaData(t)}

        <UncontrolledCarousel items={items} />
        <H1>Categories</H1>
        <div>
          <Query query={CATEGORIES_QUERY}>
            {({ loading, error, data: { categories } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                'Loading...'
              ) : (
                <CardGroup>
                  {categories.map((category: any, i: any) => (
                    <Card key={i}>
                      <CardBody>
                        <CardTitle>{category.name}</CardTitle>
                        <Button>View Products</Button>
                      </CardBody>
                    </Card>
                  ))}
                </CardGroup>
              );
            }}
          </Query>
        </div>
        <H1>Brands</H1>
        <div>
          <Query query={BRANDS_QUERY}>
            {({ loading, error, data: { brands } }) => {
              if (error) {
                throw new Error(String(error));
              }
              return loading ? (
                'Loading...'
              ) : (
                <CardGroup>
                  {brands.map((brand: any, i: any) => (
                    <Card key={i}>
                      <CardBody>
                        <CardTitle>{brand.name}</CardTitle>
                        <Button>View Products</Button>
                      </CardBody>
                    </Card>
                  ))}
                </CardGroup>
              );
            }}
          </Query>
        </div>
      </PageLayout>
    );
  }
}

export default translate('product')(Home);
