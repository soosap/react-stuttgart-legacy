import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

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

  render() {
    const { photos, events } = this.props;

    const speakers = [
      {
        twitter: 'SquashPaT',
        title: 'React',
        description: 'Introduction'
      },
    ];

    return (
      <div className="ui basic center aligned segment">
        <NextEvent speakers={speakers} date={new Date()} />
        <EventHistory events={events} />
        <Gallery dimmer={true} photos={photos} />
      </div>
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
