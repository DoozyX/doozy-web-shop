/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

import NavBar from './NavBar';
import settings from '../../../../../settings';
import SearchBar from './SearchBar';

class PageLayout extends React.Component {
  render() {
    const { children, navBar, history } = this.props;
    return (
      <section className="d-flex flex-column flex-grow-1">
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
