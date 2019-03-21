import React from 'react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import Helmet from 'react-helmet';
import { PageLayout } from '@gqlapp/look-client-react';
import settings from '../../../../settings';
import { Step } from 'semantic-ui-react';

interface CartProps {
  t: TranslateFunction;
}

const renderMetaData = (t: TranslateFunction) => (
  <Helmet
    title={`${settings.app.name} - ${t('title')}`}
    meta={[{ name: 'description', content: `${settings.app.name} - ${t('meta')}` }]}
  />
);

const Shipping = ({ t }: CartProps) => {
  const steps = [
    {
      key: 'shipping',
      active: true,
      icon: 'truck',
      title: 'Shipping',
      description: 'Choose your shipping options'
    },
    {
      key: 'billing',
      icon: 'payment',
      disabled: true,
      title: 'Billing',
      description: 'Enter billing information'
    },
    { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' }
  ];

  return (
    <PageLayout>
      {renderMetaData(t)}

      <Step.Group items={steps} fluid />
    </PageLayout>
  );
};

export default translate('cart')(Shipping);
