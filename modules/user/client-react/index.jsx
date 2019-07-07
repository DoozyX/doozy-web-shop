import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { NavLink, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import { translate } from '@gqlapp/i18n-client-react';
import { MenuItem } from '@gqlapp/look-client-react';
import ClientModule from '@gqlapp/module-client-react';

import resolvers from './resolvers';
import resources from './locales';
import DataRootComponent from './containers/DataRootComponent';

import { AuthRoute, IfLoggedIn, IfNotLoggedIn, withLoadedUser, withLogout } from './containers/Auth';

const ProfileName = withLoadedUser(({ currentUser }) =>
  currentUser ? currentUser.fullName || currentUser.username : null
);

const LogoutLink = withRouter(
  withLogout(({ logout, history }) => (
    <MenuItem
      name="Logout"
      href="javascript:void(0)"
      onClick={e => {
        e.preventDefault();
        (async () => {
          await logout();
          history.push('/');
        })();
      }}
      className="nav-link"
    />
  ))
);

export * from './containers/Auth';
export { default as LOGIN } from './graphql/Login.graphql';

/* const NavLinkUsersWithI18n = translate('user')(({ t }) => (
  <NavLink to="/users" className="nav-link" activeClassName="active">
    {t('navLink.users')}
  </NavLink>
)); */

const MenuItemWithI18n = translate('user')(({ t, text, ...rest }) => (
  <MenuItem name={t(text)} as={NavLink} {...rest} />
));

export default new ClientModule({
  route: [
    <AuthRoute
      exact
      path="/profile"
      role={['user', 'admin']}
      redirect="/login"
      component={loadable(() => import('./containers/Profile').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/users"
      redirect="/profile"
      role="admin"
      component={loadable(() => import('./containers/Users').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/users/new"
      role={['admin']}
      component={loadable(() => import('./containers/UserAdd').then(c => c.default))}
    />,
    <AuthRoute
      path="/users/:id"
      redirect="/profile"
      role={['user', 'admin']}
      component={loadable(() => import('./containers/UserEdit').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/register"
      redirectOnLoggedIn
      redirect="/profile"
      component={loadable(() => import('./containers/Register').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/login"
      redirectOnLoggedIn
      redirect="/"
      component={loadable(() => import('./containers/Login').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/forgot-password"
      redirectOnLoggedIn
      redirect="/profile"
      component={loadable(() => import('./containers/ForgotPassword').then(c => c.default))}
    />,
    <AuthRoute
      exact
      path="/reset-password/:token"
      redirectOnLoggedIn
      redirect="/profile"
      component={loadable(() => import('./containers/ResetPassword').then(c => c.default))}
    />
  ],
  /*   navItem: [
      <IfLoggedIn key="/users" role="admin">
        <MenuItem>
          <NavLinkUsersWithI18n />
        </MenuItem>
      </IfLoggedIn>
    ], */
  navItemRight: [
    <IfLoggedIn key="/profile">
      <MenuItem as={NavLink} to="/profile">
        <ProfileName />
      </MenuItem>
    </IfLoggedIn>,
    <IfLoggedIn key="/logout">
      <LogoutLink />
    </IfLoggedIn>,
    <IfNotLoggedIn key="/login">
      <MenuItemWithI18n text={'navLink.signIn'} exact to="/login" />
    </IfNotLoggedIn>
  ],
  resolver: [resolvers],
  localization: [{ ns: 'user', resources }],
  dataRootComponent: [DataRootComponent],
  // eslint-disable-next-line react/display-name
  rootComponentFactory: [req => (req ? <CookiesProvider cookies={req.universalCookies} /> : <CookiesProvider />)]
});
