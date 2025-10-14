export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

  export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
      for (let x = 0; x < player.tetromino[y].length; x += 1) {
        // 1. Check that we're on an actual tetromino cell
        if (player.tetromino[y][x] !== 0) {
          if (
            // 2. Check boundaries and collisions
            !stage[y + player.pos.y + moveY] || // past bottom
            !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || // past sides
            stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear' // not clear
          ) {
            return true;
          }
        }
      }
    }
    return false; // return false when no collision found
  };