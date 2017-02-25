import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import Header from '../../common/Header';
import NextEvent from './NextEvent';
import EventHistory from './EventHistory';
import Gallery from '../../common/Gallery';
import { fetchEvents, fetchPhotos } from '../../../actions/events';
import { eventPhotos } from '../../../selectors/photos';

import type { Photo, Event } from '../../../types';

type Props = {
  fetchEvents: () => void,
  fetchPhotos: () => void,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wallpaper = styled.div`
  background-image: url(${require('../../../assets/images/meduana-6917.jpg')});
  background-attachment: fixed;
  background-position: 100%; 
  background-size: 100%, 100%;
`;

class Home extends React.Component {
  props: Props;

  componentWillMount() {
    this.props.fetchEvents([
      'https://api.meetup.com/ReactStuttgart/events/228547676?photo-host=public&sig_id=193558024&sig=9e46aaae0e343ad513f5781530e32efdcc6aab35',
      'https://api.meetup.com/ReactStuttgart/events/233941914?photo-host=public&sig_id=193558024&sig=a23a9bfb697285b899fbfc525f26c58cbc1d8b04',
    ]);

    this.props.fetchPhotos([
      'https://api.meetup.com/ReactStuttgart/events/228547676/photos?photo-host=public&page=20&sig_id=193558024&sig=06c2ee0d9e2be318fe9f7a57cb48324ea669440b',
      'https://api.meetup.com/ReactStuttgart/events/233941914/photos?photo-host=public&page=20&sig_id=193558024&sig=4c3a88ef46750cd73ceda75058dcd5cc2ee76a04',
    ]);
  }

  selectEvent = () => {
    console.log('Event has been selected.');
  };

  render() {
    const { photos, events } = this.props;

    const speakers = [
      {
        twitter: 'SquashPaT',
        title: 'React',
        description: 'Introduection',
        technology: 'react'
      },
      {
        twitter: 'BetterCallPaT',
        title: 'React',
        description: 'Introduction',
        technology: 'redux'
      }
    ];

    return (
      <Wrapper>
        <Wallpaper>
          <Header />
          <NextEvent speakers={speakers} date={new Date()} />
        </Wallpaper>
        <EventHistory events={events} selectEvent={this.selectEvent} />
        <Gallery dimmer={true} photos={photos} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  events: R.values(state.events),
  photos: R.values(state.photos),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchEvents, fetchPhotos }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
