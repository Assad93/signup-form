import styled from 'styled-components';

export const Container = styled.div`
    background-color: hsl(248, 32%, 49%);
    padding: 1.0rem 4.0rem;
    color: #FFF;
    opacity: 0.8;
    font-size: 1.0rem;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 20px;

    > p span {
        font-weight: bold;
        font-size: 1.2rem
    }

    @media (min-width: 1024px) {
        font-size: 1.2rem;
        padding: 3rem 4rem;
        > p span {
            font-size: 1.4rem
        }   
    }
`;
