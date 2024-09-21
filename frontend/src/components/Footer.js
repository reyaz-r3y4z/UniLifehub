import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a237e;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 UniLife Hub. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
