import styled from 'styled-components';
// import bgImgMobile from "../../images/bg-intro-mobile.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SignUpContainer = styled.div`
  @media (min-width: 1024px) {
    width: 50vw;
  }
`;
