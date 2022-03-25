import "./App.css";

//react-router-dom
import { Link } from "react-router-dom";

//react-icons
import { GiKnifeFork } from "react-icons/gi";

//componetnts
import Category from "./components/Category";
import Search from "./components/Search";

//pages
import Pages from "./pages/Pages";

import styled from "styled-components";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

function App() {
  return (
    <div>
      <Nav>
        <Logo to={"/"}>
          <GiKnifeFork />deliciousss
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
