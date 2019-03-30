import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const ref: any = { modules: null };

export const onAppCreate = (modules: any) => (ref.modules = modules);

const NavBar = () => (
  <Container>
    <Menu pointing secondary color="green">
      {ref.modules.navItems}
      <Menu.Menu position="right">{ref.modules.navItemsRight}</Menu.Menu>
    </Menu>
  </Container>
);

export default NavBar;
