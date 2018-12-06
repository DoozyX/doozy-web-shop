import React from 'react';

import ClientModule from '@module/module-client-react';
import { translate, TranslateFunction } from '@module/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '../../../packages/client/src/modules/common/components/web';
import Product from './containers/Product';
import resources from './locales';

const NavLinkWithI18n = translate('product')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/product" className="nav-link" activeClassName="active">
    {t('product:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/product" component={Product} />],
  navItem: [
    <MenuItem key="/product">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'product', resources }]
});
