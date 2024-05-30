import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.5rem outset #81accf;
  outline: 0.5rem solid #bfd5e7;
  border-radius: 50px;
  font: bold 1rem sans-serif;
  z-index: 1;
  margin-top: 1rem;
  padding: 0 1rem;
`;

const NavActions = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  list-style: none;
`;

const NavItem = styled.li`
  cursor: pointer;
  white-space: nowrap;

  .active {
    color: green;
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const HEADER_OFFSET = -100;

export default function Navigation() {
  return (
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
              to="projects"
            >
              Projects
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
  );
}
