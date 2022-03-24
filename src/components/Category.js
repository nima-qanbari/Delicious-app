import React from 'react'

//react-router-dom
import { NavLink } from 'react-router-dom'

//react-icons
import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"

//styled-components
import styled from 'styled-components'

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 90px;
height: 85px;
margin: 0 10px;
cursor: pointer;
transform: scale(.8);
background-color: yellow;
transition: all .3s ease;


h4{
    color: red;
}

svg {
    color: red;
    font-size: 1.2rem;
}
&.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
        color: #fff;
    }

    h4{
        color: #fff;
    }
}

@media (max-width: 500px) {
    width: 55px;
    height: 55px;
    margin: 0 3px;

    h4{
        font-size: .6rem;
    }
}
`

const Category = () => {
  return (
    <List>
       <SLink to={'/cuisine/Italian'}>
           <FaPizzaSlice />
           <h4>Italian</h4>
       </SLink>
       <SLink to={'/cuisine/American'}>
           <FaHamburger/>
           <h4>American</h4>
       </SLink>
       <SLink to={'/cuisine/Thai'}>
           <GiNoodles />
           <h4>Thi</h4>
       </SLink>
       <SLink to={'/cuisine/Japanese'}>
           <GiChopsticks />
           <h4>Japanese</h4>
       </SLink>
    </List>
  )
}

export default Category