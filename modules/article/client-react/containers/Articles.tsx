import React from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import GET_ALL_POSTS from '../graphql/GetAllPosts.graphql';

import ArticlesListView from '../components/ArticlesListView';

interface ArticleViewProps extends RouteComponentProps {
  t: TranslateFunction;
}

const Articles = ({ t, history }: ArticleViewProps) => {
  const { data, loading } = useQuery(GET_ALL_POSTS);

  return <ArticlesListView t={t} data={data} loading={loading} history={history} />;
};

export default translate('article')(Articles);
