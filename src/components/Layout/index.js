import React from 'react';
import AdviceCard from '../AdviceCard';
import Presentation from '../Presentation';
import SignUpForm from '../SignUpForm';

import { Container, SignUpContainer } from './styles';

function Layout() {
  return (
    <Container>
        <Presentation />
        <SignUpContainer>
          <AdviceCard />
          <SignUpForm />
        </SignUpContainer>
    </Container>
  );
}

export default Layout;