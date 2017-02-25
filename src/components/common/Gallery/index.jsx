/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import LightBox from '../LightBox';

import type { Photo } from '../../../types';

type Props = {
  heading?: string,
  photos: Array<Object>,
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
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 4px solid darkgray;
  margin: 50px 10px 10px 10px;
`;

const Tiles = styled.div`
  width: 100%;
  background-color: green;
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
        hold images
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
