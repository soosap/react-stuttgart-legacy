import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { compose } from 'recompose';
import { authUser } from 'actions';

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
            <button
              className="ui blue submit button"
              onClick={this.props.authUser}
            >Login</button>
          </div>
        </div>

        {
          // Currently there is a bug in the semantic-ui library
          false && <div className="ui vertical divider">
            Or
          </div>
        }

        <div styleName="divider-column">
          <div className="ui vertical divider">
            Or
          </div>
        </div>

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

const mapStateToProps = (state, ownProps) => ({
  // Pick pieces of application state needed by <Login /> component
  // authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // Pick actions needed by <Login /> component
    authUser,
  }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Login);
