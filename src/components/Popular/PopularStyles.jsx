import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 10% 3%;
    h3{
      color: #F3F2EE;
    }

    @media(max-width: 820px) {
    margin: 0 2%;
    }
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  box-shadow: 10px 5px 5px #252525;
  
  img{
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #F3F2EE;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    font-family: 'Raleway', sans-serif;

  }
`;

export const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;
