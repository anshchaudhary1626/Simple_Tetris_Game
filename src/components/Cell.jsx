import React from "react";
import { StyledCell } from "../styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  // Make sure type exists in TETROMINOS, fallback to '0' (empty)
  const tetromino = TETROMINOS[type] || TETROMINOS['0'];
  return <StyledCell type={type} color={tetromino.color} />;
};

export default React.memo(Cell);