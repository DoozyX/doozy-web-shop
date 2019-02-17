import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import ArticleView from '../components/ArticlesView';

interface ArticleProps {
  t: TranslateFunction;
}

class Article extends React.Component<ArticleProps> {
  public render() {
    return <ArticleView {...this.props} />;
  }
}

export default translate('article')(Article);
