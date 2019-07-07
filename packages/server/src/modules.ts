import core from '@gqlapp/core-server-ts';
import i18n from '@gqlapp/i18n-server-ts';
import validation from '@gqlapp/validation-common-react';
import chat from '@gqlapp/chat-server-ts';
import contact from '@gqlapp/contact-server-ts';
import cookies from '@gqlapp/cookies-server-ts';
import upload from '@gqlapp/upload-server-ts';
import subscription from '@gqlapp/payments-server-ts';
import mailer from '@gqlapp/mailer-server-ts';
import graphqlTypes from '@gqlapp/graphql-types-server-ts';
import authentication from '@gqlapp/authentication-server-ts';

import article from '@gqlapp/article-server-ts';
import product from '@gqlapp/product-server-ts';
import cart from '@gqlapp/cart-server-ts';
import '@gqlapp/debug-server-ts';

import ServerModule from '@gqlapp/module-server-ts';

const user = require('@gqlapp/user-server-ts').default;

const modules: ServerModule = new ServerModule(
  authentication,
  cookies,
  i18n,
  validation,
  subscription,
  user,
  upload,
  contact,
  mailer,
  chat,
  graphqlTypes,
  article,
  product,
  cart,
  core
);

export default modules;
