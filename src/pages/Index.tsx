
import GameContainer from "@/components/GameContainer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-game-bg flex flex-col items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center mb-8">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Tic Tac Toe
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            by Tommy Tomaye
          </motion.p>
        </header>

        <GameContainer />
      </motion.div>
      
      <motion.footer 
        className="mt-8 text-gray-500 text-xs text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Built with React • Play fair and have fun!
      </motion.footer>
    </div>
  );
};

export default Index;
