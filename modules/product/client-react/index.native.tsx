import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react-native';

import { HeaderTitle, IconButton } from '@gqlapp/look-client-react-native';
import Home from './Home';
import Product from './Home';
// import Product from './Product';
import Products from './Products';
import resources from './locales';

const HeaderTitleWithI18n = translate('product')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Home: {
        screen: createStackNavigator({
          Home: {
            screen: Home,
            navigationOptions: ({ navigation }: any) => ({
              headerTitle: <HeaderTitleWithI18n style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          }
        }),
        navigationOptions: {
          drawerLabel: <HeaderTitleWithI18n i18nKey={'navLink.home'} />
        }
      },
      Products: {
        screen: createStackNavigator({
          Products: {
            screen: Products,
            navigationOptions: ({ navigation }: any) => ({
              headerTitle: <HeaderTitleWithI18n style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          },
          Product: {
            screen: Product,
            navigationOptions: ({ navigation }: any) => ({
              headerTitle: <HeaderTitleWithI18n style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          }
        }),
        navigationOptions: {
          drawerLabel: <HeaderTitleWithI18n i18nKey={'navLink.products'} />
        }
      }
    }
  ],
  localization: [{ ns: 'product', resources }]
});
