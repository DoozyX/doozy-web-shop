import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'reactstrap';

import NavBar from './NavBar';
import settings from '../../../../../settings';

const footerHeight = '40px';

const Header = styled.header`
  text-align: center;
`;

const Footer = styled.footer`
  margin-top: 10px;
  line-height: ${footerHeight};
  height: ${footerHeight};
`;

class PageLayout extends React.Component {
  render() {
    const { children, hideNavBar } = this.props;
    return (
      <section className="d-flex flex-column flex-grow-1">
        <Header>
          <h1>{settings.app.name}</h1>
        </Header>
        <section className="d-flex flex-column flex-grow-1 flex-shrink-0">
          <section className="d-flex flex-column">{!hideNavBar && <NavBar />}</section>
          <Container id="content">{children}</Container>
        </section>
        <Footer className="d-flex flex-shrink-0 justify-content-center">
          <span>
            &copy; {new Date().getFullYear()}. {settings.app.name}.
          </span>
        </Footer>
      </section>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  hideNavBar: PropTypes.bool
};

PageLayout.defaultProps = {
  hideNavBar: false
};

export default PageLayout;
