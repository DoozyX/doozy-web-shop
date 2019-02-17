import React, { Suspense } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';

import { PageLayout } from '@gqlapp/look-client-react';
import { TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '../../../../settings';
import { useQuery } from 'react-apollo-hooks';

import GET_POST from '../graphql/GetPost.graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Spinner } from 'reactstrap';

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

const ArticlesView = ({ t, match }: ArticleViewProps) => {
  const { data } = useQuery(GET_POST, { variables: { id: parseInt(match.params.id, 10) } });
  console.log(data);
  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Spinner />}>
        <div>
          <div>
            <h1>{data.post.title}</h1>
            <small className="text-muted">{moment(parseInt(data.post.created_at, 10)).fromNow()}</small>
          </div>
          <img src={data.post.imageSource} alt="description" />
          <p>{data.post.content}</p>
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default ArticlesView;
