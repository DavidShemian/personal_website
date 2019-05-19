import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <NavContainer>
        <NavContent>
          {/* <img
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          /> */}
          <NavList>
            <NavListItem>
              <Link
                activeClass="active"
                to="Welcome"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Welcome
              </Link>
            </NavListItem>
            <NavListItem>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </NavListItem>
            <NavListItem>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </NavListItem>
            <NavListItem>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </NavListItem>
            <NavListItem>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </NavListItem>
          </NavList>
        </NavContent>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  background-color: #FFFF;
  position: sticky;
  top: 0px;
  height: 50px;
  /* box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15); */
  display: flex;
  flex-direction: row;
  justify-content: center; 
  background-color: pink;
`;

const NavContent = styled.div`
  /* max-width: 900px; */
  /* padding: 0rem 3rem; */
  /* margin: 0 auto; */
  /* justify-content: flex-start; */
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: blue;
`;

const NavList = styled.ul`
  display: inline;
  margin-left: 2rem;
  color: #333;
  background-color: red;
`;

const NavListItem = styled.li`
  display: inline;
  margin-left: 2rem;
  color: #333;
  background-color: green;
`;