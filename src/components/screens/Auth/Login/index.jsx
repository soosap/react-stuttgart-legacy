import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { compose } from 'recompose';

import LoginForm from './LoginForm';

import styles from './Login.scss';

class Login extends React.Component {
  render() {
    const { authenticateUser, submissionError } = this.props;

    return (
      <div styleName="root" className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <LoginForm submissionError={submissionError} />
        </div>

        <div styleName="divider-column">
          <div className="ui vertical divider">Or</div>
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
  submissionError: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // Pick actions needed by <Login /> component
    // ...
  }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Login);
