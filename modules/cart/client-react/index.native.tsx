import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react-native';

import { HeaderTitle, IconButton } from '../../../packages/client/src/modules/common/components/native';
import Cart from './containers/Cart';
import resources from './locales';

const HeaderTitleWithI18n = translate('cart')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Cart: {
        screen: createStackNavigator({
          Cart: {
            screen: Cart,
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
        userInfo: {
          showOnLogin: true,
          role: ['user', 'admin']
        },
        navigationOptions: {
          drawerLabel: <HeaderTitleWithI18n />
        }
      }
    }
  ],
  localization: [{ ns: 'cart', resources }]
});
