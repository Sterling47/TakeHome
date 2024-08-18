import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './Components/ArticleList';
import ArticleDetail from './Components/ArticleDetail';
import SearchBar from './Components/SearchBar';
import './App.css';
const mockData = {
    articles: [
      {
        author: "Alex Wilhelm and Theresa Loconsolo",
        content: "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]",
        description: "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
        publishedAt: "2024-05-08T15:01:51Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
        url: "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835"
      },
      {
        author: "Jane Doe and John Smith",
        content: "Tech companies are showing renewed interest in artificial intelligence as the race to build better models heats up. This trend is reminiscent of the early AI booms… [+1200 chars]",
        description: "AI is back in the spotlight with tech giants vying for supremacy. We also explore the latest acquisitions and billion-dollar funding rounds in the tech sector.",
        publishedAt: "2024-05-09T10:15:30Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "AI heats up, tech giants battle for supremacy | TechCrunch",
        url: "https://techcrunch.com/2024/05/09/ai-heats-up-tech-giants-battle-for-supremacy/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/AI-Tech-Giants.jpg?resize=1200,835"
      },
      {
        author: "Chris Johnson",
        content: "The electric vehicle market continues to grow as new startups emerge with innovative designs and technology. Venture capitalists are pouring money into EV companies… [+1300 chars]",
        description: "Electric vehicles are taking the world by storm with cutting-edge technology and sleek designs. We look at the latest developments in the EV space.",
        publishedAt: "2024-05-10T12:45:20Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Electric vehicles: The next big thing in tech | TechCrunch",
        url: "https://techcrunch.com/2024/05/10/electric-vehicles-the-next-big-thing-in-tech/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/EV-Tech.jpg?resize=1200,835"
      },
      {
        author: "Emily White",
        content: "Blockchain technology is gaining traction beyond cryptocurrencies as industries explore its potential for improving security and efficiency. This trend is expected to continue… [+1450 chars]",
        description: "Blockchain is not just for crypto anymore. Industries are exploring its applications for security and efficiency.",
        publishedAt: "2024-05-11T09:30:40Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Blockchain technology: Beyond crypto | TechCrunch",
        url: "https://techcrunch.com/2024/05/11/blockchain-technology-beyond-crypto/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Blockchain-Tech.jpg?resize=1200,835"
      },
      {
        author: "David Lee",
        content: "The race to develop quantum computers is accelerating as tech companies invest heavily in research and development. The potential applications of quantum computing are vast… [+1100 chars]",
        description: "Quantum computing is the next frontier in technology, with companies racing to be the first to achieve quantum supremacy.",
        publishedAt: "2024-05-12T14:20:55Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Quantum computing: The future of technology | TechCrunch",
        url: "https://techcrunch.com/2024/05/12/quantum-computing-the-future-of-technology/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Quantum-Computing.jpg?resize=1200,835"
      },
      {
        author: "Sarah Brown",
        content: "The e-commerce industry is evolving rapidly as companies adopt new technologies to improve customer experience. From AI-driven recommendations to augmented reality shopping… [+1600 chars]",
        description: "E-commerce is getting a tech upgrade with AI and AR leading the charge. Discover the latest trends in online shopping.",
        publishedAt: "2024-05-13T11:35:45Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "E-commerce revolution: AI and AR in online shopping | TechCrunch",
        url: "https://techcrunch.com/2024/05/13/e-commerce-revolution-ai-and-ar-in-online-shopping/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/E-Commerce-Tech.jpg?resize=1200,835"
      },
      {
        author: "Michael Green",
        content: "The gaming industry is experiencing a renaissance as cloud gaming and virtual reality take center stage. Gamers are now enjoying immersive experiences that were once thought impossible… [+1500 chars]",
        description: "Cloud gaming and VR are transforming the gaming industry, offering gamers new ways to play and interact.",
        publishedAt: "2024-05-14T16:10:25Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Gaming in the cloud: The future of entertainment | TechCrunch",
        url: "https://techcrunch.com/2024/05/14/gaming-in-the-cloud-the-future-of-entertainment/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Cloud-Gaming.jpg?resize=1200,835"
      },
      {
        author: "Laura Martinez",
        content: "Artificial intelligence is not just for tech companies anymore. Healthcare is one of the many sectors adopting AI to improve patient outcomes and streamline operations… [+1400 chars]",
        description: "AI is revolutionizing healthcare with new applications that improve patient care and operational efficiency.",
        publishedAt: "2024-05-15T08:50:35Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "AI in healthcare: Transforming the industry | TechCrunch",
        url: "https://techcrunch.com/2024/05/15/ai-in-healthcare-transforming-the-industry/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/AI-Healthcare.jpg?resize=1200,835"
      },
      {
        author: "Robert Adams",
        content: "The fintech industry is undergoing a transformation as startups introduce new ways to manage money. From digital wallets to blockchain-based financial services… [+1350 chars]",
        description: "Fintech is changing how we manage money with innovations in digital wallets and blockchain-based services.",
        publishedAt: "2024-05-16T13:25:50Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Fintech innovations: The future of finance | TechCrunch",
        url: "https://techcrunch.com/2024/05/16/fintech-innovations-the-future-of-finance/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Fintech-Innovations.jpg?resize=1200,835"
      },
      {
        author: "Jessica Parker",
        content: "As renewable energy becomes more mainstream, companies are exploring new technologies to harness clean energy sources. This trend is expected to accelerate as global demand for sustainable solutions grows… [+1250 chars]",
        description: "Renewable energy is on the rise with companies investing in new technologies to harness sustainable power sources.",
        publishedAt: "2024-05-17T17:40:20Z",
        source: { id: 'techcrunch', name: 'TechCrunch' },
        title: "Renewable energy: Powering the future | TechCrunch",
        url: "https://techcrunch.com/2024/05/17/renewable-energy-powering-the-future/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2024/05/Renewable-Energy.jpg?resize=1200,835"
      }
    ]
}

const App = () => {
  

  // const getNews = () => {
  //   fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9e8c87b0d52e4c708d2875dc4f817a2a')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = mockData.articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<ArticleList articles={filteredArticles} />} />
          <Route path="/article/:title" element={<ArticleDetail articles={mockData.articles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App