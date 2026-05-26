import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Clock, 
  HelpCircle, 
  BookOpen, 
  Target, 
  Calculator,
  FileText,
  BarChart3,
  CheckCircle2,
  X,
  GraduationCap
} from 'lucide-react';
import { allAssessmentQuestions, getQuestionStats } from '../data/questions_index';
import type { AssessmentQuestion } from '../data/questions_full';

export interface ExamConfig {
  modules: string[];
  questionTypes: ('mcq' | 'development' | 'calculation' | 'comparison' | 'analysis')[];
  difficulties: ('easy' | 'medium' | 'hard')[];
  numQuestions: number;
  timeLimit: number; // em minutos
  mode: 'practice' | 'exam';
}

interface ExamGeneratorProps {
  onStartExam: (questions: AssessmentQuestion[], config: ExamConfig) => void;
  onClose: () => void;
}

const MODULES = [
  { id: 'corte', name: 'Corte por Arranque', icon: 'Scissors', color: 'blue' },
  { id: 'conformacao', name: 'Conformação Plástica', icon: 'Zap', color: 'amber' },
  { id: 'fundicao', name: 'Fundição', icon: 'Flame', color: 'orange' },
  { id: 'soldadura', name: 'Soldadura', icon: 'Box', color: 'red' },
];

const QUESTION_TYPES = [
  { id: 'mcq', name: 'Escolha Múltipla', icon: HelpCircle, description: 'Questões com 4 opções' },
  { id: 'development', name: 'Desenvolvimento', icon: FileText, description: 'Respostas dissertativas' },
  { id: 'calculation', name: 'Cálculo', icon: Calculator, description: 'Problemas numéricos' },
  { id: 'comparison', name: 'Comparação', icon: BarChart3, description: 'Comparar conceitos' },
  { id: 'analysis', name: 'Análise', icon: Target, description: 'Casos práticos' },
];

