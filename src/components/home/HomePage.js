import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
          <h1>React Course in ES6</h1>
          <p> This is a course using React in ES6 and Redux </p>
          <Link to="about" className="btn btn-primary btn-lg"> Learn More </Link>
        </div>
    );
  }
}

export default HomePage;
