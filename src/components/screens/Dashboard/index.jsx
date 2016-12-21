import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import styles from './Dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div styleName="root" className="ui basic center aligned segment">
        <h1 className="ui header">Super Secret Dashboard</h1>
        <h3 className="ui header">
          You can only see this if you are logged in.
        </h3>
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Dashboard);
