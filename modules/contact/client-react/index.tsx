import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react';
import { MenuItem } from '@gqlapp/look-client-react';
import Contact from './containers/Contact';
import resources from './locales';

const MenuItemWithI18n = translate('contact')(({ t, text, ...rest }: any) => (
  <MenuItem name={t(text)} as={NavLink} {...rest} />
));

export default new ClientModule({
  route: [<Route exact path="/contact" component={Contact} />],
  navItem: [<MenuItemWithI18n key="/contact" text={'navLink'} exact to="/contact" />],
  localization: [{ ns: 'contact', resources }]
});
