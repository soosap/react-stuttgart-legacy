import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  margin: 50px 10px 10px 10px;
`;

const GalleryImage = styled.img`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollBar = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: auto;
  overflow-y: hidden;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  padding: 1px;
  border: 1px solid gray;
`;

const Gallery = ({ photos, selectedPhoto }) => {
  return (
    <Wrapper>
      <GalleryImage src={selectedPhoto.photo_link} />
      <ScrollBar>
        {photos.map((photo, index) => (
          <Thumbnail key={index} src={photo.thumb_link} />
        ))}
      </ScrollBar>
    </Wrapper>
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPhoto: PropTypes.object.isRequired,
};

export default Gallery;
