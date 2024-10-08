import React from 'react';
import ArticleCard from './ArticleCard';


const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      <h1>Todays News!</h1>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
