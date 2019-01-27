import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Home from './Home';
import Brands from './Brands';
import Products from './Products';
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
    <Route exact path="/brands" component={Brands} />,
    <Route exact path="/products" component={Products} />
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
    </MenuItem>
  ],
  localization: [{ ns: 'product', resources }]
});
