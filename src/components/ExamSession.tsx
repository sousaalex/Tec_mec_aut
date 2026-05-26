import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flag,
  AlertCircle,
  HelpCircle,
  FileText,
  Calculator,
  BarChart3,
  Target
} from 'lucide-react';
import type { AssessmentQuestion } from '../data/questions_full';
import type { ExamConfig } from './ExamGenerator';

interface ExamSessionProps {
  questions: AssessmentQuestion[];
  config: ExamConfig;
  onFinish: (answers: ExamAnswer[]) => void;
  onCancel: () => void;
}

export interface ExamAnswer {
  questionId: string;
  questionIndex: number;
  selectedOption?: number;
  textAnswer?: string;
  flagged: boolean;
  timeSpent: number;
}

export function ExamSession({ questions, config, onFinish, onCancel }: ExamSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>(
    questions.map((q, i) => ({
      questionId: q.id,
      questionIndex: i,
      flagged: false,
      timeSpent: 0,
    }))
  );
  const [timeRemaining, setTimeRemaining] = useState(config.timeLimit * 60);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [startTime] = useState(Date.now());

  // Timer
  useEffect(() => {
    if (config.timeLimit === 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [config.timeLimit]);

  // Track time spent on current question
  useEffect(() => {
    const interval = setInterval(() => {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentIndex] = {
          ...newAnswers[currentIndex],
          timeSpent: newAnswers[currentIndex].timeSpent + 1
        };
        return newAnswers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];

  const handleAnswerMCQ = (optionIndex: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = {
        ...newAnswers[currentIndex],
        selectedOption: optionIndex
      };
      return newAnswers;
    });
  };

  const handleTextAnswer = (text: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = {
        ...newAnswers[currentIndex],
        textAnswer: text
      };
      return newAnswers;
    });
  };

  const toggleFlag = () => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = {
        ...newAnswers[currentIndex],
        flagged: !newAnswers[currentIndex].flagged
      };
      return newAnswers;
    });
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  const handleFinish = useCallback(() => {
    onFinish(answers);
  }, [answers, onFinish]);

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case 'mcq': return HelpCircle;
      case 'development': return FileText;
      case 'calculation': return Calculator;
      case 'comparison': return BarChart3;
      case 'analysis': return Target;
      default: return HelpCircle;
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'mcq': return 'Escolha Múltipla';
      case 'development': return 'Desenvolvimento';
      case 'calculation': return 'Cálculo';
      case 'comparison': return 'Comparação';
      case 'analysis': return 'Análise';
      default: return type;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Fácil';
      case 'medium': return 'Médio';
      case 'hard': return 'Difícil';
      default: return difficulty;
    }
  };

  const answeredCount = answers.filter(a => a.selectedOption !== undefined || (a.textAnswer && a.textAnswer.trim() !== '')).length;
  const flaggedCount = answers.filter(a => a.flagged).length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold">Exame de Tecnologia Mecânica</h1>
              <span className="text-sm text-slate-400">
                Questão {currentIndex + 1} de {questions.length}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Timer */}
              {config.timeLimit > 0 && (
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg ${
                  timeRemaining < 300 ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-slate-700'
                }`}>
                  <Clock size={20} />
                  {formatTime(timeRemaining)}
                </div>
              )}

              <button
                onClick={() => setShowConfirmFinish(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-sm transition-colors"
              >
                Terminar
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl p-4 sticky top-24">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-blue-400" />
                Navegação
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
                <div className="bg-slate-700 rounded-lg p-2">
                  <div className="text-green-400 font-bold">{answeredCount}</div>
                  <div className="text-slate-400">Resp.</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-2">
                  <div className="text-yellow-400 font-bold">{flaggedCount}</div>
                  <div className="text-slate-400">Marc.</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-2">
                  <div className="text-slate-300 font-bold">{questions.length - answeredCount}</div>
                  <div className="text-slate-400">Pend.</div>
                </div>
              </div>

              {/* Question Grid */}
              <div className="grid grid-cols-5 gap-1">
                {questions.map((q, i) => {
                  const answer = answers[i];
                  const isAnswered = answer.selectedOption !== undefined || (answer.textAnswer && answer.textAnswer.trim() !== '');
                  const isFlagged = answer.flagged;
                  const isCurrent = i === currentIndex;

                  return (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(i)}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white'
                          : isAnswered
                          ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                          : isFlagged
                          ? 'bg-yellow-500/30 text-yellow-400 border border-yellow-500/50'
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-500/30 border border-green-500/50" />
                  <span>Respondida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-yellow-500/30 border border-yellow-500/50" />
                  <span>Marcada para revisão</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-600" />
                  <span>Atual</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-2xl p-6 md:p-8"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = getQuestionTypeIcon(currentQuestion.type);
                      return (
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                      );
                    })()}
                    <div>
                      <span className="text-sm text-slate-400">
                        {getQuestionTypeLabel(currentQuestion.type)}
                      </span>
                      <span className={`ml-3 px-2 py-0.5 rounded text-xs border ${getDifficultyColor(currentQuestion.difficulty)}`}>
                        {getDifficultyLabel(currentQuestion.difficulty)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={toggleFlag}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentAnswer.flagged
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                        : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                    }`}
                  >
                    <Flag size={16} />
                    {currentAnswer.flagged ? 'Marcada' : 'Marcar'}
                  </button>
                </div>

                {/* Question Content */}
                <div className="mb-8">
                  <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
                    {currentQuestion.type === 'analysis' 
                      ? (currentQuestion as any).scenario 
                      : currentQuestion.question}
                  </h2>

                  {/* Analysis sub-questions */}
                  {currentQuestion.type === 'analysis' && (
                    <div className="mt-4 space-y-3">
                      {(currentQuestion as any).questions?.map((q: string, i: number) => (
                        <div key={i} className="p-4 bg-slate-700/50 rounded-lg">
                          <span className="text-blue-400 font-medium">{i + 1}.</span> {q}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Calculation data */}
                  {currentQuestion.type === 'calculation' && (currentQuestion as any).data && (
                    <div className="mt-4 p-4 bg-slate-700/50 rounded-lg font-mono text-sm">
                      <div className="text-slate-400 mb-2">Dados:</div>
                      <pre className="text-slate-300 whitespace-pre-wrap">{(currentQuestion as any).data}</pre>
                    </div>
                  )}

                  {/* Comparison items */}
                  {currentQuestion.type === 'comparison' && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <div className="text-blue-400 text-sm font-medium mb-1">A</div>
                        <div className="font-medium">{(currentQuestion as any).itemA}</div>
                      </div>
                      <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                        <div className="text-purple-400 text-sm font-medium mb-1">B</div>
                        <div className="font-medium">{(currentQuestion as any).itemB}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Answer Area */}
                <div className="space-y-4">
                  {currentQuestion.type === 'mcq' && (
                    <div className="space-y-3">
                      {(currentQuestion as any).options?.map((option: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerMCQ(index)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            currentAnswer.selectedOption === index
                              ? 'border-blue-500 bg-blue-500/20'
                              : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                              currentAnswer.selectedOption === index
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-600 text-slate-300'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span>{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {(currentQuestion.type === 'development' || 
                    currentQuestion.type === 'calculation' || 
                    currentQuestion.type === 'comparison' || 
                    currentQuestion.type === 'analysis') && (
                    <textarea
                      value={currentAnswer.textAnswer || ''}
                      onChange={(e) => handleTextAnswer(e.target.value)}
                      placeholder="Escreva a sua resposta aqui..."
                      className="w-full h-48 p-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    />
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
                  <button
                    onClick={() => goToQuestion(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:bg-slate-700"
                  >
                    <ChevronLeft size={20} />
                    Anterior
                  </button>

                  <span className="text-slate-400">
                    {currentIndex + 1} / {questions.length}
                  </span>

                  <button
                    onClick={() => goToQuestion(currentIndex + 1)}
                    disabled={currentIndex === questions.length - 1}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Próxima
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Confirm Finish Modal */}
      {showConfirmFinish && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-2xl p-6 max-w-md w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <AlertCircle size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">Terminar Exame?</h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">Total de questões</span>
                <span className="font-medium">{questions.length}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">Respondidas</span>
                <span className="font-medium text-green-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-700">
                <span className="text-slate-400">Por responder</span>
                <span className="font-medium text-yellow-400">{questions.length - answeredCount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-400">Marcadas para revisão</span>
                <span className="font-medium text-blue-400">{flaggedCount}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmFinish(false)}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-medium transition-colors"
              >
                Continuar
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-colors"
              >
                Terminar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
