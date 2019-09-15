import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, H1, H3, Text } from 'native-base';

const Item = ({ name, size, imageSource, price, onClick }: any) => {
  return (
    <Card style={styles.item} transparent>
      <CardItem header bordered onPress={onClick} style={styles.centerChildren}>
        <Thumbnail source={{ uri: imageSource }} />
      </CardItem>
      <CardItem footer bordered onPress={onClick}>
        <View style={styles.itemInfo}>
          <H3>{name}</H3>
          <H3>{price} MKD</H3>
          <Text>{size}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

export default function CategoriesListView({ items, title }: any) {
  return (
    <View style={styles.centerChildren}>
      <H1>{title}</H1>
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal={true}
          data={items}
          renderItem={({ item: { name, size, imageSource, price } }: any) => (
            <Item {...{ name, size, imageSource, price }} />
          )}
          keyExtractor={(item: any) => String(item.id)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: 150,
    height: 200,
    marginHorizontal: 10
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
