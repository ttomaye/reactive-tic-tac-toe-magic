
import { useState, useEffect, useCallback } from "react";
import GameBoard from "./GameBoard";
import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";
import { motion } from "framer-motion";

const GameContainer = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [winningCombination, setWinningCombination] = useState<number[]>([]);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const checkWinner = useCallback(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningCombination([a, b, c]);
        return true;
      }
    }
    return false;
  }, [board]);

  useEffect(() => {
    const hasWinner = checkWinner();

    if (!hasWinner && board.every((cell) => cell !== null)) {
      setIsDraw(true);
    }
  }, [board, checkWinner]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCombination([]);
    setIsDraw(false);
  };

  const gameOver = winner !== null || isDraw;

  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GameStatus
        currentPlayer={currentPlayer}
        winner={winner}
        isDraw={isDraw}
      />

      <GameBoard
        board={board}
        onCellClick={handleCellClick}
        winningCombination={winningCombination}
        gameOver={gameOver}
      />

      <ResetButton onReset={resetGame} gameOver={gameOver} />
    </motion.div>
  );
};

export default GameContainer;
