import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import ArticlesView from '../components/ArticlesView';
import { RouteComponentProps } from 'react-router-dom';

interface ArticlesProps extends RouteComponentProps {
  t: TranslateFunction;
}

class Articles extends React.Component<ArticlesProps> {
  public render() {
    return <ArticlesView {...this.props} />;
  }
}

export default translate('article')(Articles);
