/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalRoot from '../../modals';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import NextEvent from './NextEvent';
import EventHistory from './EventHistory';
import Gallery from '../../common/Gallery';

import {
  fetchEvents,
  fetchEventPhotos,
  selectEvent,
} from '../../../actions/events';
import { showModal } from '../../../actions/modal';
import { getSelectedEventPhotos } from '../../../selectors/photos';
import {
  getEvents,
  getSelectedEvent,
  getNextEvent,
} from '../../../selectors/events';
import { media, colors } from '../../../assets/styles';

import type { Photo, Event } from '../../../types';

type Props = {
  fetchEvents: () => void,
  selectEvent: () => void,
  showModal: () => void,
  selectedEvent: Event,
  nextEvent: ?Event,
  photos: Array<Photo>,
  events: Array<Event>,
};

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
    this.props.fetchEvents();
  }

  props: Props;

  render() {
    console.log('this.props.nextEvent', this.props.nextEvent);
    return (
      <Wrapper>
        <Wallpaper>
          <Header />
          <NextEvent event={this.props.nextEvent} />
        </Wallpaper>
        <Photos>
          <EventHistory
            events={this.props.events}
            selectedEvent={this.props.selectedEvent}
            selectEvent={this.props.selectEvent}
          />
          <Gallery
            photos={this.props.photos}
            showModal={this.props.showModal}
          />
        </Photos>
        <Footer showModal={this.props.showModal} />
        <ModalRoot />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  events: R.values(getEvents(state)),
  photos: getSelectedEventPhotos(state),
  nextEvent: getNextEvent(state),
  selectedEvent: getSelectedEvent(state),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchEvents,
    fetchEventPhotos,
    selectEvent,
    showModal,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
