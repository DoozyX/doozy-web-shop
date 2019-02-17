import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Article from './containers/Article';
import Articles from './containers/Articles';
import resources from './locales';

const NavLinkWithI18n = translate('article')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/articles" className="nav-link" activeClassName="active">
    {t('article:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [
    <Route exact path="/articles" component={Articles} />,
    <Route exact path="/article/:id" component={Article} />
  ],
  navItem: [
    <MenuItem key="/articles">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'article', resources }]
});
