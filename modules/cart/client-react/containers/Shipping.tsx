import React, { useState } from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';
import { Step, Icon, Form, Divider, Segment, Item, Button, Header, Modal } from 'semantic-ui-react';

import GET_CART_ITEMS from '../graphql/GetCartItems.graphql';
import { useQuery } from '@apollo/react-hooks';

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const CartItem = ({ product: { name, price, imageSource, size }, quantity }: any) => {
  return (
    <Item>
      <Item.Image size="small" src={imageSource} />

      <Item.Content verticalAlign="middle">
        <Item.Header>{name}</Item.Header>
        <Item.Description />
        <Item.Meta>
          <span className="price">{price} MKD</span>
          <div>Quantity {quantity}</div>
        </Item.Meta>
        <Item.Description>{size} kg</Item.Description>
      </Item.Content>
    </Item>
  );
};

const Shipping = ({ t, history }: any) => {
  const [step, setStep] = useState(0);
  const [payMode, setPayMode] = useState(0);

  const { data } = useQuery(GET_CART_ITEMS);

  return (
    <PageLayout>
      {renderMetaData(t)}

      <Step.Group fluid>
        <Step active={step === 0} disabled={step < 0} completed={step > 0} onClick={() => setStep(0)}>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>
        <Step active={step === 1} disabled={step < 1} completed={step > 1} onClick={() => setStep(1)}>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>
        <Step active={step === 2} disabled={step < 2}>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>

      {step === 0 && (
        <div>
          <Form>
            <Form.Input placeholder="City" name="City" fluid />
            <Form.Input placeholder="Address" name="Address" fluid />
            <Form.Input placeholder="Address2" name="Address" fluid />
            <Form.Input placeholder="Zip code" name="Zip" fluid />
            <Form.Input placeholder="Phone" name="Phone" fluid />

            <Button onClick={() => setStep(1)}>Continue</Button>
          </Form>
        </div>
      )}
      {step === 1 && (
        <Segment basic textAlign="center">
          <Form>
            <Form.Input placeholder="Name on card" name="Name" fluid />
            <Form.Input placeholder="Card Number" name="number" fluid />
            <Form.Input placeholder="CVV" name="Address" fluid />

            <Button
              onClick={() => {
                setPayMode(0);
                setStep(2);
              }}
            >
              Continue
            </Button>
          </Form>

          <Divider horizontal>Or</Divider>

          <Button
            onClick={() => {
              setPayMode(1);
              setStep(2);
            }}
          >
            Continue with cash on delivery
          </Button>
        </Segment>
      )}

      {step === 2 && (
        <Segment>
          City: Skopje
          <br />
          Address: Gjorce Petrov
          <br />
          Address2: Boris Sarafov
          <br />
          Zip: 1000
          <br />
          Phone +38971287398
          <Divider />
          Payment type: {payMode === 0 ? 'Credit card' : 'Cash on delivery'}
          <Divider />
          <Header as="h2">Products</Header>
          <Item.Group relaxed divided>
            {data.getCartItems.map(({ product, quantity }: any) => (
              <CartItem product={product} quantity={quantity} />
            ))}
          </Item.Group>
          <Divider />
          <Modal
            centered={true}
            basic
            size="mini"
            trigger={
              <Button floated="right" color="green">
                BUY ALL
              </Button>
            }
          >
            <Header icon="archive" content="Order was successful" />
            <Modal.Actions>
              <Button color="green" onClick={() => history.push('/')}>
                <Icon name="checkmark" /> Continue
              </Button>
            </Modal.Actions>
          </Modal>
        </Segment>
      )}
    </PageLayout>
  );
};

export default translate('cart')(Shipping);
