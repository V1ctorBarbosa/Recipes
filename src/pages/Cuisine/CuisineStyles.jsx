import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

export const Card = styled.div`

  box-shadow: 10px 5px 5px black;
  border-radius: 20px;
  padding: 2rem;
  margin: 20px;
  background-color:#5E443390;
  background-image: linear-gradient(90deg, #5E443390 50%, transparent 50%),
  linear-gradient(#5E443390 50%, transparent 50%);
  background-size:50px 50px;

  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
    color: #F3F2EE;
    margin-top: 20px;
    border-radius: 20px;
    background-color: #982838;
  }
`;