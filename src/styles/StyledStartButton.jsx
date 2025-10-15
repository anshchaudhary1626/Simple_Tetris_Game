import styled from 'styled-components';

export const StyledStartButton = styled.div`
  box-sizing: border-box; 
  margin: 10px 0; 
  padding: 18px; 
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
  transition: all 0.25s ease-in-out;

  /* Hover effect */
  &:hover {
    background: #555; 
    transform: scale(1.05); 
  }

  /* Click feedback */
  &:active {
    transform: scale(0.98);
    background: #777;
  }

  /* Tablet screens */
  @media (max-width: 1024px) {
    padding: 14px;
    font-size: 0.9rem;
    border-radius: 16px;
  }

  /* Mobile screens */
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.8rem;
    border-radius: 14px;
    margin: 6px 0;
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.75rem;
    border-radius: 12px;
    margin: 5px 0;
  }
`;