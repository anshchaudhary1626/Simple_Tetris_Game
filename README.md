# Simple Tetris Game

A classic **Tetris game** built with **React**, **Vite**, and **Styled Components**.  
Supports keyboard controls, scoring, level progression, and high score tracking (per device using `localStorage`).

---

## 🎮 Features

- Move tetrominoes **left/right** using arrow keys.  
- **Rotate** tetrominoes with the **up arrow**.  
- **Soft drop** with down arrow.  
- **Auto-drop** speed increases with level.  
- **Score, Rows, Level** display.  
- **High Score** tracked in `localStorage`.  
- **Start Game** and **Reset Game** buttons.  
- Responsive game layout with background image.

---

## 🛠 Tech Stack

- **React 18**  
- **Vite** (fast development and build)  
- **Styled Components** for styling  
- Custom React hooks: `usePlayer`, `useStage`, `useInterval`, `useGameStatus`  

---
## 📂 Project Structure
TETRIS-APP
│
├── node_modules/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Cell.jsx
│   │   ├── Display.jsx
│   │   ├── Stage.jsx
│   │   ├── StartButton.jsx
│   │   └── Tetris.jsx
│   │
│   ├── font/
│   │   └── Pixel-LCD-7.woff
│   │
│   ├── hooks/
│   │   ├── useGameStatus.jsx
│   │   ├── useInterval.jsx
│   │   ├── usePlayer.jsx
│   │   └── useStage.jsx
│   │
│   ├── img/
│   │   └── bg.png
│   │
│   ├── styles/
│   │   ├── StyledCell.jsx
│   │   ├── StyledDisplay.jsx
│   │   ├── StyledStage.jsx
│   │   ├── StyledStartButton.jsx
│   │   └── StyledTetris.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── gamHelper.jsx
│   ├── index.css
│   ├── main.jsx
│   └── tetrominos.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
└── package.json

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/anshchaudhary1626/Simple_Tetris_Game.git
cd Simple_Tetris_Game

2. Install dependencies:
npm install

3.	Start the development server:
npm run dev

4.	Open your browser: http://localhost:5173