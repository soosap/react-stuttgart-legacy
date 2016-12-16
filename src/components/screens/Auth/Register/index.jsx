import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { compose } from 'recompose';

import styles from './Register.scss';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
  }

  createUser = (e) => {
    e.preventDefault();

    this.props.firebase.createUser({
      email: this.state.email,
      password: this.state.password,
    }, (err) => {
      console.log('err: ', err);
    });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.createUser}>
        <h1>New account</h1>
        <div className="ten wide field">
          <label>Email</label>
          <div className="ui left icon input">
            <input
              type="email"
              placeholder="seetha@saronia.io"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <i className="mail icon" />
          </div>
        </div>
        <div className="ten wide field">
          <label>Password</label>
          <div className="ui left icon input">
            <input
              type="password"
              placeholder="saronia123"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <i className="privacy icon" />
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui primary button" type="submit">Sign up!</button>
      </form>
    );
  }
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Register);
