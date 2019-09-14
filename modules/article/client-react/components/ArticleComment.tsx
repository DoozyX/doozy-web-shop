import React from 'react';
import moment from 'moment';
import { Comment } from 'semantic-ui-react';

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: User;
}

interface User {
  fullName: string;
  username: string;
  avatar: string;
}

const ArticleComment = ({ user, content, created_at }: Comment) => {
  const { avatar, fullName } = user;
  return (
    <Comment>
      <Comment.Avatar src={avatar || 'https://i.imgur.com/6XN24Lg.png'} />
      <Comment.Content>
        <Comment.Author as="a">{fullName}</Comment.Author>
        <Comment.Metadata>
          <div>{moment(parseInt(created_at, 10)).fromNow()}</div>
        </Comment.Metadata>
        <Comment.Text>{content}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};
export default ArticleComment;
