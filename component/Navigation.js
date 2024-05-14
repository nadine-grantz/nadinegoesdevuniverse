import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  position: sticky;
  top: -5px;
  min-height: 70px;
  background-color: #fff;
  padding: 0 1rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
  justify-content: center;
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
