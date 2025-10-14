import styled from 'styled-components';

export const StyledStartButton = styled.div`
  box-sizing: border-box; 
  margin: 10px 0; 
  padding: 20px; 
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none; 
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif; 
  font-size: 1rem; 
  text-align: center;
  outline: none;
  cursor: pointer; 
  transition: all 0.2s ease;

  &:hover {
    background: #555; 
    transform: scale(1.05); 
  }
`;