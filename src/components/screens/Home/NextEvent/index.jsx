import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextEvent = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

NextEvent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default NextEvent;
