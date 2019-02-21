import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import CartView from '../components/CartView';

interface CartProps {
  t: TranslateFunction;
}

class Cart extends React.Component<CartProps> {
  public render() {
    return <CartView {...this.props} />;
  }
}

export default translate('cart')(Cart);
