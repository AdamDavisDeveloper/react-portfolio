//Styled Components
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
//Router
import { Link } from "react-router-dom";
//Use Location
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Adam Davis
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
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
// eslint-disable-next-line
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;
export default Nav;
