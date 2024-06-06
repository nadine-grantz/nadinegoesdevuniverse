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

export default function ToggleButtonDarkMode({ handleChange, isChecked }) {
  return (
    <ToggleContainer>
      <ToggleButton
        type="checkbox"
        id="check"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </ToggleContainer>
  );
}
