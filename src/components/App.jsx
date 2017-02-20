import React, { PropTypes } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
