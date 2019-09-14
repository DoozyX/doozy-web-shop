import React, { useState } from 'react';
import Helmet from 'react-helmet';

import { PageLayout } from '@gqlapp/look-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '../../../../settings';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Button, Comment, Form, Header, Loader, Rating as RatingStars, Modal, Icon } from 'semantic-ui-react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';

import GET_PRODUCT from '../graphql/GetProductQuery.graphql';
import ADD_PRODUCT_TO_CART from '../graphql/AddProductToCart.graphql';
import GET_CART_ITEMS from '../graphql/GetCartItems.graphql';
import ADD_PRODUCT_REVIEW from '../graphql/AddProductReview.graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Label, Input } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
const {
  JSONLD,
  Product: LDProduct,
  Review,
  Author,
  Rating,
  AggregateRating,
  GenericCollection
} = require('react-structured-data');

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

const ProductReview = ({ user, content, created_at }: any) => {
  const { avatar, fullName } = user;
  return (
    <Comment>
      <Comment.Avatar src={avatar || 'https://i.imgur.com/6XN24Lg.png'} />
      <Comment.Content>
        <Comment.Author as="a">{fullName}</Comment.Author>
        <Comment.Metadata>
          <div>{moment(parseInt(created_at, 10)).fromNow()}</div>
        </Comment.Metadata>
        <Comment.Text>{content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

const Product = ({ t, match }: ProductProps) => {
  const [quantity, setQuantity] = useState(1);
  const [reviewMessage, setReviewMessage] = useState('');
  const { data, loading } = useQuery(GET_PRODUCT, { variables: { id: parseInt(match.params.id, 10) } });
  const [addToCart] = useMutation(ADD_PRODUCT_TO_CART, {
    refetchQueries: [{ query: GET_CART_ITEMS }],
    variables: {
      productId: parseInt(match.params.id, 10),
      quantity
    }
  });
  const [addReview] = useMutation(ADD_PRODUCT_REVIEW, {
    refetchQueries: [{ query: GET_PRODUCT, variables: { id: parseInt(match.params.id, 10) } }],
    update: () => {
      setReviewMessage('');
    },
    variables: {
      productId: parseInt(match.params.id, 10),
      content: reviewMessage
    }
  });

  if (loading) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <Loader />
      </PageLayout>
    );
  }

  const { imageSource, name, price, rating, description, reviews, images, brand } = data.product;
  const imageItems = images.map(({ image }: any) => {
    return { original: image, thumbnail: image };
  });
  imageItems.push({ original: imageSource, thumbnail: imageSource });
  return (
    <PageLayout>
      {renderMetaData(t)}
      <JSONLD>
        <LDProduct name={name} brand={brand ? brand.name : name} description={description} image={imageSource}>
          <AggregateRating ratingValue={rating} reviewCount={111} />
          <GenericCollection type="review">
            {reviews.map(({ user, content, created_at }: any) => (
              <Review name={content} reviewBody={content} datePublished={created_at}>
                <Author name={user.fullName} />
                <Rating ratingValue={5} />
              </Review>
            ))}
          </GenericCollection>
        </LDProduct>
      </JSONLD>
      <div style={{ padding: '5%' }}>
        <div>
          <div style={{ width: '50%', display: 'inline-block' }}>
            <ImageGallery items={imageItems} />
          </div>
          <div style={{ display: 'inline-block', marginLeft: '5%', paddingTop: '5%', verticalAlign: 'top' }}>
            <h1>{name}</h1>
            <h2>{price} MKD</h2>
            <div>
              <RatingStars icon="star" defaultRating={rating} maxRating={5} />
            </div>
            <Label for="quantity">Quantity: </Label>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              min={1}
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value, 10))}
            />
            <Modal
              centered={true}
              basic
              size="mini"
              trigger={
                <Button
                  color="green"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to cart
                </Button>
              }
            >
              <Header icon="archive" content="Order was successful" />
              <Modal.Actions>
                <Button color="green">
                  <Icon name="checkmark" /> Continue
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        </div>
        <h2>{t('description')}</h2>
        <ReactMarkdown source={description} />

        <Comment.Group>
          <Header as="h3" dividing>
            Reviews
          </Header>

          {reviews.map((review: any) => (
            <ProductReview key={review.id} {...review} />
          ))}

          <Form reply>
            <Form.TextArea
              value={reviewMessage}
              onChange={(_event, dataValue) => setReviewMessage(dataValue.value.toString())}
            />
            <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={() => addReview()} />
          </Form>
        </Comment.Group>
      </div>
    </PageLayout>
  );
};

export default translate('product')(Product);
