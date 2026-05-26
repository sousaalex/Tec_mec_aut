import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowLeft, 
  RotateCcw,
  FileText,
  BarChart3,
  Target,
  Calculator,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react';
import type { AssessmentQuestion, QuestionMCQ, QuestionCalc } from '../data/questions_full';
import type { ExamAnswer } from './ExamSession';
import type { ExamConfig } from './ExamGenerator';

interface ExamResultsProps {
  questions: AssessmentQuestion[];
  answers: ExamAnswer[];
  config: ExamConfig;
  onRestart: () => void;
  onBackToDashboard: () => void;
}

interface QuestionResult {
  question: AssessmentQuestion;
  answer: ExamAnswer;
  isCorrect: boolean;
  score: number;
  maxScore: number;
}

export function ExamResults({ questions, answers, config, onRestart, onBackToDashboard }: ExamResultsProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'correct' | 'incorrect' | 'flagged'>('all');

  const results = useMemo(() => {
    return questions.map((q, i) => {
      const answer = answers[i];
      let isCorrect = false;
      let score = 0;
      let maxScore = 10; // Default

      if (q.type === 'mcq') {
        const mcq = q as QuestionMCQ;
        maxScore = 10;
        isCorrect = answer.selectedOption === mcq.answer;
        score = isCorrect ? maxScore : 0;
      } else if (q.type === 'calculation') {
        const calc = q as QuestionCalc;
        maxScore = calc.maxScore || 15;
        // For calculations, we'd need more sophisticated grading
        score = answer.textAnswer?.trim() ? maxScore * 0.5 : 0; // Placeholder
        isCorrect = false; // Manual review needed
      } else {
        maxScore = (q as any).maxScore || 20;
        score = answer.textAnswer?.trim() ? maxScore * 0.5 : 0; // Placeholder
        isCorrect = false; // Manual review needed
      }

      return { question: q, answer, isCorrect, score, maxScore };
    });
  }, [questions, answers]);

  const stats = useMemo(() => {
    const mcqResults = results.filter(r => r.question.type === 'mcq');
    const correctMCQ = mcqResults.filter(r => r.isCorrect).length;
    const totalMCQ = mcqResults.length;
    const mcqScore = mcqResults.reduce((acc, r) => acc + r.score, 0);
    const mcqMax = mcqResults.reduce((acc, r) => acc + r.maxScore, 0);
    
    const totalScore = results.reduce((acc, r) => acc + r.score, 0);
    const totalMax = results.reduce((acc, r) => acc + r.maxScore, 0);
    const percentage = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    
    const flaggedCount = answers.filter(a => a.flagged).length;
    const totalTime = answers.reduce((acc, a) => acc + a.timeSpent, 0);
    
    return {
      correctMCQ,
      totalMCQ,
      mcqPercentage: totalMCQ > 0 ? Math.round((correctMCQ / totalMCQ) * 100) : 0,
      totalScore,
      totalMax,
      percentage,
      flaggedCount,
      totalTime,
      answeredCount: answers.filter(a => a.selectedOption !== undefined || (a.textAnswer && a.textAnswer.trim() !== '')).length
    };
  }, [results, answers]);

  const filteredResults = useMemo(() => {
    switch (activeFilter) {
      case 'correct':
        return results.filter(r => r.isCorrect);
      case 'incorrect':
        return results.filter(r => !r.isCorrect && r.question.type === 'mcq');
      case 'flagged':
        return results.filter(r => r.answer.flagged);
      default:
        return results;
    }
  }, [results, activeFilter]);

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { label: 'Excelente', emoji: '🏆', color: 'text-green-400' };
    if (percentage >= 80) return { label: 'Muito Bom', emoji: '🌟', color: 'text-green-400' };
    if (percentage >= 70) return { label: 'Bom', emoji: '👍', color: 'text-blue-400' };
    if (percentage >= 60) return { label: 'Suficiente', emoji: '✅', color: 'text-yellow-400' };
    if (percentage >= 50) return { label: 'Insuficiente', emoji: '⚠️', color: 'text-orange-400' };
    return { label: 'Reprovado', emoji: '❌', color: 'text-red-400' };
  };

  const grade = getGrade(stats.percentage);

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl p-8 text-white mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar ao Dashboard
            </button>
            <button
              onClick={onRestart}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <RotateCcw size={18} />
              Novo Exame
            </button>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-6xl mb-4"
            >
              {grade.emoji}
            </motion.div>
            
            <h1 className="text-3xl font-bold mb-2">Resultados do Exame</h1>
            <p className={`text-xl ${grade.color} font-semibold`}>{grade.label}</p>
          </div>

          {/* Score Circle */}
          <div className="flex justify-center my-8">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  className="text-slate-700"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="transparent"
                  strokeLinecap="round"
                  className={stats.percentage >= 60 ? 'text-green-500' : 'text-red-500'}
                  initial={{ strokeDasharray: '0 351.86' }}
                  animate={{ strokeDasharray: `${(stats.percentage / 100) * 351.86} 351.86` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{stats.percentage}%</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold">{stats.correctMCQ}/{stats.totalMCQ}</div>
              <div className="text-sm text-slate-400">MCQ Corretas</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <HelpCircle className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">{stats.answeredCount}/{questions.length}</div>
              <div className="text-sm text-slate-400">Respondidas</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
              <div className="text-2xl font-bold">{stats.flaggedCount}</div>
              <div className="text-sm text-slate-400">Marcadas</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold">{formatTime(stats.totalTime)}</div>
              <div className="text-sm text-slate-400">Tempo Total</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todas', count: results.length },
              { id: 'correct', label: 'Corretas', count: results.filter(r => r.isCorrect).length },
              { id: 'incorrect', label: 'Incorretas', count: results.filter(r => !r.isCorrect && r.question.type === 'mcq').length },
              { id: 'flagged', label: 'Marcadas', count: results.filter(r => r.answer.flagged).length },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id ? 'bg-white/20' : 'bg-slate-200'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Question Review */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="text-blue-600" />
            Revisão das Questões
          </h2>

          {filteredResults.map((result, index) => {
            const isExpanded = expandedQuestion === result.question.id;
            const Icon = getQuestionTypeIcon(result.question.type);
            
            return (
              <motion.div
                key={result.question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden ${
                  result.isCorrect ? 'border-green-200' : result.question.type === 'mcq' ? 'border-red-200' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => setExpandedQuestion(isExpanded ? null : result.question.id)}
                  className="w-full p-5 flex items-start gap-4 text-left"
                >
                  <div className={`p-2 rounded-lg shrink-0 ${
                    result.isCorrect ? 'bg-green-100 text-green-600' : 
                    result.question.type === 'mcq' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {result.isCorrect ? <CheckCircle2 size={20} /> : 
                     result.question.type === 'mcq' ? <XCircle size={20} /> : <Icon size={20} />}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-slate-400">Questão {result.answer.questionIndex + 1}</span>
                      {result.answer.flagged && (
                        <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                          Marcada
                        </span>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        result.question.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                        result.question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {result.question.difficulty === 'easy' ? 'Fácil' : 
                         result.question.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                      </span>
                    </div>
                    <p className="font-medium text-slate-800 line-clamp-2">
                      {result.question.type === 'analysis' ? (result.question as any).scenario : result.question.question}
                    </p>
                  </div>

                  {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : 
                   <ChevronDown size={20} className="text-slate-400" />}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-slate-100">
                    {/* Question Details */}
                    <div className="pt-4 space-y-4">
                      {result.question.type === 'mcq' && (
                        <>
                          <div className="space-y-2">
                            {(result.question as QuestionMCQ).options.map((option, i) => {
                              const isSelected = result.answer.selectedOption === i;
                              const isCorrect = i === (result.question as QuestionMCQ).answer;
                              
                              return (
                                <div
                                  key={i}
                                  className={`p-3 rounded-lg ${
                                    isCorrect ? 'bg-green-100 border border-green-300' :
                                    isSelected ? 'bg-red-100 border border-red-300' :
                                    'bg-slate-50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                                      isCorrect ? 'bg-green-500 text-white' :
                                      isSelected ? 'bg-red-500 text-white' :
                                      'bg-slate-300 text-slate-600'
                                    }`}>
                                      {String.fromCharCode(65 + i)}
                                    </span>
                                    <span className={isCorrect ? 'text-green-800 font-medium' : isSelected ? 'text-red-800' : 'text-slate-600'}>
                                      {option}
                                    </span>
                                    {isCorrect && <CheckCircle2 size={16} className="text-green-600 ml-auto" />}
                                    {isSelected && !isCorrect && <XCircle size={16} className="text-red-600 ml-auto" />}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm font-medium text-blue-800 mb-1">Explicação:</p>
                            <p className="text-sm text-blue-700">{(result.question as QuestionMCQ).explanation}</p>
                          </div>
                        </>
                      )}

                      {result.question.type === 'calculation' && (
                        <>
                          {(result.question as QuestionCalc).data && (
                            <div className="p-3 bg-slate-50 rounded-lg font-mono text-sm">
                              <p className="text-slate-500 mb-1">Dados:</p>
                              <pre className="text-slate-700 whitespace-pre-wrap">{(result.question as QuestionCalc).data}</pre>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 rounded-lg">
                              <p className="text-xs text-slate-500 mb-1">A sua resposta:</p>
                              <p className="font-medium">{result.answer.textAnswer || 'Não respondida'}</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <p className="text-xs text-green-600 mb-1">Solução correta:</p>
                              <p className="font-medium text-green-800">{(result.question as QuestionCalc).solution}</p>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm font-medium text-blue-800 mb-2">Passos:</p>
                            <ol className="space-y-1">
                              {(result.question as QuestionCalc).steps.map((step, i) => (
                                <li key={i} className="text-sm text-blue-700 flex gap-2">
                                  <span className="font-semibold">{i + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </>
                      )}

                      {(result.question.type === 'development' || result.question.type === 'comparison' || result.question.type === 'analysis') && (
                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <p className="text-sm font-medium text-yellow-800 mb-2">
                            <BookOpen size={16} className="inline mr-1" />
                            Questão de resposta aberta
                          </p>
                          <p className="text-sm text-yellow-700">
                            Esta questão requer correção manual. A sua resposta foi registada para revisão.
                          </p>
                          {result.answer.textAnswer && (
                            <div className="mt-3 p-3 bg-white rounded border border-yellow-200">
                              <p className="text-xs text-slate-500 mb-1">A sua resposta:</p>
                              <p className="text-sm text-slate-700 whitespace-pre-wrap">{result.answer.textAnswer}</p>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-slate-500 pt-2 border-t border-slate-100">
                        <span>Tempo gasto: {formatTime(result.answer.timeSpent)}</span>
                        <span>Pontuação: {result.score}/{result.maxScore}</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onBackToDashboard}
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar ao Dashboard
          </button>
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
          >
            <RotateCcw size={20} />
            Novo Exame
          </button>
        </div>
      </div>
    </div>
  );
}
