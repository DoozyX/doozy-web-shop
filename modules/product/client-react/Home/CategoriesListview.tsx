import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Thumbnail, H1 } from 'native-base';

const Item = ({ image, name, onClick }: any) => {
  return (
    <Card style={styles.item} transparent>
      <CardItem header bordered button onPress={onClick} style={styles.centerChildren}>
        <Thumbnail source={{ uri: image }} />
      </CardItem>
      <CardItem footer bordered button onPress={onClick} style={styles.centerChildren}>
        <Text adjustsFontSizeToFit numberOfLines={1}>
          {name}
        </Text>
      </CardItem>
    </Card>
  );
};

export default function CategoriesListView({ items, title, onClick }: any) {
  return (
    <View style={styles.centerChildren}>
      <H1>{title}</H1>
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal={true}
          data={items}
          renderItem={({ item }: any) => <Item {...item} onClick={onClick} />}
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
    width: 125,
    height: 130,
    marginHorizontal: 10
  },
  title: {
    fontSize: 32
  },
  centerChildren: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
