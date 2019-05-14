import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';
import { useQuery } from 'react-apollo-hooks';

import GET_ALL_POSTS from '../graphql/GetAllPosts.graphql';
import { Loader } from 'semantic-ui-react';

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
  fullName,
  handleClick
}: {
  title: string;
  description: string;
  createdAt: any;
  imageSource: string;
  fullName: string;
  handleClick: () => void;
}) => {
  return (
    <Card className="card flex-sm-row mb-gutter">
      <CardBody width="80%">
        <CardTitle>{title}</CardTitle>
        <CardText
          style={{
            height: '160px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap'
          }}
        >
          {description}
        </CardText>
        <CardText>
          <small className="text-muted">
            {moment(parseInt(createdAt, 10)).fromNow()} by {fullName}
          </small>
        </CardText>
        <Button onClick={handleClick}> View Article </Button>
      </CardBody>
      <img className="card-img-sm-right" width="20%!important" src={imageSource} alt="description" />
    </Card>
  );
};

const Articles = ({ t, history }: ArticleViewProps) => {
  const { data, loading } = useQuery(GET_ALL_POSTS);
  if (loading) {
    return (
      <PageLayout>
        {renderMetaData(t)}
        <Loader />
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      {renderMetaData(t)}
      <div>
        {data.allPosts.map(
          ({
            id,
            title,
            content,
            created_at,
            imageSource,
            user
          }: {
            id: number;
            title: string;
            content: string;
            created_at: number;
            imageSource: string;
            user: { fullName: string };
          }) => (
            <ArticleCard
              key={id}
              title={title}
              description={content}
              createdAt={created_at}
              imageSource={imageSource}
              fullName={user.fullName}
              handleClick={() => history.push(`/article/${id}`)}
            />
          )
        )}
      </div>
    </PageLayout>
  );
};

export default translate('article')(Articles);
