import React from 'react';
import NextEvent from './NextEvent';

class Home extends React.Component {
  render() {
    return (
      <div className="ui basic center aligned segment">
        <NextEvent day="09" month="03" year="2017" />
      </div>
    );
  }
}

export default Home;
