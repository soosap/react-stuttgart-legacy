import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Header from './common/Header';
import Footer from './common/Footer';

const Wrapper = styled.div`
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`;

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Wrapper>
        {/*<Header />*/}
        {this.props.children}
        <Footer />
      </Wrapper>

    );
  }
}

export default App;
