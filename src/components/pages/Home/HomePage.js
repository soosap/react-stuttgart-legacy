/* @flow */
import React, { Component } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators, type Dispatch } from 'redux';

import ModalRoot from '../../modals';
import Navigation from '../../common/Navigation';
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
  getNextEvent,
  getPreviousEvents,
  getSelectedEvent,
} from '../../../selectors/events';
import { Media, Color } from '../../../lib/constants';

import type { Photo, Event, Action } from '../../../lib/types';

type Props = {
  selectEvent: (eventId: string) => void,
  fetchEvents: Function,
  showModal: (modalType: string, modalProps?: Object) => void,
  nextEvent: ?Event,
  photos: Array<Photo>,
  previousEvents: Array<Event>,
  selectedEvent: Event,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${Color.SECONDARY_DARK}
`;

const Wallpaper = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${require('../../../assets/images/stuttgartbib.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed !important;
  background-position: center bottom;
  background-color: white;
  background-blend-mode: darken, luminosity;
  ${''}

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    background-size: cover;
  }
`;

const Photos = styled.div`
  margin-bottom: 1rem;
  background-color: white;

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    margin-bottom: 2rem;
  }
`;

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  props: Props;

  render() {
    const {
      nextEvent,
      previousEvents,
      selectedEvent,
      photos,
      selectEvent,
      showModal,
    } = this.props;

    return (
      <Wrapper>
        <Wallpaper>
          <Navigation />
          <NextEvent event={nextEvent} showModal={showModal} />
        </Wallpaper>
        <Photos>
          <EventHistory
            events={previousEvents}
            selectedEvent={selectedEvent}
            selectEvent={selectEvent}
          />
          <Gallery photos={photos} showModal={showModal} />
        </Photos>
        <Footer showModal={showModal} />
        <ModalRoot />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Object) => ({
  photos: R.values(getSelectedEventPhotos(state)),
  nextEvent: getNextEvent(state),
  previousEvents: R.values(getPreviousEvents(state)),
  selectedEvent: getSelectedEvent(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      fetchEvents,
      fetchEventPhotos,
      selectEvent,
      showModal,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
