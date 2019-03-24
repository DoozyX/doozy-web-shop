import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';

import { NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
const { AuthRoute, IfLoggedIn } = require('@gqlapp/user-client-react');

import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import resources from './locales';
import { Icon } from 'semantic-ui-react';

const MenuItemWithI18n = translate('cart')(({ t, text, children, ...rest }: any) => (
  <MenuItem name={t(text)} as={NavLink} {...rest}>
    {!!children ? children : children + t(text)}
  </MenuItem>
));

export default new ClientModule({
  route: [
    <AuthRoute exact path="/cart" redirect="/" component={Cart} />,
    <AuthRoute exact path="/shipping" redirect="/" component={Shipping} />
  ],
  navItemRight: [
    <IfLoggedIn>
      <MenuItemWithI18n key="/cart" text={'navLink'} exact to="/cart">
        <Icon name="cart" />
      </MenuItemWithI18n>
    </IfLoggedIn>
  ],
  localization: [{ ns: 'cart', resources }]
});
