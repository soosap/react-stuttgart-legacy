import React, { PropTypes } from 'react';
import Rebase from 're-base';

import Header from './common/Header';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.firebase = Rebase.createClass({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    }, process.env.APP_NAME);
  }

  render() {
    return (
      <div className="ui container">
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          firebase: this.firebase
        })}
      </div>
    );
  }
}

export default App;
