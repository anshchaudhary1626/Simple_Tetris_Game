import React from "react";
import { StyledStage } from "../styles/StyledStage";
import Cell from "./Cell";

const Stage = ({ stage }) => {
  if (!stage || stage.length === 0) return null; // safety check

  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row, y) =>
        row.map((cell, x) => (
          <Cell key={`${x}-${y}`} type={String(cell[0])} /> // convert to string
        ))
      )}
    </StyledStage>
  );
};

export default Stage;