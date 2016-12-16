import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';
import cx from 'classnames';

import styles from './Header.scss';

class Header extends React.Component {
  state = {
    selectedItem: '',
  }

  render() {
    return (
      <div styleName="root">
        <div className="ui grey secondary pointing menu">
          <Link
            to="/"
            className={cx({ item: true, active: this.state.selectedItem === '/' })}
            onClick={() => this.setState({ selectedItem: '/' })}
          >
            Home
          </Link>
          <Link
            to="about"
            className={cx({ item: true, active: this.state.selectedItem === 'about' })}
            onClick={() => this.setState({ selectedItem: 'about' })}
          >
            About
          </Link>

          <div className="right menu">
            <Link
              to="/auth/login"
              className={cx({ item: true, active: this.state.selectedItem === 'auth' })}
              onClick={() => this.setState({ selectedItem: 'auth' })}
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Header);
