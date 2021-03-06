import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../../../packages/client/src/modules/common/components/web';
import { TranslateFunction } from '@gqlapp/i18n-client-react';
import settings from '@gqlapp/config';

interface ProductViewProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const ProductView = ({ t }: ProductViewProps) => {
  return (
    <PageLayout>
      {renderMetaData(t)}
      <div className="text-center">
        <p>{t('welcomeText')}</p>
      </div>
    </PageLayout>
  );
};

export default ProductView;
