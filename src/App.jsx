import './App.css';
import { useState } from "react"
// data
import News from './data/news.json';
import navItemsData from './data/navItems.json';
// components
import AppNav from './components/AppNav/AppNav.js';
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.js'
import Article from './components/Article/Article.js'

// seed values
const randomArticleIndex = Math.floor(Math.random() * News.length);
const randomArticle = News[randomArticleIndex];

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)
  const [article, setArticle] = useState({
    id: randomArticleIndex,
    title: randomArticle.title,
    abstract: randomArticle.abstract,
    byline: randomArticle.byline,
    image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
    created_date: randomArticle.created_date
  })

  const handleNavClick = (clickedItem) => { console.log(clickedItem) }

  const handleTitleClick = (articleID) => { console.log(articleID) }

  // renders
  return (
    <div>
      <h1>AppNav Component</h1>
      <hr />
      <AppNav 
        navItems={navItems} 
        handleNavClick={handleNavClick} 
      />
      <h1>ArticleTeaser Component</h1>
      <hr />
      <ArticleTeaser
        id={article.id}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={handleTitleClick} 
      />
      <h1>Article Component</h1>
      <hr />
      <Article {...article} />
    </div>
  );
}

export default App;
