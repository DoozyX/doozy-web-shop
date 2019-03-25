import React, { useContext } from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import resources from './locales';
import { RootContext } from '@gqlapp/splash-screen-client-react';

const MenuItemWithI18n = translate('product')(({ t, text, farmerOnly = false, customerOnly = false, ...rest }: any) => {
  const { farmer } = useContext(RootContext);
  if (farmerOnly && !farmer) {
    return null;
  }
  if (customerOnly && farmer) {
    return null;
  }
  return <MenuItem name={t(text)} as={NavLink} {...rest} />;
});

export default new ClientModule({
  route: [
    <Route exact path="/" component={Home} />,
    <Route exact path="/seeds" component={Products} />,
    <Route exact path="/products" component={Products} />,
    <Route exact path="/product/new" component={Home} />,
    <Route exact path="/product/:id" component={Product} />,
    <Route exact path="/tools" component={Products} />,
    <Route exact path="/fruits" component={Products} />,
    <Route exact path="/vegetables" component={Products} />,
    <Route exact path="/dairy" component={Products} />
  ],
  navItem: [
    <MenuItemWithI18n key="/" text={'navLink.home'} exact to="/" />,
    <MenuItemWithI18n key="/products" text={'navLink.products'} exact to="/products" />,
    <MenuItemWithI18n key="/seeds" text={'navLink.seeds'} exact farmerOnly to="/seeds" />,
    <MenuItemWithI18n key="/tools" text={'navLink.tools'} exact farmerOnly to="/tools" />,
    <MenuItemWithI18n key="/fruits" text={'navLink.fruits'} exact customerOnly to="/fruits" />,
    <MenuItemWithI18n key="/vegetables" text={'navLink.vegetables'} exact customerOnly to="/vegetables" />,
    <MenuItemWithI18n key="/dairy" text={'navLink.dairyProducts'} exact customerOnly to="/dairy" />
  ],
  navItemRight: [<MenuItemWithI18n key="/product/new" text={'navLink.addProduct'} exact to="/product/new" />],
  localization: [{ ns: 'product', resources }]
});
