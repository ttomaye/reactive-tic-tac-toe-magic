
import Cell from "./Cell";
import { motion } from "framer-motion";

interface GameBoardProps {
  board: Array<string | null>;
  onCellClick: (index: number) => void;
  winningCombination: number[];
  gameOver: boolean;
}

const GameBoard = ({ 
  board, 
  onCellClick, 
  winningCombination, 
  gameOver 
}: GameBoardProps) => {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          index={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinningCell={winningCombination.includes(index)}
          disabled={cell !== null || gameOver}
        />
      ))}
    </motion.div>
  );
};

export default GameBoard;
