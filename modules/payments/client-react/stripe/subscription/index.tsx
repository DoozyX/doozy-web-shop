import React from 'react';
import ClientModule from '@gqlapp/module-client-react';

import settings from '../../../../../settings';

import SubscriptionAuthRouter from './containers/Auth';
import resources from './locales';
import AddSubscription from './containers/AddSubscription';
import SubscriberPage from './containers/SubscriberPage';
import UpdateCreditCard from './containers/UpdateCreditCard';

const { AuthRoute } = require('@gqlapp/user-client-react');

export default (settings.stripe.subscription.enabled && settings.stripe.subscription.publicKey
  ? new ClientModule({
      route: [
        <AuthRoute exact role="user" path="/add-subscription" component={AddSubscription} />,
        <AuthRoute
          exact
          role="user"
          path="/subscriber-page"
          component={(props: any) => <SubscriptionAuthRouter {...props} component={SubscriberPage} />}
        />,
        <AuthRoute
          exact
          role="user"
          path="/update-credit-card"
          component={(props: any) => <SubscriptionAuthRouter {...props} component={UpdateCreditCard} />}
        />
      ],
      scriptsInsert: ['https://js.stripe.com/v3/'],
      localization: [{ ns: 'stripeSubscription', resources }]
    })
  : undefined);
