import React from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';

import settings from '@gqlapp/config';
import { PageLayout } from '@gqlapp/look-client-react';

interface ProductProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

class Home extends React.Component<ProductProps> {
  public render() {
    const t = this.props.t;
    return (
      <PageLayout>
        {renderMetaData(t)}
        <div className="text-center">
          <p>Brands</p>
        </div>
      </PageLayout>
    );
  }
}

export default translate('product')(Home);
