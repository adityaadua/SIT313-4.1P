import React from 'react';
import './Articles.css';

const articles = [
  {
    id: 1,
    image: require('./1.jpg'),
    name: 'MR2',
    description: 'Toyota MR2 Roadster',
    rating: 5,
    author: 'Toyota',
  },
  {
    id: 2,
    image: require('./2.jpg'),
    name: '86 COUPE',
    description: 'Toyota 86 COUPE',
    rating: 4.5,
    author: 'Toyota',
  },
  {
    id:3,
    image:require('./3.jpg'),
    name:'S14 Silvia',
    description:'Nissan S14 Silvia',
    rating : 4,
    author:'Nissan',

  }
];

function FeaturedArticles() {
  return (
    <div className="featured-articles">
      <h1 className='heading'>Featured Articles</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.name} className="article-image" />
            <h3 className="article-name">{article.name}</h3>
            <p className="article-description">{article.description}</p>
            <div className="article-details">
              <span className="article-rating">★ {article.rating}</span>
              <span className="article-author">Author: {article.author}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All Articles</button>
    </div>
  );
}

export default FeaturedArticles;