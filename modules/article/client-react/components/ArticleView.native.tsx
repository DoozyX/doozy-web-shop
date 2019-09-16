import React from 'react';
import moment from 'moment';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Spinner,
  H1,
  List,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

import ArticleComment from './ArticleComment';

const ArticleView = ({ t, loading, data, addComment, commentMessage, setCommentMessage }: any) => {
  if (loading || !data) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  }
  const { created_at, title, imageSource, content, user, comments } = data.post;
  return (
    <Content>
      <Card style={{ flex: 0 }} transparent>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: user.avatar }} />
            <Body>
              <Text>{title}</Text>
              <Text note>
                {moment(parseInt(created_at, 10)).fromNow()} by {user.fullName}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{ uri: imageSource }} style={{ height: 200, width: 200, flex: 1 }} />
            <Text>{content}</Text>
          </Body>
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
              <Text>{comments.length} Comments</Text>
            </Button>
          </Body>
          <Right>
            <Icon name="share" />
          </Right>
        </CardItem>
      </Card>
      <H1>Comments</H1>
      <List>
        {comments.map((comment: any) => (
          <ArticleComment key={comment.id} {...comment} />
        ))}
        <Form>
          <Item floatingLabel>
            <Label>Comment</Label>
            <Input value={commentMessage} onChangeText={text => setCommentMessage(text)} />
            <Icon active name="arrow-up" onPress={() => addComment()} />
          </Item>
          <Item last></Item>
        </Form>
      </List>
    </Content>
  );
};

export default ArticleView;
