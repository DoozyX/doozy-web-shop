import React, { Suspense } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { PageLayout } from '@gqlapp/look-client-react';
import { TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '../../../../settings';
import { useQuery } from 'react-apollo-hooks';

import GET_ALL_POSTS from '../graphql/GetAllPosts.graphql';

interface ArticleViewProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ArticleCard = ({
  postId,
  title,
  description,
  createdAt,
  imageSource
}: {
  postId: number;
  title: string;
  description: string;
  createdAt: any;
  imageSource: string;
}) => {
  return (
    <Card className="card flex-sm-row mb-gutter">
      <CardBody width="80%">
        <CardTitle>{title}</CardTitle>
        <CardText
          style={{
            height: '160px',
            'text-overflow': 'ellipsis',
            overflow: 'hidden',
            'white-space': 'pre-wrap;'
          }}
        >
          {description}
        </CardText>
        <CardText>
          <small className="text-muted">{moment(createdAt).fromNow()}</small>
        </CardText>
        <Button>
          <Link className="post-link" to={`/article/${postId}`}>
            View Article
          </Link>
        </Button>
      </CardBody>
      <img
        className="card-img-sm-right"
        width="20%!important"
        src={imageSource}
        alt="description"
        height="20%!important"
      />
    </Card>
  );
};

const ArticlesView = ({ t }: ArticleViewProps) => {
  const { data } = useQuery(GET_ALL_POSTS);
  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {data.allPosts.map(
            (x: { id: number; title: string; content: string; created_at: number; imageSource: string }) => (
              <ArticleCard
                key={x.id}
                postId={x.id}
                title={x.title}
                description={x.content}
                createdAt={x.created_at}
                imageSource={x.imageSource}
              />
            )
          )}
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default ArticlesView;
