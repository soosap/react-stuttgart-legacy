import R from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

import NextEvent from './NextEvent';
import EventDate from './NextEvent/EventDate';
import Speaker from './NextEvent/Speaker';
import Gallery from '../../common/Gallery';
import { fetchEvents, fetchPhotos } from '../../../actions/events';

type Props = {
  selectedEvent: string,
  fetchEvents: () => void,
  fetchPhotos: () => void,
}

const Collection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Exhibition = styled.div`
  padding: 50px;
  font-size: 32px;
  font-family: Lullabies-Text
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

  // renderEventGalleries = (events) => {
  //     const galleries = R.values(events).map((event, index) => {
  //         if (event.photos) {
  //           const photos = event.photos.map(photoId => this.props.photos[photoId]);
  //
  //           return (
  //             <Gallery key={index} photos={photos} />
  //           )
  //         }
  //     });
  //
  //     if (galleries.length) {
  //       return <Collection>{galleries}</Collection>
  //     }
  // };

  renderGallery(selectedEvent: string) {
    return (
      <Exhibition>Expect Image Gallery Here</Exhibition>
    );
  };

  render() {
    const { selectedEvent } = this.props;

    return (
      <div className="ui basic center aligned segment">
        <NextEvent>
          <Speaker
            twitter="webkreation"
            title="Styling React w/ styled-components"
            description="The talk will be on styled components."
          />
          <EventDate day="09" month="03" year="2017" />
          <Speaker technology="flow" twitter="soosap" title="Advanced GraphQL" />
        </NextEvent>
        {this.renderGallery(selectedEvent)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchEvents, fetchPhotos }, dispatch),
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
