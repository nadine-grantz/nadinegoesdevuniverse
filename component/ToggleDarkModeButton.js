import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: absolute;
  top: 2em;
  right: 2em;
`;

const ToggleButton = styled.input`
  display: none;

  & + label {
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 0.5em 1em;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: 5px;
  }

  &:checked + label {
    background: var(--color-black);
    color: var(--color-white);
  }
`;

export default function ToggleButtonDarkMode() {
  function handleChange() {
    if (document.body.dataset.theme === "light") {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  }
  return (
    <ToggleContainer>
      <ToggleButton type="checkbox" id="check" onChange={handleChange} />
      <label htmlFor="check">Dart Mode</label>
    </ToggleContainer>
  );
}
