import React from 'react';
import { Link } from 'react-router';
import { compose } from 'recompose';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="ui basic center aligned segment">
        <h1 className="ui header">Super Secret Dashboard</h1>
        <h3 className="ui header">
          You can only see this if you are logged in.
        </h3>
      </div>
    );
  }
}

export default Dashboard;
