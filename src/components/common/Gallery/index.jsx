/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import LightBox from '../LightBox';

import type { LightBoxImage } from '../../../types';

type Props = {
  heading?: string,
  images: Array<LightBoxImage>,
  showThumbnails?: boolean,
  subheading?: string,
  theme?: Object,
};

type State = {
  currentImage: number,
  isOpenLightBox: boolean,
};

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  margin: 50px 10px 10px 10px;
`;

const Grid = styled.div`
  width: 100%;
`;

class Gallery extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenLightBox: false,
      currentImage: 0,
    };
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.goToNext();
  };

  goToNext() {
    this.setState({ currentImage: R.inc(this.state.currentImage) });
  };

  goToPrevious() {
    this.setState({ currentImage: R.dec(this.state.currentImage) });
  };

  goToClicked(index: number) {
    this.setState({ currentImage: index });
  };

  openLightBox(index: number, event: Event) {
    event.preventDefault();

    this.setState({ currentImage: index, isOpenLightBox: true });
  }

  closeLightBox() {
    this.setState({ currentImage: 0, isOpenLightBox: false });
  };

  renderImageGrid() {



    return (
      <Grid>
        hold images
      </Grid>
    )
  };

  render() {
    const { currentImage, isOpenLightBox } = this.state;
    const { images, showThumbnails, theme } = this.props;

    return (
      <Wrapper>
        {this.renderImageGrid}
        <LightBox
          currentImage={currentImage}
          images={images}
          isOpen={isOpenLightBox}
          onClickImage={this.handleClickImage}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
          onClickThumbnail={this.goToClicked}
          onClose={this.closeLightBox}
          showThumbnails={showThumbnails}
          theme={theme}
        />
      </Wrapper>
    );
  };
}

export default Gallery;
