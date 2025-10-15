import React from "react";
import styled from "styled-components";

const ControlsWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 5vw; /* distance from right edge */
  transform: translateY(-50%); /* vertically centered */
  display: grid;
  grid-template-areas:
    ". up ."
    "left down right";
  gap: 8px;
  z-index: 1000;

  /* --- Large screen (desktop) --- */
  @media (min-width: 1025px) {
    right: 5vw; /* Adjust this if it's too close/far */
    bottom: auto;
    transform: translateY(-50%);
  }

  /* --- Tablet --- */
  @media (max-width: 1024px) {
    right: 3vw;
    top: auto;
    bottom: 4vh;
    transform: none;
  }

  /* --- Mobile --- */
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    bottom: 3vh;
    gap: 5px;
  }

  /* --- Small mobile --- */
  @media (max-width: 480px) {
    bottom: 2.5vh;
    gap: 4px;
  }
`;

const ControlButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 10px;
  background: rgba(50, 50, 50, 0.85);
  color: white;
  border: 2px solid #777;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  touch-action: manipulation;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  transition: all 0.1s ease-in-out;

  &:active {
    background: rgba(80, 80, 80, 0.9);
    transform: scale(0.95);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    font-size: 0.9rem;
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 0.8rem;
  }

  /* Ultra-small */
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
    font-size: 0.75rem;
  }
`;

const TouchControls = ({ onMoveLeft, onMoveRight, onRotate, onDrop }) => (
  <ControlsWrapper>
    <ControlButton style={{ gridArea: "up" }} onClick={onRotate}>
      ⟳
    </ControlButton>
    <ControlButton style={{ gridArea: "left" }} onClick={onMoveLeft}>
      ←
    </ControlButton>
    <ControlButton style={{ gridArea: "down" }} onClick={onDrop}>
      ↓
    </ControlButton>
    <ControlButton style={{ gridArea: "right" }} onClick={onMoveRight}>
      →
    </ControlButton>
  </ControlsWrapper>
);

export default TouchControls;
