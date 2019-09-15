import React, { useState } from 'react';
import { useTranslation } from '@gqlapp/i18n-client-react';
import { useQuery } from '@apollo/react-hooks';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  H1,
  H3,
  Text,
  Content,
  Container,
  Spinner,
  Form,
  Item,
  Picker,
  Icon,
  Tabs,
  Tab,
  ScrollableTab
} from 'native-base';

import GET_ALL_PRODUCTS from '../graphql/GetAllProducts.graphql';
import CATEGORIES_QUERY from '../graphql/CategoriesQuery.graphql';

const ProductCard = ({ id, name, size, price, imageSource, onView }: any) => {
  return (
    <Card style={styles.item} transparent>
      <CardItem header bordered button onPress={onView} style={styles.cardItem}>
        <Thumbnail source={{ uri: imageSource }} />
      </CardItem>
      <CardItem footer bordered button onPress={onView} style={styles.cardItem}>
        <View style={styles.itemInfo}>
          <H3 adjustsFontSizeToFit numberOfLines={1}>
            {name}
          </H3>
          <H3>{price} MKD</H3>
          <Text>{size} kg</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const SortTypes = {
  PRICE_ASCENDING: 'sortByPriceAscending',
  PRICE_DESCENDING: 'sortByPriceDescending'
};

const Products = ({ navigation }: any) => {
  const [sortBy, setSortBy] = useState(SortTypes.PRICE_ASCENDING);
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const {
    data: { products },
    loading
  } = useQuery(GET_ALL_PRODUCTS);
  const {
    data: { categories },
    loading: loadingcat
  } = useQuery(CATEGORIES_QUERY);

  if (loading || loadingcat) {
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }

  const sortFilterProducts = products
    .filter(({ category }: any) => {
      return categoryFilter === 'ALL' || category.name === categoryFilter;
    })
    .sort((a: { price: number }, b: { price: number }) =>
      sortBy === SortTypes.PRICE_ASCENDING ? a.price - b.price : b.price - a.price
    );

  return (
    <Container>
      <Content>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          onChangeTab={(value: any) => {
            setCategoryFilter(value.ref.props.heading);
          }}
        >
          <Tab heading="ALL"></Tab>
          {categories.map((category: any) => (
            <Tab key={category.id} heading={category.name}></Tab>
          ))}
        </Tabs>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select sort order"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={sortBy}
              onValueChange={value => setSortBy(value)}
            >
              <Picker.Item label="Sort by Price (Ascending)" value={SortTypes.PRICE_ASCENDING} />
              <Picker.Item label="Sort by Price (Descending)" value={SortTypes.PRICE_DESCENDING} />
            </Picker>
          </Item>
        </Form>
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <FlatList
              numColumns={3}
              data={sortFilterProducts}
              renderItem={({ item }: any) => (
                <ProductCard {...item} onView={() => navigation.push('Product', { id: item.id })} />
              )}
              keyExtractor={(item: any) => String(item.id)}
            />
          </SafeAreaView>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 1
  },
  cardItem: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32
  },
  centerChildren: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Products;
