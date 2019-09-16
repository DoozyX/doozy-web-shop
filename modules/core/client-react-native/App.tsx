import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import url from 'url';

import ClientModule from '@gqlapp/module-client-react-native';
import { createApolloClient, log } from '@gqlapp/core-common';
import settings from '@gqlapp/config';
import { Container } from 'native-base';

const { protocol, pathname, port } = url.parse(__API_URL__);

interface MainProps {
  children?: any;
  exp: any;
  modules: ClientModule;
}

export default class Main extends React.Component<MainProps> {
  public render() {
    const { hostname } = url.parse(__API_URL__);
    const { modules } = this.props;
    const apiUrl =
      this.props.exp.manifest.bundleUrl && hostname === 'localhost'
        ? `${protocol}//${url.parse(this.props.exp.manifest.bundleUrl).hostname}:${port}${pathname}`
        : __API_URL__;
    const store = createStore(
      Object.keys(modules.reducers).length > 0
        ? combineReducers({
            ...modules.reducers
          })
        : state => state,
      {} // initial state
    );
    const client = createApolloClient({
      apiUrl,
      createNetLink: modules.createNetLink,
      createLink: modules.createLink,
      connectionParams: modules.connectionParams,
      clientResolvers: modules.resolvers
    });

    if (!__TEST__ || settings.app.logging.level === 'debug') {
      log.info(`Connecting to GraphQL backend at: ${apiUrl}`);
    }

    return modules.getWrappedRoot(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Container>{modules.getDataRoot(modules.router)}</Container>
        </ApolloProvider>
      </Provider>
    );
  }
}
