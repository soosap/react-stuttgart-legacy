import React from 'react';
import NextEvent from './NextEvent';
import EventDate from './NextEvent/EventDate';
import Speaker from './NextEvent/Speaker';




class Home extends React.Component {
  render() {
    return (
      <div className="ui basic center aligned segment">
        <NextEvent>
          <Speaker
            twitter="webkreation"
            title="Styling React w/ styled-components"
            description="The talk will be on styled components."
          />
          <EventDate day="09" month="03" year="2017" />
          <Speaker
            technology="flow"
            twitter="soosap"
            title="Advanced GraphQL"
          />
        </NextEvent>
      </div>
    );
  }
}

export default Home;
