import styled from 'styled-components';

export const Form = styled.form`
  div{ 
    display: flex;
    justify-content: center;
  }
  input {
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: solid 2px #3b2b23;;
    outline: none;
    color: #3b2b23;;
    background-color: #F3F2EE;
  }

  @media(max-width: 820px) {
    input {
      font-size: 1rem;
      padding: 1rem 2rem;
    }
  }
`;