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
  text: string;
  t: TranslateFunction;
}

const MenuItemWithI18n = translate('product')(({ t, text, ...rest }: NavLinkProps) => (
  <MenuItem name={t(text)} as={NavLink} {...rest} />
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
    <MenuItemWithI18n key="/" text={'navLinkHome'} exact to="/" />,
    <MenuItemWithI18n key="/brands" text={'navLinkBrands'} exact to="/brands" />,
    <MenuItemWithI18n key="/products" text={'navLinkProducts'} exact to="/products" />,
    <MenuItemWithI18n key="/seeds" text={'navLinkSeeds'} exact to="/seeds" />
  ],
  localization: [{ ns: 'product', resources }]
});
