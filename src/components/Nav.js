//Styled Components
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About me</Link>
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact me</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 20;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1008px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      padding: 2rem;
      font-size: 3rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
      a {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 350px) {
    li {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Nav;
