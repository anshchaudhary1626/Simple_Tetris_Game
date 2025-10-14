import React from "react";
import { StyledStartButton } from "../styles/StyledStartButton";

const StartButton = ({ callBack, children }) => (
    <StyledStartButton onClick={callBack}>{children}</StyledStartButton>
);

export default StartButton;