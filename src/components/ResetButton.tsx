
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface ResetButtonProps {
  onReset: () => void;
  gameOver: boolean;
}

const ResetButton = ({ onReset, gameOver }: ResetButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: gameOver ? 0.5 : 0,
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
    >
      <Button 
        onClick={onReset}
        variant="outline" 
        size="lg"
        className={`font-semibold text-lg px-8 py-6 transition-all ${
          gameOver 
            ? "bg-purple-100 hover:bg-purple-200 animate-pulse-light" 
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <RefreshCw className="mr-2 h-5 w-5" />
        Reset Game
      </Button>
    </motion.div>
  );
};

export default ResetButton;
