import React from 'react';

import { Container, Title } from './styles';

function Presentation() {
  return (
    <Container>
      <Title>
        <h2>Learn to code by</h2>
        <h2>watching others</h2>
      </Title>
      <p>
        See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how developers
        think is invaluable.
      </p>
    </Container>
  );
}

export default Presentation;