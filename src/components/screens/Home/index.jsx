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
import { eventPhotos } from '../../../selectors/photos';
import { media } from '../../../assets/styles';
import events from '../../../assets/resources/events.json';

import type { Photo, Event, Talk } from '../../../types';

type Props = {
  fetchEvents: (eventIds: Array<string>) => void,
  fetchEventPhotos: (eventIds: Array<string>) => void,
  selectEvent: () => void,
  selectedEventId: string,
  photos: Array<Photo>,
  events: Array<Event>,
};

const eventIds = R.pluck('id', events);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

class Home extends React.Component {
  static defaultProps = {
    selectedEventId: R.head(eventIds),
  };

  componentWillMount() {
    this.props.fetchEvents(eventIds);
    this.props.fetchEventPhotos(R.head(eventIds));
  }

  props: Props;

  render() {
    const { photos, events, selectedEventId, selectEvent } = this.props;

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
        <EventHistory
          events={events}
          selectedEventId={selectedEventId}
          selectEvent={selectEvent}
        />
        <Gallery dimmer photos={photos} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  events: R.values(state.events),
  selectedEventId: state.selected.event,
  photos: eventPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchEvents, fetchEventPhotos, selectEvent },
    dispatch,
  ),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
