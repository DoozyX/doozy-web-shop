import React from 'react';
import moment from 'moment';
import { Image } from 'react-native';
// import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const ArticleCard = ({
  title,
  description,
  createdAt,
  imageSource,
  fullName,
  avatar,
  handleClick
}: {
  title: string;
  description: string;
  createdAt: any;
  imageSource: string;
  fullName: string;
  avatar: string;
  handleClick: () => void;
}) => {
  return (
    <Card>
      <CardItem button onPress={handleClick}>
        <Left>
          <Thumbnail source={{ uri: avatar }} />
          <Body>
            <Text>{title}</Text>
            <Text note>{fullName}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody button onPress={handleClick}>
        <Image source={{ uri: imageSource }} style={{ height: 150, width: null, flex: 1 }} />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>{moment(parseInt(createdAt, 10)).fromNow()}</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ArticleCard;
