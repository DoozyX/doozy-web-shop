import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
const { AuthRoute, IfLoggedIn } = require('@gqlapp/user-client-react');

import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import resources from './locales';
import { Icon } from 'semantic-ui-react';

const NavLinkWithI18n = translate('cart')(({ t }: { t: TranslateFunction }) => {
  return (
    <NavLink to="/cart" className="nav-link" activeClassName="active">
      {t('cart:navLink') + ' '}
      <Icon name="cart" />
    </NavLink>
  );
});

export default new ClientModule({
  route: [
    <AuthRoute exact path="/cart" redirect="/" component={Cart} />,
    <AuthRoute exact path="/shipping" redirect="/" component={Shipping} />
  ],
  navItemRight: [
    <IfLoggedIn>
      <MenuItem key="/cart">
        <NavLinkWithI18n />
      </MenuItem>
    </IfLoggedIn>
  ],
  localization: [{ ns: 'cart', resources }]
});
