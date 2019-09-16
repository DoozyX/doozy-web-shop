import React from 'react';
import moment from 'moment';

import { ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

const ArticleComment = ({ user, content, created_at }: any) => {
  const { avatar, fullName } = user;
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: avatar || 'https://i.imgur.com/6XN24Lg.png' }} />
      </Left>
      <Body>
        <Text>{fullName}</Text>
        <Text note>{content}</Text>
      </Body>
      <Right>
        <Text note>{moment(parseInt(created_at, 10)).fromNow()}</Text>
      </Right>
    </ListItem>
  );
};
export default ArticleComment;
