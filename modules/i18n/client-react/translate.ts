import React from 'react';

import settings from '@gqlapp/config';

// tslint:disable-next-line
const reactI18next = settings.i18n.enabled ? require('react-i18next') : null;

export const translate = (ns: any) => {
  return (Component: any) => {
    if (settings.i18n.enabled) {
      return reactI18next.withTranslation(ns)(Component);
    } else {
      // eslint-disable-next-line react/display-name
      return (props: any) => React.createElement(Component, { ...props, t: (key: any) => key });
    }
  };
};

export const useTranslation = (namespace: string) => {
  if (settings.i18n.enabled) {
    return reactI18next.useTranslation(namespace, { useSuspense: false });
  }

  return { t: (text: string) => text };
};

export type TranslateFunction = (msg: string, ...params: any[]) => string;
