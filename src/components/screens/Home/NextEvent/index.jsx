import React, { PropTypes } from 'react';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import Speaker from '../NextEvent/Speaker';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextEvent = ({ speakers, date }) => {


  return (
    <Wrapper>
      <EventDate day="07" month="03" year="2017" />

      {speakers.map(speaker => {
        return (
          <Speaker />
        )
      })}
    </Wrapper>
  );
};

NextEvent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default NextEvent;
