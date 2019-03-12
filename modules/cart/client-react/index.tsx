import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';

import Cart from './containers/Cart';
import resources from './locales';

const NavLinkWithI18n = translate('cart')(({ t }: { t: TranslateFunction }) => {
  return (
    <NavLink to="/cart" className="nav-link" activeClassName="active">
      {t('cart:navLink')}
    </NavLink>
  );
});

export default new ClientModule({
  route: [<Route exact path="/cart" component={Cart} />],
  navItemRight: [
    <MenuItem key="/cart">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'cart', resources }]
});