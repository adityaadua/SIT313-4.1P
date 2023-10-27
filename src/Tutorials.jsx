import React from 'react';
import './Tutorials.css';
import { faker } from '@faker-js/faker';

const tutorials = [
  {
    id: 4,
    image: require('./4.jpg'),
    name: 'ENGINE',
    description: 'Whats inside a JDM?',
    rating: 3,
    "username" : faker.person.fullName(),  },
  {
    id: 5,
    image: require('./5.jpg'),
    name: 'JDM',
    description: 'Cleaning under the hood',
    rating: 5,
    "username" : faker.person.fullName(),
  },
  {
    id: 6,
    image:require('./6.jpg'),
    name:'GTR34',
    description:'Driving Lessons',
    rating : 4.3,
    "username" : faker.person.fullName(),  }
];

function FeaturedTutorials() {
  return (
    <div className="featured-tutorials">
      <h1 className='heading'>Featured Tutorials</h1>
      <div className="tutorial-list">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorial">
            <img src={tutorial.image} alt={tutorial.name} className="tutorial-image" />
            <h3 className="tutorial-name">{tutorial.name}</h3>
            <p className="tutorial-description">{tutorial.description}</p>
            <div className="tutorial-details">
              <span className="tutorial-rating">★ {tutorial.rating}</span>
              <span className="tutorial-username">username: {tutorial.username}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All Tutorials</button>
    </div>
  );
}

export default FeaturedTutorials;