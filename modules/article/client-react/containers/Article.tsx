import React, { useState } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Button, Comment, Form, Header, Loader } from 'semantic-ui-react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';

const { JSONLD, Generic } = require('react-structured-data');

import GET_POST from '../graphql/GetPost.graphql';
import ADD_COMMENT from '../graphql/AddComment.graphql';

interface User {
  fullName: string;
  username: string;
  avatar: string;
}

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: User;
}

interface MatchParams {
  id: string;
}

interface ArticleViewProps extends RouteComponentProps<MatchParams> {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

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

const Article = ({ t, match }: ArticleViewProps) => {
  const [commentMessage, setCommentMessage] = useState('');
  // const [articleData, articleData] = useState({});
  const { data, loading } = useQuery(GET_POST, { variables: { id: parseInt(match.params.id, 10) } });
  const addComment = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_POST, variables: { id: parseInt(match.params.id, 10) } }],
    update: () => {
      setCommentMessage('');
    },
    variables: {
      comment: {
        postId: parseInt(match.params.id, 10),
        content: commentMessage
      }
    }
  });
  if (loading) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <Loader />
      </PageLayout>
    );
  }
  // setCommentsData(data.post)
  const { created_at, title, imageSource, content, user, comments } = data.post;
  return (
    <PageLayout>
      {renderMetaData(t)}
      <JSONLD>
        <Generic
          type="NewsArticle"
          jsonldtype="NewsArticle"
          schema={{
            headline: title,
            image: [imageSource],
            datePublished: new Date(parseInt(created_at, 10)).toISOString(),
            description: content
          }}
        >
          <Generic type="author" jsonldtype="Person" schema={{ name: user.fullName }} />
          <Generic type="publisher" jsonldtype="Person" schema={{ name: user.fullName }} />
        </Generic>
      </JSONLD>
      <div>
        <div>
          <h1>{title}</h1>
          <small className="text-muted">
            {moment(parseInt(created_at, 10)).fromNow()} by {user.fullName}
          </small>
        </div>
        <img src={imageSource} alt="description" />
        <ReactMarkdown source={content} />
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

          {comments.map((comment: Comment) => (
            <ArticleComment key={comment.id} {...comment} />
          ))}

          <Form reply>
            <Form.TextArea
              value={commentMessage}
              onChange={(_event, dataValue) => setCommentMessage(dataValue.value.toString())}
            />
            <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={() => addComment()} />
          </Form>
        </Comment.Group>
      </div>
    </PageLayout>
  );
};

export default translate('article')(Article);
