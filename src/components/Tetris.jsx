import React, { useState, useEffect } from "react";
import { createStage, checkCollision } from "../gamHelper";
import { StyledTetrisWrapper, StyledTetris } from "../styles/StyledTetris";
import { useGameStatus } from "../hooks/useGameStatus";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null); 
  const [gameOver, setGameOver] = useState(false);
  const [softDrop, setSoftDrop] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem("highScore")) || 0
  );

  // Update high score if needed
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [score, highScore]);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => {
        const newLevel = prev + 1;
        setDropTime(1000 / (newLevel + 1) + 200);
        return newLevel;
      });
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setSoftDrop(true);
    drop();
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver && keyCode === 40) {
      setSoftDrop(false);
      setDropTime(1000 / (level + 1) + 200);
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) movePlayer(-1);
      else if (keyCode === 39) movePlayer(1);
      else if (keyCode === 40) dropPlayer();
      else if (keyCode === 38) playerRotate(stage, 1);
    }
  };

  // Start or restart game: resets everything including score, rows, level
  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(1000);
    setRows(0);
    setLevel(0);
    setSoftDrop(false);
  };

  // Reset only the current game (not high score)
  const resetGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(null);  // Tetris will not auto-drop until user starts
    setRows(0);
    setLevel(0);
    setSoftDrop(false);
  };

  useInterval(() => {
    drop();
  }, softDrop ? 50 : dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      autoFocus
      onKeyDown={move}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`High Score: ${highScore}`} />
            </div>
          )}
          <StartButton callBack={startGame}>Start Game</StartButton>
          <StartButton callBack={resetGame}>Reset Game</StartButton>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;