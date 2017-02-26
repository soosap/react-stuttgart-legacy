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
import { fetchEvents, fetchPhotos, selectEvent } from '../../../actions/events';
import { eventPhotos } from '../../../selectors/photos';

import type { Photo, Event, Talk } from '../../../types';

type Props = {
  fetchEvents: () => void,
  fetchPhotos: () => void,
  selectEvent: () => void,
  selectedEventId?: string,
  photos: Array<Photo>,
  events: Array<Event>,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wallpaper = styled.div`
  background-image: url(${require('../../../assets/images/meduana-6917.jpg')});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Exhibition = styled.div`
  margin: 20px;
`;

class Home extends React.Component {
  props: Props;

  componentWillMount() {
    this.props.fetchEvents([
      'https://api.meetup.com/ReactStuttgart/events/234759379?photo-host=public&sig_id=193558024&sig=c2010ff3fcab0066df19c4ce7ca4765f300c267f', // Daimler
      'https://api.meetup.com/ReactStuttgart/events/233941914?photo-host=public&sig_id=193558024&sig=a23a9bfb697285b899fbfc525f26c58cbc1d8b04', // nexmart
      'https://api.meetup.com/ReactStuttgart/events/229668388?photo-host=public&sig_id=193558024&sig=5940a66fffe912bf593d370c5f5cf683a2d98f6a', // ReactEurope 2016
      'https://api.meetup.com/ReactStuttgart/events/228547676?photo-host=public&sig_id=193558024&sig=9e46aaae0e343ad513f5781530e32efdcc6aab35', // conspecton
      'https://api.meetup.com/ReactStuttgart/events/227497500?photo-host=public&sig_id=193558024&sig=776e4a745d65cddf96e39825fee2bf3dd7fcd768', // conspecton
    ]);

    this.props.fetchPhotos([
      'https://api.meetup.com/ReactStuttgart/events/228547676/photos?photo-host=public&page=20&sig_id=193558024&sig=06c2ee0d9e2be318fe9f7a57cb48324ea669440b',
      'https://api.meetup.com/ReactStuttgart/events/233941914/photos?photo-host=public&page=20&sig_id=193558024&sig=4c3a88ef46750cd73ceda75058dcd5cc2ee76a04',
    ]);
  }

  render() {
    const { photos, events, selectedEventId, selectEvent } = this.props;

    const talks: Array<Talk> = [
      {
        speaker: {
          twitter: 'SquashPaT',
        },
        title: 'React',
        description: 'Introduction',
        technology: 'react',
      },
      {
        speaker: {
          twitter: 'BetterCallPaT',
        },
        title: 'Introduction to GraphQL',
        description: 'Introduction',
        technology: 'graphql',
      },
    ];

    const scheduledDate = new Date(2017, 3, 24);

    return (
      <Wrapper>
        <Wallpaper>
          <Header />
          <NextEvent talks={talks} date={scheduledDate} />
        </Wallpaper>
        <Exhibition>
          <EventHistory events={events} selectedEventId={selectedEventId} selectEvent={selectEvent} />
          <Gallery dimmer={true} photos={photos} />
        </Exhibition>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  events: R.values(state.events),
  selectedEventId: state.selected.event,
  photos: eventPhotos(state),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchEvents, selectEvent, fetchPhotos }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
