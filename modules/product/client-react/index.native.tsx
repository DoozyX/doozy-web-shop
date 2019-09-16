import React, { useState } from 'react';
import { createStackNavigator, NavigationScreenConfigProps } from 'react-navigation';

import { translate } from '@gqlapp/i18n-client-react';
import ClientModule from '@gqlapp/module-client-react-native';
import { Header, Item, Icon, Input, Button, Text } from 'native-base';
import { HeaderTitle, IconButton } from '@gqlapp/look-client-react-native';

import Home from './Home';
import Product from './Product';
import Products from './Products';
import Search from './Search';
import resources from './locales';

const HeaderTitleWithI18n = translate('product')(HeaderTitle);

const SearchHeader = ({ navigation }: any) => {
  const [text, setText] = useState('');
  return (
    <Header searchBar rounded style={{ width: 330, backgroundColor: 'white' }}>
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          value={text}
          onChangeText={setText}
          onEndEditing={e => {
            navigation.navigate('Search', { text });
          }}
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};

export default new ClientModule({
  drawerItem: [
    {
      Home: {
        screen: createStackNavigator({
          Home: {
            screen: Home,
            navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
              headerTitle: <SearchHeader navigation={navigation} />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          },
          Search: {
            screen: Search,
            navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
              headerTitle: <SearchHeader navigation={navigation} />,
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
            navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
              headerTitle: <SearchHeader navigation={navigation} />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' },
              headerForceInset: {}
            })
          },
          Product: {
            screen: Product,
            navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
              headerTitle: <SearchHeader navigation={navigation} />,
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
