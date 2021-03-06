import core from '@gqlapp/core-client-react-native';
import i18n from '@gqlapp/i18n-client-react';
import contact from '@gqlapp/contact-client-react';
import validation from '@gqlapp/validation-common-react';
import defaultRouter from '@gqlapp/router-client-react-native';
import payments from '@gqlapp/payments-client-react';
import authentication from '@gqlapp/authentication-client-react';
import articles from '@gqlapp/article-client-react';
import products from '@gqlapp/product-client-react';
import cart from '@gqlapp/cart-client-react';

import ClientModule from '@gqlapp/module-client-react-native';

const user = require('@gqlapp/user-client-react').default;

const modules = new ClientModule(
  validation,
  defaultRouter,
  products,
  articles,
  cart,
  contact,
  payments,
  user,
  i18n,
  core,
  authentication
);

export default modules;
