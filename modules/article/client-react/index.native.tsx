import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react-native';

import { HeaderTitle, IconButton } from '@gqlapp/look-client-react-native';
import Articles from './containers/Articles';
import Article from './containers/Article';
import resources from './locales';

const HeaderTitleWithI18n = translate('article')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Articles: {
        screen: createStackNavigator({
          Articles: {
            screen: Articles,
            navigationOptions: ({ navigation }: any) => ({
              headerTitle: <HeaderTitleWithI18n style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          },
          Article: {
            screen: Article,
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
          drawerLabel: <HeaderTitleWithI18n />
        }
      }
    }
  ],
  localization: [{ ns: 'article', resources }]
});
