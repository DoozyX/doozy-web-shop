import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '@gqlapp/look-client-react';
import { TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '@gqlapp/config';
import ReactMarkdown from 'react-markdown';
import { Button, Comment, Form, Header, Loader } from 'semantic-ui-react';
import moment from 'moment';

const { JSONLD, Generic } = require('react-structured-data');

import ArticleComment from './ArticleComment';

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ArticleView = ({ t, loading, data, addComment, commentMessage, setCommentMessage }: any) => {
  if (loading) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <Loader />
      </PageLayout>
    );
  }
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

export default ArticleView;
