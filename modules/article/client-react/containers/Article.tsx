import React, { Suspense } from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import { RouteComponentProps } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';

import GET_POST from '../graphql/GetPost.graphql';

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

const Article = ({ t, match }: ArticleViewProps) => {
  const { data } = useQuery(GET_POST, { variables: { id: parseInt(match.params.id, 10) } });

  const { created_at, title, imageSource, content, user } = data.post;
  return (
    <PageLayout>
      {renderMetaData(t)}
      <Suspense fallback={<Spinner />}>
        <div>
          <div>
            <h1>{title}</h1>
            <small className="text-muted">
              {moment(parseInt(created_at, 10)).fromNow()} by {user.fullName}
            </small>
          </div>
          <img src={imageSource} alt="description" />
          <p>{content}</p>
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default translate('article')(Article);
