import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Text } from 'native-base';

const { width: screenWidth } = Dimensions.get('window');

const CarouselView = ({ items }: any) => {
  const _renderItem = ({ item }: any, parallaxProps: any) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={items}
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8
  },
  title: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  }
});

export default CarouselView;
