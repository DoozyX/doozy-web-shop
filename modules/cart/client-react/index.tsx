import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';

import { NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
const { AuthRoute, IfLoggedIn } = require('@gqlapp/user-client-react');

import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import resources from './locales';
import { Icon, Loader } from 'semantic-ui-react';
import { Query } from 'react-apollo';

import GET_CART_ITEMS from './graphql/GetCartItems.graphql';

const MenuItemWithI18n = translate('cart')(({ t, text, children, ...rest }: any) => (
  <Query query={GET_CART_ITEMS}>
    {({ loading, error, data }: any) => {
      if (loading) {
        return (
          <Icon name="cart">
            <Loader />
          </Icon>
        );
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      return (
        <MenuItem as={NavLink} {...rest}>
          {t(text)}
          <Icon name="cart" style={{ marginLeft: '5px' }} />({data.getCartItems.length}){' '}
        </MenuItem>
      );
    }}
  </Query>
));

export default new ClientModule({
  route: [
    <AuthRoute exact path="/cart" redirect="/" component={Cart} />,
    <AuthRoute exact path="/shipping" redirect="/" component={Shipping} />
  ],
  navItemRight: [
    <IfLoggedIn>
      <MenuItemWithI18n key="/cart" text={'navLink'} exact to="/cart" />
    </IfLoggedIn>
  ],
  localization: [{ ns: 'cart', resources }]
});
