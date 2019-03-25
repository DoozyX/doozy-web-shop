import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { StripeSubscriptionProfile } from '@gqlapp/payments-client-react';
import { translate } from '@gqlapp/i18n-client-react';
import { LayoutCenter, Card, CardGroup, CardTitle, CardText, PageLayout } from '@gqlapp/look-client-react';
import { RootContext } from '@gqlapp/splash-screen-client-react';
import { Header, Button } from 'semantic-ui-react';

import settings from '../../../../settings';

const renderMetaData = t => {
  return (
    <Helmet
      title={`${settings.app.name} - ${t('profile.title')}`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - ${t('profile.meta')}`
        }
      ]}
    />
  );
};

const ProfileView = ({ currentUserLoading, currentUser, t }) => {
  const { farmer, updateProperty } = useContext(RootContext);
  const [, setCookie] = useCookies(['farmer']);

  console.log({ farmer });

  if (currentUserLoading && !currentUser) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <div className="text-center">{t('profile.loadMsg')}</div>
      </PageLayout>
    );
  } else if (currentUser) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <LayoutCenter>
          <Header as="h3">I am a </Header>
          <Button.Group size="medium" toggle>
            <Button
              active={farmer}
              onClick={() => {
                updateProperty('farmer', true);
                setCookie('farmer', true, { maxAge: 90000000 });
              }}
            >
              Farmer
            </Button>
            <Button.Or />
            <Button
              active={!farmer}
              onClick={() => {
                updateProperty('farmer', false);
                setCookie('farmer', false, { maxAge: 90000000 });
              }}
            >
              Customer
            </Button>
          </Button.Group>
          <h1 className="text-center">{t('profile.card.title')}</h1>
          <Card>
            <CardGroup>
              <CardTitle>{t('profile.card.group.name')}:</CardTitle>
              <CardText>{currentUser.username}</CardText>
            </CardGroup>
            <CardGroup>
              <CardTitle>{t('profile.card.group.email')}:</CardTitle>
              <CardText>{currentUser.email}</CardText>
            </CardGroup>
            <CardGroup>
              <CardTitle>{t('profile.card.group.role')}:</CardTitle>
              <CardText>{currentUser.role}</CardText>
            </CardGroup>
            {currentUser.profile && currentUser.profile.fullName && (
              <CardGroup>
                <CardTitle>{t('profile.card.group.full')}:</CardTitle>
                <CardText>{currentUser.profile.fullName}</CardText>
              </CardGroup>
            )}
            {/* Credit card info (Stripe subscription module)*/}
            {settings.stripe.subscription.enabled &&
              settings.stripe.subscription.publicKey &&
              currentUser.role === 'user' && <StripeSubscriptionProfile />}
          </Card>
          <Link className="mt-2 btn user-link" to={`/users/${currentUser.id}`}>
            {t('profile.editProfileText')}
          </Link>
        </LayoutCenter>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <h2>{t('profile.errorMsg')}</h2>
      </PageLayout>
    );
  }
};

ProfileView.propTypes = {
  currentUserLoading: PropTypes.bool,
  currentUser: PropTypes.object,
  t: PropTypes.func
};

export default translate('user')(ProfileView);