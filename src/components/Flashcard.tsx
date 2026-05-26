import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw } from 'lucide-react';
import type { Flashcard as FlashcardType } from '../data/content';

interface FlashcardProps {
  flashcard: FlashcardType;
  index: number;
  total: number;
}

export function Flashcard({ flashcard, index, total }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center mb-4">
        <span className="text-sm text-slate-400 font-medium">
          Flashcard {index + 1} de {total}
        </span>
      </div>
      
      <div 
        className="relative h-64 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
            >
              <p className="text-xl font-medium text-center leading-relaxed">
                {flashcard.front}
              </p>
              <div className="absolute bottom-4 flex items-center gap-2 text-blue-200 text-sm">
                <RotateCw size={16} />
                <span>Clica para virar</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
            >
              <p className="text-lg text-center leading-relaxed whitespace-pre-line">
                {flashcard.back}
              </p>
              <div className="absolute bottom-4 flex items-center gap-2 text-emerald-200 text-sm">
                <RotateCw size={16} />
                <span>Clica para voltar</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
