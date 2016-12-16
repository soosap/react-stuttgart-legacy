import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import styles from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div styleName="root" className="ui basic center aligned segment">
        <h1 className="ui header">react-starter-kit rocks!</h1>
        <h3 className="ui header">
          <Link to="/about">Learn more</Link>
        </h3>
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Home);
