/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

import settings from '@gqlapp/config';

import NavBar from './NavBar';
import styles from '../styles/styles.scss';
import SearchBar from './SearchBar';

class PageLayout extends React.Component {
  render() {
    const { children, navBar, history } = this.props;
    return (
      <section className="d-flex flex-column flex-grow-1">
        {__SERVER__ && __DEV__ && (
          <Helmet>
            <style type="text/css">{styles._getCss()}</style>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
          </Helmet>
        )}
        <section className="d-flex flex-column flex-grow-1 flex-shrink-0">
          <section className="d-flex flex-row no-print" style={{ marginTop: '10px' }}>
            <Container className="d-flex flex-row no-print">
              <NavLink to="/" className="navbar-brand" style={{ color: 'green' }}>
                {settings.app.name}
              </NavLink>
              <SearchBar />
            </Container>
          </section>
          <section className="d-flex flex-column no-print">{navBar !== false && <NavBar />}</section>
          <Container id="content">{children}</Container>
        </section>

        <Segment inverted vertical style={{ padding: '2em 0em', marginTop: '2em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a" onClick={() => history.push('/contact')}>
                      Contact Us
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item
                      as="a"
                      onClick={() => {
                        history.push('/products');
                      }}
                    >
                      Products
                    </List.Item>
                    <List.Item
                      as="a"
                      onClick={() => {
                        history.push('/brands');
                      }}
                    >
                      Brands
                    </List.Item>
                    <List.Item as="a">FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Follow us
                  </Header>
                  <Icon name="facebook" size="big" />
                  <Icon name="twitter" size="big" />
                  <Icon name="instagram" size="big" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <span style={{ textAlign: 'center' }}>
              &copy; {new Date().getFullYear()}. {settings.app.name}.
            </span>
          </Container>
        </Segment>
      </section>
    );
  }
}

export default withRouter(PageLayout);
