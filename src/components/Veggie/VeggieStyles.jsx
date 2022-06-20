import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2% 10% 0;

  h3{
    color: #F3F2EE;
    display: flex;
    justify-content: center;
  }

  @media(max-width: 820px) {
    margin: 0 2%;
  }

`;

export const Card = styled.div`
  min-height: 25rem;
  position: relative;
  box-shadow: 10px 5px 5px #252525;
  border-radius: 3rem;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    color: #F3F2EE;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    font-family: 'Raleway', sans-serif;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  z-index: 3;
  border-radius: 2rem;
`;