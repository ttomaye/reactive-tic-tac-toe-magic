
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CellProps {
  value: string | null;
  onClick: () => void;
  isWinningCell: boolean;
  disabled: boolean;
  index: number;
}

const Cell = ({ value, onClick, isWinningCell, disabled, index }: CellProps) => {
  const getSymbolColor = () => {
    if (value === "X") return "text-game-x";
    if (value === "O") return "text-game-o";
    return "";
  };
  
  return (
    <motion.button
      className={cn(
        "aspect-square w-full h-32 sm:h-36 md:h-40 flex items-center justify-center rounded-xl text-5xl sm:text-6xl md:text-7xl font-bold transition-all",
        "border-3 bg-white shadow-lg",
        isWinningCell 
          ? "bg-game-highlight border-game-highlight" 
          : "border-game-border hover:border-gray-300",
        disabled && !value ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        getSymbolColor()
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Cell with ${value}` : "Empty cell"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      whileHover={!disabled && !value ? { scale: 1.05 } : {}}
      whileTap={!disabled && !value ? { scale: 0.95 } : {}}
    >
      {value && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Cell;
