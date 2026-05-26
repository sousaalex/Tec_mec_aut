import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import type { Question } from '../data/content';

interface QuizProps {
  questions: Question[];
}

export function Quiz({ questions }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<{ questionIndex: number; correct: boolean }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.answer;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnswers([...answers, { questionIndex: currentIndex, correct: index === currentQuestion.answer }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setIsFinished(false);
  };

  const correctCount = answers.filter(a => a.correct).length;
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

  if (isFinished) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    return (
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h3 className="text-3xl font-bold mb-4">Quiz Completo!</h3>
          <div className="text-5xl font-bold mb-2 text-blue-400">
            {correctCount}/{questions.length}
          </div>
          <p className="text-slate-400 mb-8">{percentage}% de acertos</p>
          
          <div className="space-y-3">
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors"
            >
              <RotateCcw size={20} />
              Tentar Novamente
            </button>
          </div>
          
          <div className="mt-8 text-left space-y-2">
            <h4 className="font-semibold mb-4">Resumo:</h4>
            {answers.map((answer, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                {answer.correct ? (
                  <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                ) : (
                  <XCircle className="text-red-400 shrink-0" size={20} />
                )}
                <span className="text-sm truncate">Questão {idx + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>Questão {currentIndex + 1} de {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3">
            {currentQuestion.difficulty && (
              <span className={`shrink-0 px-2 py-1 rounded text-xs font-semibold ${
                currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {currentQuestion.difficulty === 'easy' ? 'Fácil' : 
                 currentQuestion.difficulty === 'medium' ? 'Médio' : 'Difícil'}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-medium leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.answer;
              
              let buttonClass = 'p-4 rounded-xl text-left transition-all border-2 ';
              
              if (!isAnswered) {
                buttonClass += 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20';
              } else if (isCorrectAnswer) {
                buttonClass += 'bg-green-500/20 border-green-500';
              } else if (isSelected && !isCorrectAnswer) {
                buttonClass += 'bg-red-500/20 border-red-500';
              } else {
                buttonClass += 'bg-white/5 border-white/10 opacity-50';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-semibold shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {isAnswered && isCorrectAnswer && (
                      <CheckCircle2 className="ml-auto text-green-400 shrink-0" size={20} />
                    )}
                    {isAnswered && isSelected && !isCorrectAnswer && (
                      <XCircle className="ml-auto text-red-400 shrink-0" size={20} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-5 rounded-xl ${
                  isCorrect ? 'bg-green-500/10 border border-green-500/30' : 'bg-blue-500/10 border border-blue-500/30'
                }`}
              >
                <div className="flex gap-3">
                  <AlertCircle className={`shrink-0 ${isCorrect ? 'text-green-400' : 'text-blue-400'}`} size={22} />
                  <div>
                    <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-400' : 'text-blue-400'}`}>
                      {isCorrect ? 'Correto!' : 'Resposta incorreta'}
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {isAnswered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors ml-auto"
            >
              {currentIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultados'}
              <ArrowRight size={20} />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
