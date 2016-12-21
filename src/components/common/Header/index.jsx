import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { compose } from 'recompose';
import cx from 'classnames';
import { unauthUser } from 'actions';

import styles from './Header.scss';

class Header extends React.Component {
  state = {
    activeTab: '/',
  }

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
      <Link
        to="/auth/login"
        className={cx({ item: true, active: this.state.selectedItem === 'auth' })}
        onClick={() => this.setState({ activeTab: 'auth' })}
      >
        Login / Register
      </Link>
    );
  }

  render() {
    return (
      <div styleName="root">
        <div className="ui grey secondary pointing menu">
          <Link
            to="/"
            className={cx({ item: true, active: this.state.activeTab === '/' })}
            onClick={() => this.setState({ activeTab: '/' })}
          >
            Home
          </Link>
          <Link
            to="about"
            className={cx({ item: true, active: this.state.activeTab === 'about' })}
            onClick={() => this.setState({ activeTab: 'about' })}
          >
            About
          </Link>
          <Link
            to="dashboard"
            className={cx({ item: true, active: this.state.activeTab === 'dashboard' })}
            onClick={() => this.setState({ activeTab: 'dashboard' })}
          >
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
