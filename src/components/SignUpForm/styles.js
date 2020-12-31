import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  border-radius: 4px;
  padding: 20px;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }

`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > div + div {
      margin-top: 20px;
  }
`;

export const InputLine = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => (props.formError ? 'hsl(0, 100%, 74%)' : '#AAA')};
  border-radius: 4px;

  font-weight: bold;
  color: hsl(249, 10%, 26%); 

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const EIcon = styled.i`
  position: absolute;
  top: 6px;
  right: 5px;
  z-index: 10;
  line-height: 20px;

  @media (min-width: 1024px) {
    top: 16px;
    right: 10px;
  }
`;

export const FormError = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 5px;
  text-align: right;
  color: hsl(0, 100%, 74%);
  font-size: 1.2rem;
  font-style: italic;  
`;

export const Button = styled.button`
  background-color: hsl(154, 59%, 51%);
  padding: 2rem 2rem;
  color: #FFF;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  width: 70%;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    padding: 3rem 3rem;
    font-size: 1.8rem
  }
`;

export const Terms = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #AAA;

  > p span {
    color: hsl(0, 100%, 74%);
  }
`;