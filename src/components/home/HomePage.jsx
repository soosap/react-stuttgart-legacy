import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
