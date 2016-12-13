import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import styles from './HomePage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div styleName="root" className="ui segment">
        <h1>SARONIA's react-starter-kit rocks!</h1>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(HomePage);
