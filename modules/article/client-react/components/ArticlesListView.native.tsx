import React from 'react';
import { Content, List, Spinner } from 'native-base';

import ArticleCard from './ArticleCard';

const ArticlesListView = ({ loading, data, navigation }: any) => {
  if (loading) {
    return (
      <Content>
        <Spinner />
      </Content>
    );
  }
  return (
    <Content>
      <List>
        {data.allPosts.map(
          ({
            id,
            title,
            content,
            created_at,
            imageSource,
            user
          }: {
            id: number;
            title: string;
            content: string;
            created_at: number;
            imageSource: string;
            user: { fullName: string; avatar: string };
          }) => (
            <ArticleCard
              key={id}
              title={title}
              description={content}
              createdAt={created_at}
              imageSource={imageSource}
              fullName={user.fullName}
              avatar={user.avatar}
              handleClick={() => navigation.push(`Article`, { id })}
            />
          )
        )}
      </List>
    </Content>
  );
};

export default ArticlesListView;
