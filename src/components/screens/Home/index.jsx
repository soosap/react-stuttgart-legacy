import React from 'react';
import { Link } from 'react-router';
import { compose } from 'recompose';

class Home extends React.Component {
  render() {
    return (
      <div className="ui basic center aligned segment">
        <h1 className="ui header">react-starter-kit rocks!</h1>
        <h3 className="ui header">
          <Link to="/about">Learn more</Link>
        </h3>
      </div>
    );
  }
}

export default Home;
