import React from "react";
import styled from "styled-components";
import { LightSunDarkMode } from "../icons/lightSunDarkMode";
import { DarkSunDarkMode } from "../icons/darkSunDarkMode";

const ToggleButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export default function ToggleButtonDarkMode({toggleDarkMode}) {
  function handleChange() {  
    toggleDarkMode();
    if (document.body.dataset.theme === "light") {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }
  return (
    <>
      <ToggleButton id="check" onClick={handleChange} > <LightSunDarkMode/> </ToggleButton>
    </>
  );
}
