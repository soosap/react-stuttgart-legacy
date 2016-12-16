import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import styles from './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div styleName="root" className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <h1>Authenticate</h1>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <div className="ui left icon input">
                <input type="text" placeholder="Username" />
                <i className="user icon" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="ui left icon input">
                <input type="password" />
                <i className="lock icon" />
              </div>
            </div>
            <div className="ui blue submit button">Login</div>
          </div>
        </div>

        {
          // Currently there is a bug in the semantic-ui library
          false && <div className="ui vertical divider">
            Or
          </div>
        }

        <div className="center aligned column">
          <Link to="/auth/register" className="ui big green labeled icon button">
            <i className="signup icon" />
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Login);
