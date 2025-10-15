import styled from "styled-components";
import bgImage from "../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  max-width: 900px;
  width: 100%;
  box-sizing: border-box;

  aside {
    width: 100%;
    max-width: 200px;
    padding: 0 10px;
  }

  /* Tablet layout: move aside to right side neatly */
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

    aside {
      max-width: 180px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 10px;
      text-align: center;
    }
  }

  /* Mobile layout */
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 8px;

    aside {
      max-width: 160px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 8px;
    }
  }
`;