/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import DefaultModal from '../../modals/templates/Default';
import { BECOME_SPEAKER } from '../../modals/types';

type Props = {
  photos: Array<Object>,
  showModal: () => void,
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
  cursor: pointer;
`;

class Gallery extends React.Component {
  props: Props;

  handleClickTile = () => {
    this.props.showModal(BECOME_SPEAKER);
  };

  renderTiles = () => {
    if (R.either(R.isNil, R.isEmpty)(this.props.photos)) return null;

    return (
      <Tiles>
        {this.props.photos.map(photo => (
          <Tile
            key={photo.id}
            src={photo.photo_link}
            onClick={this.handleClickTile}
          />
        ))}
      </Tiles>
    );
  };

  render() {
    return (
      <Wrapper>
        {this.renderTiles()}
        <DefaultModal>
          Gallery
        </DefaultModal>
      </Wrapper>
    );
  }
}

export default Gallery;
