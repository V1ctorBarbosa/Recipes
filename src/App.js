import React from "react"
import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search/Search";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}><GiKnifeFork /></Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  margin: auto;
  background-color: #F3F2EE;
  display: flex;
  border-radius: 50%;
  border: solid;
  padding: 1.2rem;
  color: #3b2b23;
`;

const Nav = styled.div`
  display: flex;
  padding: 5rem 0 2rem 0;
`

export default App;
