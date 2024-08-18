import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
  const { title } = useParams();
  const article = articles.find((article) => article.title === title);

  if (!article) return <p>Article not found</p>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <small>{new Date(article.publishedAt).toLocaleDateString()}</small>
      <p>{article.content}</p>
      <p><strong>Source:</strong> {article.source.name}</p>
    </div>
  );
};

export default ArticleDetail;
