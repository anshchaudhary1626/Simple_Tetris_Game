import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 18px 0;
  padding: 18px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: center;

  /* 📱 Tablet screens */
  @media (max-width: 1024px) {
    padding: 14px;
    font-size: 0.75rem;
    border: 3px solid #333;
    border-radius: 16px;
    margin-bottom: 14px;
  }

  /* 📱 Mobile screens */
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.7rem;
    border: 2.5px solid #333;
    border-radius: 14px;
    margin-bottom: 10px;
  }

  /* 📲 Small mobile screens */
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.65rem;
    border: 2px solid #333;
    border-radius: 12px;
    margin-bottom: 8px;
  }
`;
