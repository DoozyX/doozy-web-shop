import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useTranslation } from '@gqlapp/i18n-client-react';

import GET_CART_ITEMS from '../graphql/GetCartItems.graphql';
import REMOVE_CART_ITEM from '../graphql/RemoveCartItem.graphql';
import CHANGE_CART_ITEM_QUANTITY from '../graphql/ChangeCartItemQuantity.graphql';
import {
  Container,
  Content,
  Spinner,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  H1,
  Input,
  Item,
  Label,
  H2
} from 'native-base';

const CartItem = ({ product: { id, name, price, imageSource, size }, quantity }: any) => {
  const [removeItem] = useMutation(REMOVE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_ITEMS }],
    variables: {
      productId: id
    }
  });
  const [changeItemQuantity] = useMutation(CHANGE_CART_ITEM_QUANTITY, {
    refetchQueries: [{ query: GET_CART_ITEMS }]
  });

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: imageSource }} />
      </Left>
      <Body>
        <Text>{name}</Text>
        <Text note numberOfLines={1}>
          {price} MKD
        </Text>
        <Item floatingLabel>
          <Label>Quantity</Label>
          <Input
            value={String(quantity)}
            keyboardType="numeric"
            onChangeText={text => {
              changeItemQuantity({
                variables: {
                  productId: id,
                  quantity: parseInt(text, 10)
                }
              });
            }}
          />
        </Item>
      </Body>
      <Right>
        <Button onPress={() => removeItem()}>
          <Text>Remove</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

const Cart = ({ navigation }: any) => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);
  const { t } = useTranslation('cart');

  if (loading) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  }

  if (!!data && !!data.getCartItems && data.getCartItems.length > 0) {
    return (
      <Content style={{ margin: 10 }}>
        <H1>{t('cartTitle')} </H1>
        <List>
          {data.getCartItems.map((cartItem: any) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </List>

        <Button
          block
          disabled={!(!!data.getCartItems && data.getCartItems.length > 0)}
          onPress={() => {
            // TODO: shipping
          }}
        >
          <Text>Buy All</Text>
        </Button>

        <Right>
          <H2>
            Total:
            {data.getCartItems.reduce((total: any, { product, quantity }: any) => {
              return (total += product.price * quantity);
            }, 0)}{' '}
            MKD
          </H2>
        </Right>
      </Content>
    );
  }
  return (
    <Content style={{ margin: 10 }}>
      <H1>{t('cartTitle')} </H1>
      <List>
        <Spinner />
      </List>
    </Content>
  );
};

export default Cart;
