import React, { Suspense } from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { Card, CardBody, CardTitle, CardText, Button, Spinner } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';
import { useQuery } from 'react-apollo-hooks';

import GET_ALL_POSTS from '../graphql/GetAllPosts.graphql';

interface ArticleViewProps extends RouteComponentProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ArticleCard = ({
  title,
  description,
  createdAt,
  imageSource,
  handleClick
}: {
  title: string;
  description: string;
  createdAt: any;
  imageSource: string;
  handleClick: () => void;
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
          <small className="text-muted">{moment(parseInt(createdAt, 10)).fromNow()}</small>
        </CardText>
        <Button onClick={handleClick}> View Article </Button>
      </CardBody>
      <img className="card-img-sm-right" width="20%!important" src={imageSource} alt="description" />
    </Card>
  );
};

const Articles = ({ t, history }: ArticleViewProps) => {
  const { data } = useQuery(GET_ALL_POSTS, { suspend: true });
  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Spinner />}>
        <div>
          {data.allPosts.map(
            (x: { id: number; title: string; content: string; created_at: number; imageSource: string }) => (
              <ArticleCard
                key={x.id}
                title={x.title}
                description={x.content}
                createdAt={x.created_at}
                imageSource={x.imageSource}
                handleClick={() => history.push(`/article/${x.id}`)}
              />
            )
          )}
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default translate('article')(Articles);
