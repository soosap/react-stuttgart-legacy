/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import LightBox from '../LightBox';
// import { graphql } from '../../../assets/styles/colors';

import type { Photo } from '../../../types';
type Props = {
  heading?: string,
  photos: Array<Photo>,
  showThumbnails?: boolean,
  subheading?: string,
  dimmer: boolean | 'inverted' | 'blurring',
};

type State = {
  selectedPhoto: number,
  selectedEvent: string,
  isOpenLightBox: boolean,
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Tiles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tile = styled.img`
  height: 100px;
`;

class Gallery extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenLightBox: false,
      selectedEvent: '',
      selectedPhoto: 0,
    };
  }

  handleClickImage = () => {
    // if (this.state.currentImage === this.props.images.length - 1) return;

    this.goToNext();
  };

  goToNext = () => {
    // this.setState({ currentImage: R.inc(this.state.currentImage) });
  };

  goToPrevious = () => {
    // this.setState({ currentImage: R.dec(this.state.currentImage) });
  };

  goToClicked = (index: number) => {
    // this.setState({ currentImage: index });
  };

  openLightBox = (selectedPhoto: number, event: Object) => {
    event.preventDefault();

    this.setState({ selectedPhoto, isOpenLightBox: true });
  };

  closeLightBox = () => {
    this.setState({ isOpenLightBox: false });
  };

  renderTiles = () => {
    return (
      <Tiles onClick={this.openLightBox}>
        {this.props.photos.map(photo => <Tile key={photo.id} src={photo.photo_link} />)}
      </Tiles>
    )
  };

  render() {
    const { isOpenLightBox, selectedPhoto } = this.state;
    const { photos, showThumbnails, dimmer } = this.props;

    return (
      <Wrapper>
        {this.renderTiles()}
        <LightBox
          selectedPhoto={selectedPhoto}
          images={photos}
          isOpen={isOpenLightBox}
          onClickImage={this.handleClickImage}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
          onClickThumbnail={this.goToClicked}
          onClose={this.closeLightBox}
          showThumbnails={showThumbnails}
          dimmer={dimmer}
        />
      </Wrapper>
    );
  };
}

export default Gallery;
