import React from 'react';

import ClientModule from '@module/module-client-react';
import { translate, TranslateFunction } from '@module/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@module/look-client-react';
import Article from './containers/Article';
import resources from './locales';

const NavLinkWithI18n = translate('article')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/article" className="nav-link" activeClassName="active">
    {t('article:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/article" component={Article} />],
  navItem: [
    <MenuItem key="/article">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'article', resources }]
});