const DIFFICULTIES = [
  { id: 'easy', name: 'Fácil', color: 'bg-green-500', textColor: 'text-green-600' },
  { id: 'medium', name: 'Médio', color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  { id: 'hard', name: 'Difícil', color: 'bg-red-500', textColor: 'text-red-600' },
];

const EXAM_PRESETS = [
  { 
    name: 'Exame Rápido', 
    numQuestions: 10, 
    timeLimit: 15, 
    difficulties: ['easy', 'medium'] as const,
    description: '10 questões em 15 minutos'
  },
  { 
    name: 'Exame Completo', 
    numQuestions: 30, 
    timeLimit: 45, 
    difficulties: ['easy', 'medium', 'hard'] as const,
    description: '30 questões em 45 minutos'
  },
  { 
    name: 'Modo Estudo', 
    numQuestions: 20, 
    timeLimit: 0, 
    difficulties: ['easy', 'medium', 'hard'] as const,
    description: '20 questões sem limite de tempo'
  },
];

export function ExamGenerator({ onStartExam, onClose }: ExamGeneratorProps) {
  const stats = useMemo(() => getQuestionStats(), []);
  
  const [config, setConfig] = useState<ExamConfig>({
    modules: ['corte', 'conformacao', 'fundicao', 'soldadura'],
    questionTypes: ['mcq'],
    difficulties: ['easy', 'medium', 'hard'],
    numQuestions: 20,
    timeLimit: 30,
    mode: 'exam',
  });

  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');

  // Filtrar questões disponíveis com base na configuração
  const availableQuestions = useMemo(() => {
    return allAssessmentQuestions.filter(q => 
      config.modules.includes(q.module) &&
      config.questionTypes.includes(q.type) &&
      config.difficulties.includes(q.difficulty)
    );
  }, [config]);

  const handleStartExam = () => {
    if (availableQuestions.length === 0) {
      alert('Não há questões disponíveis com os critérios selecionados.');
      return;
    }

    // Embaralhar e selecionar questões
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(config.numQuestions, shuffled.length));
    
    onStartExam(selected, config);
  };

  const applyPreset = (preset: typeof EXAM_PRESETS[0]) => {
    setConfig(prev => ({
      ...prev,
      numQuestions: preset.numQuestions,
      timeLimit: preset.timeLimit,
      difficulties: [...preset.difficulties],
      mode: preset.timeLimit === 0 ? 'practice' : 'exam',
    }));
    setActiveTab('custom');
  };

  const toggleModule = (moduleId: string) => {
    setConfig(prev => ({
      ...prev,
      modules: prev.modules.includes(moduleId)
        ? prev.modules.filter(m => m !== moduleId)
        : [...prev.modules, moduleId]
    }));
  };

  const toggleQuestionType = (type: string) => {
    const qType = type as ExamConfig['questionTypes'][0];
    setConfig(prev => ({
      ...prev,
      questionTypes: prev.questionTypes.includes(qType)
        ? prev.questionTypes.filter(t => t !== qType)
        : [...prev.questionTypes, qType]
    }));
  };

  const toggleDifficulty = (diff: string) => {
    const difficulty = diff as ExamConfig['difficulties'][0];
    setConfig(prev => ({
      ...prev,
      difficulties: prev.difficulties.includes(difficulty)
        ? prev.difficulties.filter(d => d !== difficulty)
        : [...prev.difficulties, difficulty]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-xl">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Gerador de Exames</h2>
              <p className="text-slate-400 text-sm">Configure e inicie o seu exame personalizado</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            <BookOpen size={16} className="text-blue-600" />
            <strong>{stats.total}</strong> questões no banco
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-600" />
            <strong>{availableQuestions.length}</strong> disponíveis
          </span>
          <span className="flex items-center gap-2">
            <Target size={16} className="text-purple-600" />
            {config.numQuestions} questões no exame
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('presets')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'presets' 
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Predefinições
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'custom' 
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Configuração Personalizada
        </button>
      </div>

      <div className="p-6 max-h-[60vh] overflow-y-auto">
        {activeTab === 'presets' ? (
          <div className="grid md:grid-cols-3 gap-4">
            {EXAM_PRESETS.map((preset) => (
              <motion.button
                key={preset.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => applyPreset(preset)}
                className="p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
              >
                <h3 className="font-bold text-slate-800 mb-2">{preset.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{preset.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <HelpCircle size={14} />
                    {preset.numQuestions} questões
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {preset.timeLimit === 0 ? 'Sem limite' : `${preset.timeLimit} min`}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Módulos */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <BookOpen size={18} className="text-blue-600" />
                Módulos
              </label>
              <div className="grid grid-cols-2 gap-2">
                {MODULES.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => toggleModule(module.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                      config.modules.includes(module.id)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full bg-${module.color}-500`} />
                    <span className="text-sm font-medium">{module.name}</span>
                    {config.modules.includes(module.id) && (
                      <CheckCircle2 size={16} className="ml-auto text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tipos de Questões */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <HelpCircle size={18} className="text-purple-600" />
                Tipos de Questões
              </label>
              <div className="grid grid-cols-2 gap-2">
                {QUESTION_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleQuestionType(type.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                      config.questionTypes.includes(type.id as any)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <type.icon size={20} className={
                      config.questionTypes.includes(type.id as any) ? 'text-purple-600' : 'text-slate-400'
                    } />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        config.questionTypes.includes(type.id as any) ? 'text-purple-700' : 'text-slate-700'
                      }`}>
                        {type.name}
                      </p>
                      <p className="text-xs text-slate-500">{type.description}</p>
                    </div>
                    {config.questionTypes.includes(type.id as any) && (
                      <CheckCircle2 size={16} className="text-purple-600 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dificuldade */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <Target size={18} className="text-orange-600" />
                Dificuldade
              </label>
              <div className="flex gap-2">
                {DIFFICULTIES.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => toggleDifficulty(diff.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                      config.difficulties.includes(diff.id as any)
                        ? `border-${diff.id === 'easy' ? 'green' : diff.id === 'medium' ? 'yellow' : 'red'}-500 bg-${diff.id === 'easy' ? 'green' : diff.id === 'medium' ? 'yellow' : 'red'}-50`
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${diff.color}`} />
                    <span className="text-sm font-medium">{diff.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Número de Questões e Tempo */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <HelpCircle size={18} className="text-blue-600" />
                  Número de Questões
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={config.numQuestions}
                  onChange={(e) => setConfig(prev => ({ ...prev, numQuestions: parseInt(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-center text-sm font-medium text-slate-600 mt-1">
                  {config.numQuestions} questões
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Clock size={18} className="text-blue-600" />
                  Tempo Limite
                </label>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={config.timeLimit}
                  onChange={(e) => setConfig(prev => ({ 
                    ...prev, 
                    timeLimit: parseInt(e.target.value),
                    mode: parseInt(e.target.value) === 0 ? 'practice' : 'exam'
                  }))}
                  className="w-full"
                />
                <div className="text-center text-sm font-medium text-slate-600 mt-1">
                  {config.timeLimit === 0 ? 'Sem limite' : `${config.timeLimit} minutos`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-6 bg-slate-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            {availableQuestions.length > 0 ? (
              <span>
                <strong className="text-slate-700">{Math.min(config.numQuestions, availableQuestions.length)}</strong> questões serão selecionadas
              </span>
            ) : (
              <span className="text-red-500">Nenhuma questão disponível com estes critérios</span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleStartExam}
              disabled={availableQuestions.length === 0}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-colors"
            >
              <GraduationCap size={20} />
              Iniciar Exame
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
