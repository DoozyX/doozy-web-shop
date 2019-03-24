import React from 'react';

import ClientModule from '@gqlapp/module-client-react';

import SplashScreen from './containers/SplashScreen';
import resources from './locales';
import { RootContextProvider } from './RootContext';

const RootContextComponent = ({ children }: any) => (
  <RootContextProvider>
    <SplashScreen />
    {children}
  </RootContextProvider>
);
export default new ClientModule({
  rootComponentFactory: [() => <RootContextComponent />],
  localization: [{ ns: 'splash-screen', resources }]
});

export { RootContext } from './RootContext';
