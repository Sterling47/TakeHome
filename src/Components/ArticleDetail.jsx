import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
  const { title } = useParams();
  const article = articles.find((article) => article.title === title);

  if (!article) return <p>Article not found</p>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className='article-img'/>
      <small>{new Date(article.publishedAt).toLocaleDateString()}</small>
      <p>{article.content}</p>
      <p><strong>Source:</strong> {article.source.name}</p>
      <Link to='/' className='home-bttn'>Home</Link>
    </div>
  );
};

export default ArticleDetail;
