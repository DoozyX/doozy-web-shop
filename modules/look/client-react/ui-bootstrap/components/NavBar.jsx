import React from 'react';
import { Container, Navbar, Nav, NavItem } from 'reactstrap';

const ref = { modules: null };

export const onAppCreate = modules => (ref.modules = modules);

const NavBar = () => (
  <Navbar color="faded" light>
    <Container>
      <Nav>{ref.modules.navItems}</Nav>

      <Nav className="justify-content-end">
        {ref.modules.navItemsRight}
        {__DEV__ && (
          <NavItem>
            <a href="/graphiql" className="nav-link">
              GraphiQL
            </a>
          </NavItem>
        )}
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
