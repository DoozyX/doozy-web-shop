import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import resources from './locales';

interface NavLinkProps {
  to: string;
  text: string;
  exact: boolean;
}

const NavLinkWithI18n = translate('product')(({ t, ...rest }: { t: TranslateFunction; rest: NavLinkProps }) => (
  // @ts-ignore
  <NavLink exact={rest.exact} to={rest.to} className="nav-link" activeClassName="active">
    {//
    // @ts-ignore
    t(rest.text)}
  </NavLink>
));

export default new ClientModule({
  route: [
    <Route exact path="/" component={Home} />,
    <Route exact path="/brands" component={Products} />,
    <Route exact path="/seeds" component={Products} />,
    <Route exact path="/products" component={Products} />,
    <Route exact path="/product/:id" component={Product} />
  ],
  navItem: [
    <MenuItem key="/">
      <NavLinkWithI18n to="/" text={'navLinkHome'} exact={true} />
    </MenuItem>,
    <MenuItem key="/brands">
      <NavLinkWithI18n to="/brands" text={'navLinkBrands'} />
    </MenuItem>,
    <MenuItem key="/products">
      <NavLinkWithI18n to="/products" text={'navLinkProducts'} />
    </MenuItem>,
    <MenuItem key="/seeds">
      <NavLinkWithI18n to="/seeds" text={'navLinkSeeds'} />
    </MenuItem>
  ],
  localization: [{ ns: 'product', resources }]
});
