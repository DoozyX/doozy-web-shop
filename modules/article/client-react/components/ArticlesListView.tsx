import React from 'react';
import { TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '@gqlapp/config';
import { Loader } from 'semantic-ui-react';
import { PageLayout } from '@gqlapp/look-client-react';
import Helmet from 'react-helmet';

import ArticleCard from './ArticleCard';

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ArticlesListView = ({ t, loading, data, history }: any) => {
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

export default ArticlesListView;
