import React, { useContext } from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Home from './Home';
import Products from './Products';
import Seeds from './Products/Seeds';
import Brands from './Products/Brands';
import Diary from './Products/Diary';
import Fruits from './Products/Fruits';
import PlantProtection from './Products/PlantProtection';
import Tools from './Products/Tools';
import Vegetables from './Products/Vegetables';
import Product from './Product';
import resources from './locales';
import AddProduct from './Product/AddProduct';
import { RootContext } from '@gqlapp/splash-screen-client-react';
const { AuthRoute, IfLoggedIn } = require('@gqlapp/user-client-react');

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
    <Route exact path="/brands" component={Brands} />,
    <Route exact path="/seeds" component={Seeds} />,
    <Route exact path="/products" component={Products} />,
    <AuthRoute exact path="/product/new" component={AddProduct} />,
    <Route exact path="/product/:id" component={Product} />,
    <Route exact path="/tools" component={Tools} />,
    <Route exact path="/fruits" component={Fruits} />,
    <Route exact path="/vegetables" component={Vegetables} />,
    <Route exact path="/dairy" component={Diary} />,
    <Route exact path="/plantProtection" component={PlantProtection} />
  ],
  navItem: [
    <MenuItemWithI18n key="/" text={'navLink.home'} exact to="/" />,
    <MenuItemWithI18n key="/brands" text={'navLink.brands'} exact farmerOnly to="/brands" />,
    <MenuItemWithI18n key="/products" text={'navLink.products'} exact to="/products" />,
    <MenuItemWithI18n key="/seeds" text={'navLink.seeds'} exact farmerOnly to="/seeds" />,
    <MenuItemWithI18n key="/tools" text={'navLink.tools'} exact farmerOnly to="/tools" />,
    <MenuItemWithI18n key="/plantProtection" text={'navLink.plantProtection'} exact farmerOnly to="/plantProtection" />,
    <MenuItemWithI18n key="/fruits" text={'navLink.fruits'} exact customerOnly to="/fruits" />,
    <MenuItemWithI18n key="/vegetables" text={'navLink.vegetables'} exact customerOnly to="/vegetables" />,
    <MenuItemWithI18n key="/dairy" text={'navLink.dairyProducts'} exact customerOnly to="/dairy" />
  ],
  navItemRight: [
    <IfLoggedIn>
      <MenuItemWithI18n key="/product/new" text={'navLink.addProduct'} exact farmerOnly to="/product/new" />
    </IfLoggedIn>
  ],
  localization: [{ ns: 'product', resources }]
});
