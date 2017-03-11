/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import { compose, withHandlers } from 'recompose';
import styled from 'styled-components';

import { CONTACT_US } from '../../modals/types';

type Props = {
  photos: Array<Object>,
  showModal: () => void,
};

type EnhancedProps = Props & {
  onTileClick: () => void,
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
  props: EnhancedProps;

  renderTiles = (): ?Element<Tiles> => {
    if (R.either(R.isNil, R.isEmpty)(this.props.photos)) return null;

    return (
      <Tiles>
        {this.props.photos.map(photo => (
          <Tile
            key={photo.id}
            src={photo.photo_link}
            onClick={this.props.onTileClick}
          />
        ))}
      </Tiles>
    );
  };

  render() {
    return (
      <Wrapper>
        {this.renderTiles()}
      </Wrapper>
    );
  }
}

export default compose(
  withHandlers({
    onTileClick: (props: Props) => () => {
      props.showModal(CONTACT_US);
    },
  }),
)(Gallery);
