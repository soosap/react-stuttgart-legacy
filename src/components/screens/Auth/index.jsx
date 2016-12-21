import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { compose } from 'recompose';
import { authUser, unauthUser } from 'actions';

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
