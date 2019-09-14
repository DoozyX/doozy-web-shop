import React from 'react';
import { translate } from '@gqlapp/i18n-client-react';

import { useQuery } from '@apollo/react-hooks';

import GET_ALL_POSTS from '../graphql/GetAllPosts.graphql';

import ArticlesListView from '../components/ArticlesListView';

const Articles = ({ t, history, navigation }: any) => {
  const { data, loading } = useQuery(GET_ALL_POSTS);

  return <ArticlesListView t={t} data={data} loading={loading} history={history} navigation={navigation} />;
};

export default translate('article')(Articles);
