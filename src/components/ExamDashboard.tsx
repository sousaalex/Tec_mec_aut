import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Clock, 
  Target, 
  BookOpen, 
  History,
  Play,
  ChevronRight,
  Trophy,
  BarChart3,
  Zap,
  HelpCircle
} from 'lucide-react';
import { ExamGenerator, type ExamConfig } from './ExamGenerator';
import { ExamSession } from './ExamSession';
import { ExamResults } from './ExamResults';
import type { AssessmentQuestion } from '../data/questions_full';
import type { ExamAnswer } from './ExamSession';

interface ExamHistoryItem {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  modules: string[];
}

export function ExamDashboard() {
  const [view, setView] = useState<'dashboard' | 'generator' | 'session' | 'results'>('dashboard');
  const [examQuestions, setExamQuestions] = useState<AssessmentQuestion[]>([]);
  const [examConfig, setExamConfig] = useState<ExamConfig | null>(null);
  const [examAnswers, setExamAnswers] = useState<ExamAnswer[]>([]);
  const [examHistory, setExamHistory] = useState<ExamHistoryItem[]>([
    // Dados de exemplo - em produção viriam de localStorage
    {
      id: '1',
      date: '2026-01-20T14:30:00',
      score: 75,
      totalQuestions: 20,
      correctAnswers: 15,
      timeSpent: 1200,
      modules: ['corte', 'conformacao']
    },
    {
      id: '2',
      date: '2026-01-18T10:15:00',
      score: 82,
      totalQuestions: 25,
      correctAnswers: 20,
      timeSpent: 1800,
      modules: ['fundicao', 'soldadura']
    }
  ]);

  const handleStartExam = (questions: AssessmentQuestion[], config: ExamConfig) => {
    setExamQuestions(questions);
    setExamConfig(config);
    setView('session');
  };

  const handleFinishExam = (answers: ExamAnswer[]) => {
    setExamAnswers(answers);
    
    // Calcular resultado
    const correctCount = answers.filter((a, i) => {
      const q = examQuestions[i];
      if (q.type === 'mcq') {
        return a.selectedOption === (q as any).answer;
      }
      return false;
    }).length;
    
    const score = Math.round((correctCount / examQuestions.length) * 100);
    const timeSpent = answers.reduce((acc, a) => acc + a.timeSpent, 0);
    
    // Adicionar ao histórico
    const newHistoryItem: ExamHistoryItem = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score,
      totalQuestions: examQuestions.length,
      correctAnswers: correctCount,
      timeSpent,
      modules: examConfig?.modules || []
    };
    
    setExamHistory(prev => [newHistoryItem, ...prev]);
    setView('results');
  };

  const handleRestart = () => {
    setExamQuestions([]);
    setExamAnswers([]);
    setExamConfig(null);
    setView('generator');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  const averageScore = examHistory.length > 0
    ? Math.round(examHistory.reduce((acc, h) => acc + h.score, 0) / examHistory.length)
    : 0;

  const totalExams = examHistory.length;
  const totalQuestions = examHistory.reduce((acc, h) => acc + h.totalQuestions, 0);
  const totalTime = examHistory.reduce((acc, h) => acc + h.timeSpent, 0);

  // Renderizar diferentes views
  if (view === 'generator') {
    return (
      <div className="min-h-screen bg-slate-900 py-8 px-4">
        <ExamGenerator 
          onStartExam={handleStartExam}
          onClose={() => setView('dashboard')}
        />
      </div>
    );
  }

  if (view === 'session' && examConfig) {
    return (
      <ExamSession
        questions={examQuestions}
        config={examConfig}
        onFinish={handleFinishExam}
        onCancel={() => setView('dashboard')}
      />
    );
  }

  if (view === 'results' && examConfig) {
    return (
      <ExamResults
        questions={examQuestions}
        answers={examAnswers}
        onRestart={handleRestart}
        onBackToDashboard={() => setView('dashboard')}
      />
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Exames de Tecnologia Mecânica</h1>
              <p className="text-slate-400">Teste os seus conhecimentos com exames personalizados</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <button
            onClick={() => setView('generator')}
            className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-left text-white hover:shadow-2xl transition-all"
          >
            <div className="relative z-10">
              <div className="p-3 bg-white/20 w-fit rounded-xl mb-4">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Iniciar Exame</h3>
              <p className="text-blue-100 text-sm mb-4">Configure e comece um novo exame personalizado</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Começar <ChevronRight size={16} />
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
          </button>

          <div className="bg-slate-800 rounded-2xl p-6 text-white">
            <div className="p-3 bg-purple-500/20 w-fit rounded-xl mb-4">
              <Trophy size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Média Geral</h3>
            <p className="text-slate-400 text-sm mb-4">Desempenho em todos os exames</p>
            <div className="text-3xl font-bold text-purple-400">
              {averageScore}%
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-white">
            <div className="p-3 bg-green-500/20 w-fit rounded-xl mb-4">
              <BarChart3 size={24} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Estatísticas</h3>
            <p className="text-slate-400 text-sm mb-4">Total de exames realizados</p>
            <div className="text-3xl font-bold text-green-400">
              {totalExams}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-slate-800 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <HelpCircle size={18} />
              <span className="text-sm">Questões</span>
            </div>
            <div className="text-2xl font-bold">{totalQuestions}</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Clock size={18} />
              <span className="text-sm">Tempo Total</span>
            </div>
            <div className="text-2xl font-bold">{formatTime(totalTime)}</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Target size={18} />
              <span className="text-sm">Precisão</span>
            </div>
            <div className="text-2xl font-bold">
              {totalQuestions > 0 
                ? Math.round((examHistory.reduce((acc, h) => acc + h.correctAnswers, 0) / totalQuestions) * 100)
                : 0}%
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <Zap size={18} />
              <span className="text-sm">Sequência</span>
            </div>
            <div className="text-2xl font-bold">{totalExams > 0 ? Math.min(totalExams, 5) : 0} 🔥</div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Exams */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <History size={20} className="text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Exames Recentes</h2>
            </div>

            {examHistory.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <History size={48} className="mx-auto mb-4 opacity-50" />
                <p>Ainda não realizou nenhum exame</p>
                <button
                  onClick={() => setView('generator')}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors"
                >
                  Começar primeiro exame
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {examHistory.slice(0, 5).map((exam, index) => (
                  <motion.div
                    key={exam.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${
                        exam.score >= 70 ? 'bg-green-500/20 text-green-400' :
                        exam.score >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {exam.score}%
                      </div>
                      <div>
                        <p className="font-medium text-white">
                          {new Date(exam.date).toLocaleDateString('pt-PT')}
                        </p>
                        <p className="text-sm text-slate-400">
                          {exam.correctAnswers}/{exam.totalQuestions} corretas • {formatTime(exam.timeSpent)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {exam.modules.map(m => (
                        <div 
                          key={m}
                          className="w-2 h-2 rounded-full bg-blue-500"
                          title={m}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Tips & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <BookOpen size={20} className="text-yellow-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Dicas para Exames</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 rounded-xl">
                <h4 className="font-semibold text-white mb-2">📚 Preparação</h4>
                <p className="text-sm text-slate-400">
                  Revise os flashcards e vídeos antes de iniciar o exame. 
                  A prática regular melhora a retenção.
                </p>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-xl">
                <h4 className="font-semibold text-white mb-2">⏱️ Gestão do Tempo</h4>
                <p className="text-sm text-slate-400">
                  No modo exame, gerencie bem o tempo. Questões difíceis 
                  podem ser marcadas para revisão posterior.
                </p>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-xl">
                <h4 className="font-semibold text-white mb-2">🎯 Tipos de Questões</h4>
                <p className="text-sm text-slate-400">
                  Existem 5 tipos: Escolha Múltipla, Desenvolvimento, 
                  Cálculo, Comparação e Análise. Pratique todos os tipos.
                </p>
              </div>

              <div className="p-4 bg-slate-700/50 rounded-xl">
                <h4 className="font-semibold text-white mb-2">📊 Análise de Resultados</h4>
                <p className="text-sm text-slate-400">
                  Após cada exame, reveja as questões incorretas. 
                  A correção detalhada ajuda a identificar pontos fracos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
