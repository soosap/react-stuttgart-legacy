import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  font-size: 2.5em;
  text-align: center;
  vertical-align: middle;
  color: palevioletred;
  background: #1B1C1D;
	width: 300px;
	height: 300px; 
  padding: 0.5em;
  border-radius: 500em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.h1`
  padding-top: 1em;
  color: white;
`;

const EventDayAndMonth = styled.div`
  font-size: 2.5em;
  padding: 0.5em 0 0 0;
  height: 1.5em;
`;

const EventYear = styled.div`
  padding: 0;
  height: 2em;
`;

class NextEvent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Circle>
          <Header>Next Event:</Header>
          <EventDayAndMonth>{this.props.day}/{this.props.month}</EventDayAndMonth>
          <EventYear>{this.props.year}</EventYear>
        </Circle>
      </Wrapper>
    );
  }
}

export default NextEvent;
