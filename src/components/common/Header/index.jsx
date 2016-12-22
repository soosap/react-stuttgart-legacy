import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, IndexLink } from 'react-router';
import { compose } from 'recompose';
import cx from 'classnames';
import { unauthUser } from 'actions';

import styles from './Header.scss';

class Header extends React.Component {
  renderAuthButton = () => {
    if (this.props.authenticated) {
      return (
        <button
          className="ui secondary basic button"
          onClick={this.props.unauthUser}
        >
          Logout
        </button>
      );
    }

    return (
      <Link to="/auth/login" className="item" activeClassName="active">
        Login / Register
      </Link>
    );
  }

  render() {
    return (
      <div styleName="root">
        <div className="ui grey secondary pointing menu">
          <IndexLink to="/" className="item" activeClassName="active">
            Home
          </IndexLink>
          <Link to="about" className="item" activeClassName="active">
            About
          </Link>
          <Link to="dashboard" className="item" activeClassName="active">
            Dashboard
          </Link>
          <div className="right menu">
            {this.renderAuthButton()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // Pick pieces of application state needed by <Header /> component
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // Pick actions needed by <Header /> component
    unauthUser,
  }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Header);
