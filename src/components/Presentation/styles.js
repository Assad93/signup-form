import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  color: #FFF;
  font-size: 1.8rem;
  padding: 20px;
  margin-bottom: 20px;

  > p {
        padding: 0 20px;
        line-height: 1.6;
        font-size: 1.2rem;
    }

  @media (min-width: 1024px) {
      font-size: 3.2rem;
      text-align: left;

      > p {
          max-width: 500px;
      }
  } 
`;

export const Title = styled.div`
    margin-bottom: 20px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    @media (min-width: 1024px) {
        align-items: flex-start;
        margin-left: 15px;
    }
`;
