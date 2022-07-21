// import './App.css';
import { useState } from "react"
// data
import navItemsData from '../data/navItems.json'
import NewsData from '../data/news.json'
// components
import AppNav from '../components/AppNav/AppNav'
import ArticleTeaser from '../components/ArticleTeaser/ArticleTeaser'
import Article from '../components/Article/Article'



// seed values
const randomArticleIndex = Math.floor(Math.random() * NewsData.length);
// const randomArticle = NewsData[randomArticleIndex];

function App() {
  // states
  const [navItems, setNavItems] = useState(navItemsData)
  // const [article, setArticle] = useState({
  //   id: randomArticleIndex,
  //   title: randomArticle.title,
  //   abstract: randomArticle.abstract,
  //   byline: randomArticle.byline,
  //   image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
  //   created_date: randomArticle.created_date
  // })

  const [showArticle, setShowArticle] = useState(false)

  const handleNavClick = (clickedItem) => { console.log(clickedItem) }
  
  // article state
  const handleTitleClick = (articleID) => { 
    // console.log('article ID:',articleID) 
    setShowArticle(!showArticle)
  }

  const [articles, setArticles] = useState(NewsData.map((article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0].url : null,
      created_date: article.created_date
    }
  }))
  // console.log(articles)
  // renders
  return (
    <div>
      <h1>AppNav Component</h1>
      <hr />
      <AppNav 
        navItems={navItems} 
        handleNavClick={handleNavClick} 
      />
      
      {articles.map((article) => (
        <div>
          <ArticleTeaser
            id={article.id}
            title={article.title}
            created_date={article.created_date}
            handleClick={handleTitleClick} 
            />
            {showArticle && <Article {...article} />}

        </div>
      ))}

      {/* or {showArticle ? <Article {...article} /> : ''} */}
    </div>
  );
}

export default App;
