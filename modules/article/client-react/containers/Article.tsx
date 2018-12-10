import React from 'react';

import { translate, TranslateFunction } from '@module/i18n-client-react';
import ArticleView from '../components/ArticleView';

interface ArticleProps {
  t: TranslateFunction;
}

class Article extends React.Component<ArticleProps> {
  public render() {
    return <ArticleView {...this.props} />;
  }
}

export default translate('article')(Article);
