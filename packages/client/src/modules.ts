import core from '@gqlapp/core-client-react';
import splashScreen from '@gqlapp/splash-screen-client-react';
import look from '@gqlapp/look-client-react';
import i18n from '@gqlapp/i18n-client-react';
import chat from '@gqlapp/chat-client-react';
import contact from '@gqlapp/contact-client-react';
import validation from '@gqlapp/validation-common-react';
import ClientModule from '@gqlapp/module-client-react';
import defaultRouter from '@gqlapp/router-client-react';
import payments from '@gqlapp/payments-client-react';
import authentication from '@gqlapp/authentication-client-react';
import article from '@module/article-client-react';
import product from '@module/product-client-react';
import cart from '@gqlapp/cart-client-react';
import '@gqlapp/favicon-common';

const pageNotFound = require('@gqlapp/page-not-found-client-react').default;
const user = require('@gqlapp/user-client-react').default;

const modules = new ClientModule(
  splashScreen,
  look,
  validation,
  defaultRouter,
  chat,
  product,
  user,
  i18n,
  contact,
  article,
  payments,
  cart,
  pageNotFound,
  core,
  authentication
);

export default modules;
