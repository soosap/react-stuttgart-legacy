/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Color } from '../../../../../lib/constants';

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`;

const ContactUsButton = styled.button`

`;

const ContactLink = styled.a`
  color: ${Color.SECONDARY};
`;

const CallToAction = () => (
  <Wrapper>
    <ContactUsButton className="ui primary button">
      <ContactLink
        href="mailto:contact@react-stuttgart.de?Subject=Want%20to%20be%20a%20speaker"
        target="_top"
      >
        Contact Us
      </ContactLink>
    </ContactUsButton>
  </Wrapper>
);

export default CallToAction;
