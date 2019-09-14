import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import GET_POST from '../graphql/GetPost.graphql';
import ADD_COMMENT from '../graphql/AddComment.graphql';

import '../components/ArticleView';
import ArticleView from '../components/ArticleView';

interface MatchParams {
  id: string;
}

interface ArticleViewProps extends RouteComponentProps<MatchParams> {
  t: TranslateFunction;
}

const Article = ({ t, match }: ArticleViewProps) => {
  const [commentMessage, setCommentMessage] = useState('');
  // const [articleData, articleData] = useState({});
  const { data, loading } = useQuery(GET_POST, { variables: { id: parseInt(match.params.id, 10) } });
  const addComment = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_POST, variables: { id: parseInt(match.params.id, 10) } }],
    update: () => {
      setCommentMessage('');
    },
    variables: {
      comment: {
        postId: parseInt(match.params.id, 10),
        content: commentMessage
      }
    }
  });

  return (
    <ArticleView
      data={data}
      loading={loading}
      t={t}
      addComment={addComment}
      commentMessage={commentMessage}
      setCommentMessage={setCommentMessage}
    />
  );
};

export default translate('article')(Article);
