import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '@module/look-client-react';
import { TranslateFunction } from '@module/i18n-client-react';
import settings from '../../../../settings';

interface ArticleViewProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ArticleView = ({ t }: ArticleViewProps) => {
  return (
    <PageLayout>
      {renderMetaData(t)}
      <div className="text-center">
        <p>{t('welcomeText')}</p>
      </div>
    </PageLayout>
  );
};

export default ArticleView;
