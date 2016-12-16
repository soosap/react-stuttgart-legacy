import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import styles from './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div styleName="root" className="ui basic segment">
        {this.props.children}
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Auth);
