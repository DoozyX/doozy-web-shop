import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { translate } from '@module/i18n-client-react';
import ClientModule from '@module/module-client-react-native';

import { HeaderTitle, IconButton } from '../../../packages/client/src/modules/common/components/native';
import Article from './containers/Article';
import resources from './locales';

const HeaderTitleWithI18n = translate('article')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Article: {
        screen: createStackNavigator({
          Article: {
            screen: Article,
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
  localization: [{ ns: 'article', resources }]
});
