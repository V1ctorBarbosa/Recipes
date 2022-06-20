import styled from 'styled-components'

export const DetailWrapper = styled.div`

  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 10px 5px 5px black;
  margin: auto;
  width: 800px;

  padding: 2rem;
  background-color:#5E4433bf;
  background-image: linear-gradient(90deg, #5E443390 50%, transparent 50%),
  linear-gradient(#5E443390 50%, transparent 50%);
  background-size:50px 50px;

  @media(max-width:860px) {
    width: 600px;
  }

  @media(max-width:620px) {
    width: 400px;
  }

  @media(max-width:460px) {
    width: 300px;
  }

  .active{
    background: linear-gradient(35deg, #982838, #982810ff);
    color: #F3F2EE;
  }
  h2 {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    color: #F3F2EE;
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 2rem;
    display: flex;
    margin: 0 auto; 
  }

  @media(max-width:620px) {
    img {
      width: 400px;
    }
  }

  @media(max-width:460px) {
    img {
      width: 300px;
    }
  }

 `;

export const Info = styled.div`

  margin: auto;
  
  div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  div:nth-child(2) {
    margin: 22px 35px;
    background-color: #F2EDE7;
    padding: 0 40px ;
    border-radius: 20px;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #982838;
  background: #F3F2EE;
  border: 2px solid #982838;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
`;