import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import ArticleView from '../components/ArticleView';

interface MatchParams {
  id: string;
}

interface ArticleProps extends RouteComponentProps<MatchParams> {
  t: TranslateFunction;
}

class Article extends React.Component<ArticleProps> {
  public render() {
    return <ArticleView {...this.props} />;
  }
}

export default translate('article')(Article);
