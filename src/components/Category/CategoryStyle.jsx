import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    border-radius: 20px;
`;

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(to right, #4D7834, #83BC62 );
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);

h4 {
    color: white;
    font-size: .9rem;
}

svg {
    color: white;
    font-size: 1.5;
}

&.active{
    background-color: red;

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}

@media(max-width: 820px) {
    width: 4.5rem;
    height: 4.5rem;    
}
`;