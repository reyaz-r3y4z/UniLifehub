import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #1a237e;
`;

function CareerLaunch() {
  return (
    <Container>
      <Title>Career Launch</Title>
      <p>Tools and resources to kickstart your career journey.</p>
      {/* Add more content here */}
    </Container>
  );
}

export default CareerLaunch;