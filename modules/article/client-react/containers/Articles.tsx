import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import ArticlesView from '../components/ArticlesView';

interface ArticleProps {
  t: TranslateFunction;
}

class Articles extends React.Component<ArticleProps> {
  public render() {
    return <ArticlesView {...this.props} />;
  }
}

export default translate('article')(Articles);
