// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './Components/ArticleList';
import ArticleDetail from './Components/ArticleDetail';
import Nav from './Components/Nav';
import './App.css';

const getNews = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e8c87b0d52e4c708d2875dc4f817a2a');
  const data = await response.json();
  return data.articles;
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getNews();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <Nav setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<ArticleList articles={filteredArticles} />} />
          <Route path="/article/:title" element={<ArticleDetail articles={articles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
