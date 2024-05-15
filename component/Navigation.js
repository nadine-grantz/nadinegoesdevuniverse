import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.header`
  display: flex;
  position: sticky;
  justify-content: center;
  top: 2rem;
  min-height: 70px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
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

const HEADER_OFFSET = -70;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <NavActions>
          <NavList>
            <NavItem>
              <Link
                offset={HEADER_OFFSET}
                activeClass="active"
                smooth
                spy
                to="home"
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                offset={HEADER_OFFSET}
                activeClass="active"
                smooth
                spy
                to="about_me"
              >
                About me
              </Link>
            </NavItem>
            <NavItem>
              <Link
                offset={HEADER_OFFSET}
                activeClass="active"
                smooth
                spy
                to="cv"
              >
                CV
              </Link>
            </NavItem>
          </NavList>
        </NavActions>
      </NavContainer>
    </>
  );
}
