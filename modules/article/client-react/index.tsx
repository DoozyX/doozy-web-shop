import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Article from './containers/Article';
import Articles from './containers/Articles';
import resources from './locales';

const MenuItemWithI18n = translate('article')(({ t, text, ...rest }: any) => (
  <MenuItem name={t(text)} as={NavLink} {...rest} />
));

export default new ClientModule({
  route: [
    <Route exact path="/articles" component={Articles} />,
    <Route exact path="/article/:id" component={Article} />
  ],
  navItem: [<MenuItemWithI18n key="/articles" text={'navLink'} exact to="/articles" />],
  localization: [{ ns: 'article', resources }]
});
