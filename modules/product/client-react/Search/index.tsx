import React from 'react';
import { Container, Content, Text, Button, Left, Body, Spinner, Thumbnail, ListItem, Right, List } from 'native-base';
import { useQuery } from '@apollo/react-hooks';

import SEARCH_PRODUCT from '../graphql/SearchProduct.graphql';

const Search = ({ navigation }: any) => {
  const search = navigation.getParam('text');
  const { data, loading } = useQuery(SEARCH_PRODUCT, { variables: { search } });

  if (loading) {
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <List>
          {data.searchProducts.map(({ id, name, price, imageSource }: any) => (
            <ListItem thumbnail key={id}>
              <Left>
                <Thumbnail square source={{ uri: imageSource }} />
              </Left>
              <Body>
                <Text>{name}</Text>
                <Text note numberOfLines={1}>
                  {price} MKD
                </Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    navigation.push('Product', { id });
                  }}
                >
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Search;
