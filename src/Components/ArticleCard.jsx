import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <Link to={`/article/${article.title}`}>
        <img src={article.urlToImage} alt={article.title} />
        <h2>{article.title}</h2>
        {article.description && <p>{article.description}</p>}
        <small>{new Date(article.publishedAt).toLocaleDateString()}</small>
      </Link>
    </div>
  );
};

export default ArticleCard;
