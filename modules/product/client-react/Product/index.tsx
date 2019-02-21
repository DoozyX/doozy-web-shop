import React, { Suspense, useState } from 'react';
import Helmet from 'react-helmet';

import { PageLayout } from '@gqlapp/look-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '../../../../settings';
import { useQuery } from 'react-apollo-hooks';

import GET_PRODUCT from '../graphql/GetProductQuery.graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Spinner, Label, Button, Input } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import ReactMarkdown from 'react-markdown';

interface MatchParams {
  id: string;
}

interface ProductProps extends RouteComponentProps<MatchParams> {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const Product = ({ t, match }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);
  const { data } = useQuery(GET_PRODUCT, { variables: { id: parseInt(match.params.id, 10) } });
  const { imageSource, name, price, rating, description } = data.product;
  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Spinner />}>
        <div style={{ padding: '5%' }}>
          <div>
            <img width={'50%'} src={imageSource} style={{ verticalAlign: 'top' }} />
            <div style={{ display: 'inline-block', marginLeft: '5%', paddingTop: '5%' }}>
              <h1>{name}</h1>
              <h2>{price} MKD</h2>
              <div>
                <StarRatingComponent name="Rating" value={rating} />
              </div>
              <Label for="quantity">Quantity: </Label>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value, 10))}
              />
              <Button>Add to cart</Button>
              <Button>Buy now</Button>
            </div>
          </div>
          <h2>{t('description')}</h2>
          <ReactMarkdown source={description} />
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default translate('product')(Product);
