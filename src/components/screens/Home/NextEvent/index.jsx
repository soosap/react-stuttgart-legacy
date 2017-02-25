import React, { PropTypes } from 'react';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import Speaker from '../../../common/Speaker/index.jsx';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex;
`;

const RawEventDate = styled.div`
  background-color: #fff000;
  padding-bottom: 5%;
  
`;

const NextEvent = ({ speakers, date }) => {

  return (
    <Wrapper>

      <RawEventDate>
        <EventDate day="07" month="03" year="2017"/>
      </RawEventDate>


      {speakers.map((speaker, index) => {
        const { technology, twitter, description, title } = speaker;

        return (
          <Speaker
            key={index}
            technology={technology}
            twitter={twitter}
            description={description}
            title={title}
          />
        )
      })}
    </Wrapper>
  );
};

NextEvent.propTypes = {
  speakers: PropTypes.array.isRequired,
  event: PropTypes.instanceOf(Date),
};

export default NextEvent;
