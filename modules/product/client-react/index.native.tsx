import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react-native';

import { HeaderTitle, IconButton } from '../../../packages/client/src/modules/common/components/native';
import Product from './containers/Product';
import resources from './locales';

const HeaderTitleWithI18n = translate('product')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Product: {
        screen: createStackNavigator({
          Product: {
            screen: Product,
            navigationOptions: ({ navigation }: any) => ({
              headerTitle: <HeaderTitleWithI18n style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' }
            })
          }
        }),
        navigationOptions: {
          drawerLabel: <HeaderTitleWithI18n />
        }
      }
    }
  ],
  localization: [{ ns: 'product', resources }]
});
