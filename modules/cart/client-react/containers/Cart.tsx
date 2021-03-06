import React from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { PageLayout } from '@gqlapp/look-client-react';
import settings from '@gqlapp/config';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Item, Button, Input, Header, Divider, Segment, Icon } from 'semantic-ui-react';

import GET_CART_ITEMS from '../graphql/GetCartItems.graphql';
import REMOVE_CART_ITEM from '../graphql/RemoveCartItem.graphql';
import CHANGE_CART_ITEM_QUANTITY from '../graphql/ChangeCartItemQuantity.graphql';
import { RouteComponentProps } from 'react-router';

interface CartProps extends RouteComponentProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

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
    <Item>
      <Item.Image size="small" src={imageSource} />

      <Item.Content verticalAlign="middle">
        <Item.Header>{name}</Item.Header>
        <Item.Description />
        <Item.Meta>
          <span className="price">{price} MKD</span>
          <div style={{ float: 'right' }}>
            Quantity{' '}
            <Input
              type="number"
              style={{ width: '100px' }}
              value={quantity}
              onChange={e => {
                changeItemQuantity({
                  variables: {
                    productId: id,
                    quantity: parseInt(e.target.value, 10)
                  }
                });
              }}
            />
          </div>
        </Item.Meta>
        <Item.Description>{size} kg</Item.Description>
        <Item.Extra>
          <Button secondary floated="right" onClick={() => removeItem()}>
            Remove
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

const Cart = ({ t, history }: CartProps) => {
  const { data } = useQuery(GET_CART_ITEMS);

  return (
    <PageLayout>
      {renderMetaData(t)}
      <Divider />
      <Header as="h1">{t('cartTitle')} </Header>
      <Divider />
      <Item.Group relaxed divided>
        {!!data.getCartItems && data.getCartItems.length > 0 ? (
          data.getCartItems.map(({ product, quantity }: any) => <CartItem product={product} quantity={quantity} />)
        ) : (
          <Segment placeholder>
            <Header icon>
              <Icon name="cart" />
              No Cart Items
            </Header>
            <Button
              primary
              onClick={() => {
                history.push('/products');
              }}
            >
              Go shopping
            </Button>
          </Segment>
        )}
      </Item.Group>
      <Divider />
      <div>
        <Button
          floated="right"
          disabled={!(!!data.getCartItems && data.getCartItems.length > 0)}
          onClick={() => {
            history.push('/shipping');
          }}
          primary
        >
          Buy All
        </Button>
        <span style={{ float: 'right' }}>
          <Header as="h2">
            Total:
            {data.getCartItems.reduce((total: any, { product, quantity }: any) => {
              return (total += product.price * quantity);
            }, 0)}{' '}
            MKD
          </Header>
        </span>
      </div>
    </PageLayout>
  );
};

export default translate('cart')(Cart);
