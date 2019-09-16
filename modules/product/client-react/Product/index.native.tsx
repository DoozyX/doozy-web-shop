import React, { useState } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Spinner,
  Thumbnail,
  H2,
  H1,
  ListItem,
  Right,
  List,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import { useMutation, useQuery } from '@apollo/react-hooks';

import CarouselView from '../components/CarouselView';

import GET_PRODUCT from '../graphql/GetProductQuery.graphql';
import ADD_PRODUCT_TO_CART from '../graphql/AddProductToCart.graphql';
import GET_CART_ITEMS from '../graphql/GetCartItems.graphql';
import ADD_PRODUCT_REVIEW from '../graphql/AddProductReview.graphql';

const ArticleComment = ({ user, content, created_at }: any) => {
  const { avatar, fullName } = user;
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: avatar || 'https://i.imgur.com/6XN24Lg.png' }} />
      </Left>
      <Body>
        <Text>{fullName}</Text>
        <Text note>{content}</Text>
      </Body>
      <Right>
        <Text note>{moment(parseInt(created_at, 10)).fromNow()}</Text>
      </Right>
    </ListItem>
  );
};

const Product = ({ navigation }: any) => {
  const ID = navigation.getParam('id');
  const [quantity, setQuantity] = useState(1);
  const [reviewMessage, setReviewMessage] = useState('');
  const { data, loading } = useQuery(GET_PRODUCT, { variables: { id: parseInt(ID, 10) } });
  const [addToCart] = useMutation(ADD_PRODUCT_TO_CART, {
    refetchQueries: [{ query: GET_CART_ITEMS }],
    variables: {
      productId: parseInt(ID, 10),
      quantity
    }
  });
  const [addReview] = useMutation(ADD_PRODUCT_REVIEW, {
    refetchQueries: [{ query: GET_PRODUCT, variables: { id: parseInt(ID, 10) } }],
    update: () => {
      setReviewMessage('');
    },
    variables: {
      productId: parseInt(ID, 10),
      content: reviewMessage
    }
  });

  if (loading) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  }
  const { name, price, description, reviews, images } = data.product;
  const imageItems = images.map(({ image }: any) => {
    return { title: '', thumbnail: image };
  });
  return (
    <Content>
      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ height: 300 }}>
          <CarouselView items={imageItems} />
        </View>
        <H2 style={{ textAlign: 'center' }}>{name}</H2>
        <H1 style={{ textAlign: 'center' }}>{price} MKD </H1>
        <Item floatingLabel>
          <Label>Quantity</Label>
          <Input value={String(quantity)} onChangeText={text => setQuantity(Number(text))} keyboardType="numeric" />
        </Item>
        <Button block onPress={addToCart}>
          <Text>ADD TO CART</Text>
        </Button>
        <Text>{description}</Text>
        <H1>Reviews</H1>
        <List>
          {reviews.map((comment: any) => (
            <ArticleComment key={comment.id} {...comment} />
          ))}
          <Form>
            <Item floatingLabel>
              <Label>Review</Label>
              <Input value={reviewMessage} onChangeText={(text: any) => setReviewMessage(text)} />
              <Icon active name="arrow-up" onPress={() => addReview()} />
            </Item>
            <Item last></Item>
          </Form>
        </List>
      </View>
    </Content>
  );
};

export default Product;
