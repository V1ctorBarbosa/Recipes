import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import {
    List,
    SLink,
} from './CategoryStyle'

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Korean'}>
            <GiNoodles />
            <h4>Korean</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}


export default Category