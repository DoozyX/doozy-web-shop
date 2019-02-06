import core from '@gqlapp/core-server-ts';
import i18n from '@gqlapp/i18n-server-ts';
import validation from '@gqlapp/validation-common-react';
import chat from '@gqlapp/chat-server-ts';
import contact from '@gqlapp/contact-server-ts';
import cookies from '@gqlapp/cookies-server-ts';
import subscription from '@gqlapp/payments-server-ts';
import mailer from '@gqlapp/mailer-server-ts';
import graphqlTypes from '@gqlapp/graphql-types-server-ts';
import reports from '@gqlapp/reports-server-ts';
import '@gqlapp/debug-server-ts';
import article from '@module/article-server-ts';
import product from '@module/product-server-ts';

import ServerModule from '@gqlapp/module-server-ts';

const user = require('@gqlapp/user-server-ts').default;

const modules: ServerModule = new ServerModule(
  article,
  product,
  cookies,
  i18n,
  validation,
  user,
  subscription,
  contact,
  mailer,
  chat,
  reports,
  graphqlTypes,
  core
);

export default modules;
