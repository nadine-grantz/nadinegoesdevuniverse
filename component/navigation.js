import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: -5px;
  z-index: 2;
  height: 70px;
  min-height: 70px;
  width: calc(100% - 1.5rem);
  background-color: #fff;
  padding: 0 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
`;

const NavActions = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <NavActions>
          <NavList>
            <NavItem>
              <Link activeClass="active" smooth spy to="about_me">
                ABOUT ME
              </Link>
            </NavItem>
            <NavItem>
              <Link activeClass="active" smooth spy to="cv">
                CV
              </Link>
            </NavItem>
          </NavList>
        </NavActions>
      </NavContainer>
    </>
  );
}
