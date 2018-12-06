import React from 'react';

import { translate, TranslateFunction } from '@module/i18n-client-react';
import ProductView from '../components/ProductView';

interface ProductProps {
  t: TranslateFunction;
}

class Product extends React.Component<ProductProps> {
  public render() {
    return <ProductView {...this.props} />;
  }
}

export default translate('product')(Product);
