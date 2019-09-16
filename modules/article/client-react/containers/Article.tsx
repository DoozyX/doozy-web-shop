import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { translate } from '@gqlapp/i18n-client-react';

import GET_POST from '../graphql/GetPost.graphql';
import ADD_COMMENT from '../graphql/AddComment.graphql';

import ArticleView from '../components/ArticleView';

const Article = ({ t, match, navigation }: any) => {
  const [ID] = useState(match ? match.params.id : navigation.getParam('id', 1));
  const [commentMessage, setCommentMessage] = useState('');
  const { data, loading } = useQuery(GET_POST, { variables: { id: parseInt(ID, 10) } });
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_POST, variables: { id: parseInt(ID, 10) } }],
    update: () => {
      setCommentMessage('');
    },
    variables: {
      comment: {
        postId: parseInt(ID, 10),
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
