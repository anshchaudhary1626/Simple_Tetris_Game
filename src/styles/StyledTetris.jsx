import styled from 'styled-components';
import bgImage from "../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;        
  height: 100vh;       
  min-height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically */
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  width: 640px;       /* FIXED width for the Tetris box */
  height: auto;       /* keeps height as needed */
  
  aside {
    width: 200px;     /* fixed sidebar width */
    display: block;
    padding: 0 20px;
  }
`;