/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import Header from '../../common/Header';
import NextEvent from './NextEvent';
import EventHistory from './EventHistory';
import Gallery from '../../common/Gallery';
import {
  fetchEvents,
  fetchEventPhotos,
  selectEvent,
} from '../../../actions/events';
import { getSelectedEventPhotos } from '../../../selectors/photos';
import { getEvents, getSelectedEvent } from '../../../selectors/events';
import { media, colors } from '../../../assets/styles';
import eventsData from '../../../assets/resources/events.json';

import type { Photo, Event, Talk } from '../../../types';

type Props = {
  fetchEvents: (eventIds: Array<string>) => void,
  selectEvent: () => void,
  selectedEvent: Event,
  photos: Array<Photo>,
  events: Array<Event>,
};

const eventIds = R.pluck('id', eventsData);
const mostRecentEventId = R.head(eventIds);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.primary};
`;

const Wallpaper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  background-image: url(${require('../../../assets/images/meduana-6917.jpg')});
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  background-position: center bottom;

  ${media.tabletAndLargerThanThat} {
    background-size: cover;
  }
`;

const Photos = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  ${media.tabletAndLargerThanThat} {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchEvents(eventIds);
    this.props.selectEvent(mostRecentEventId);
  }

  props: Props;

  render() {
    const { photos, events, selectedEvent, selectEvent } = this.props;

    const talks: Array<Talk> = [
      {
        speaker: {
          twitter: 'Webkreation',
        },
        title: 'Styling React w/ styled-components',
        description: 'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. ',
        technology: 'react',
      },
    ];

    const scheduledDate = new Date(2017, 3, 24);

    return (
      <Wrapper>
        <Wallpaper>
          <Header />
          <NextEvent talks={talks} date={scheduledDate} />
        </Wallpaper>
        <Photos>
          <EventHistory
            events={events}
            selectedEvent={selectedEvent}
            selectEvent={selectEvent}
          />
          <Gallery dimmer photos={photos} />
        </Photos>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  events: getEvents(state),
  selectedEvent: getSelectedEvent(state),
  photos: getSelectedEventPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchEvents, fetchEventPhotos, selectEvent },
    dispatch,
  ),
  dispatch,
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
