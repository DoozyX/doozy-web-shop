import core from '@gqlapp/core-client-react';
import look from '@gqlapp/look-client-react';
import i18n from '@gqlapp/i18n-client-react';
import chat from '@gqlapp/chat-client-react';
import contact from '@gqlapp/contact-client-react';
import validation from '@gqlapp/validation-common-react';
import ClientModule from '@gqlapp/module-client-react';
import defaultRouter from '@gqlapp/router-client-react';
import payments from '@gqlapp/payments-client-react';
import '@gqlapp/favicon-common';
import article from '@module/article-client-react';
import product from '@module/product-client-react';

const pageNotFound = require('@gqlapp/page-not-found-client-react').default;
const reports = require('@gqlapp/reports-client-react').default;
const user = require('@gqlapp/user-client-react').default;

const modules = new ClientModule(
  look,
  validation,
  defaultRouter,
  product,
  contact,
  chat,
  article,
  payments,
  user,
  i18n,
  reports,
  pageNotFound,
  core
);

export default modules;
