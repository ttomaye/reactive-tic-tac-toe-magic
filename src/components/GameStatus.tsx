
import { motion } from "framer-motion";

interface GameStatusProps {
  currentPlayer: string;
  winner: string | null;
  isDraw: boolean;
}

const GameStatus = ({ currentPlayer, winner, isDraw }: GameStatusProps) => {
  const getStatusMessage = () => {
    if (winner) return `Player ${winner} wins!`;
    if (isDraw) return "Game ended in a draw!";
    return `Player ${currentPlayer}'s turn`;
  };

  const getStatusStyle = () => {
    if (winner === "X") return "bg-game-x/10 text-game-x";
    if (winner === "O") return "bg-game-o/10 text-game-o";
    if (isDraw) return "bg-gray-100 text-gray-700";
    if (currentPlayer === "X") return "bg-game-x/10 text-game-x";
    return "bg-game-o/10 text-game-o";
  };

  return (
    <motion.div
      className={`text-xl font-medium py-2 px-6 rounded-full text-center ${getStatusStyle()}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      key={getStatusMessage()} // Force animation to re-run when message changes
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 20
      }}
    >
      {getStatusMessage()}
    </motion.div>
  );
};

export default GameStatus;
