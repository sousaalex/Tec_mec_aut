import { useState, useMemo } from 'react';
import { 
  Scissors, 
  Zap, 
  Flame, 
  Box, 
  ChevronRight, 
  ChevronLeft,
  BookOpen, 
  AlertCircle,
  Ruler,
  Hammer,
  Calculator,
  Eye,
  EyeOff,
  Layout,
  HelpCircle,
  RotateCw,
  GraduationCap,
  Target,
  Sparkles,
  Video,
  Menu,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { studyData, getStudyStats } from './data/content';
import { Quiz } from './components/Quiz';
import { Flashcard } from './components/Flashcard';
import { ExamDashboard } from './components/ExamDashboard';

const IconMap = {
  Scissors,
  Zap,
  Flame,
  Box,
  Ruler,
  Hammer,
};

type ViewMode = 'topic' | 'quiz' | 'flashcards' | 'formulas' | 'exercises' | 'dashboard' | 'exams';

function App() {
  const [activeModuleId, setActiveModuleId] = useState<string>(studyData[0].id);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('topic');
  const [showSolution, setShowSolution] = useState<{ [key: string]: boolean }>({});
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentModule = useMemo(() => studyData.find(m => m.id === activeModuleId)!, [activeModuleId]);
  const currentTopic = currentModule.topics[activeTopicIndex];
  const stats = getStudyStats();

  // Calculate progress
  const topicProgress = ((activeTopicIndex + 1) / currentModule.topics.length) * 100;

  // Filter modules based on search
  const filteredModules = useMemo(() => {
    if (!searchQuery) return studyData;
    return studyData.filter(m => 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const changeModule = (id: string) => {
    setActiveModuleId(id);
    setActiveTopicIndex(0);
    setViewMode('topic');
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextTopic = () => {
    if (activeTopicIndex < currentModule.topics.length - 1) {
      setActiveTopicIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevTopic = () => {
    if (activeTopicIndex > 0) {
      setActiveTopicIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; gradient: string; light: string }> = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-700', light: 'bg-blue-50' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600', gradient: 'from-amber-600 to-amber-700', light: 'bg-amber-50' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-700', light: 'bg-orange-50' },
      red: { bg: 'bg-red-600', text: 'text-red-600', gradient: 'from-red-600 to-red-700', light: 'bg-red-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-700', light: 'bg-purple-50' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-700', light: 'bg-emerald-50' },
      slate: { bg: 'bg-slate-600', text: 'text-slate-600', gradient: 'from-slate-600 to-slate-700', light: 'bg-slate-50' },
    };
    return colors[color] || colors.blue;
  };

  const moduleColors = getColorClasses(currentModule.color);

  // Get all flashcards from current module
  const allFlashcards = useMemo(() => {
    return currentModule.topics.flatMap(t => t.flashcards || []);
  }, [currentModule]);

  // Render Dashboard
  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-[2rem] p-8 md:p-12 text-white text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6"
        >
          <Sparkles size={16} className="text-yellow-400" />
          <span>Tecnologia Mecânica - Plataforma de Estudo</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Domina a Tecnologia Mecânica
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Estuda todos os processos de fabrico de forma interativa com vídeos, quizzes e flashcards.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Layout, value: stats.totalModules, label: 'Módulos' },
            { icon: BookOpen, value: stats.totalTopics, label: 'Tópicos' },
            { icon: HelpCircle, value: stats.totalQuiz, label: 'Questões' },
            { icon: Video, value: stats.totalVideos, label: 'Vídeos' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-4">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* All Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" />
          Todos os Módulos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studyData.map((module, idx) => {
            const Icon = IconMap[module.icon as keyof typeof IconMap];
            const colors = getColorClasses(module.color);
            return (
              <motion.button
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => changeModule(module.id)}
                className={`group p-6 rounded-2xl border-2 border-slate-100 hover:border-transparent hover:shadow-xl transition-all text-left bg-white hover:bg-gradient-to-br ${colors.gradient}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-white">{module.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-white/80 line-clamp-2">
                  {module.summary}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 group-hover:text-white/60">
                  <span>{module.topics.length} tópicos</span>
                  <span>{module.quiz.length} questões</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  // Render Flashcards
  const renderFlashcards = () => {
    if (allFlashcards.length === 0) {
      return (
        <div className="text-center py-16">
          <RotateCw size={48} className="mx-auto mb-4 text-slate-300" />
          <h3 className="text-xl font-semibold text-slate-600">Sem flashcards neste módulo</h3>
          <p className="text-slate-400">Este módulo ainda não tem flashcards disponíveis.</p>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Flashcards de {currentModule.title}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFlashcardIndex(prev => Math.max(0, prev - 1))}
              disabled={activeFlashcardIndex === 0}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveFlashcardIndex(prev => Math.min(allFlashcards.length - 1, prev + 1))}
              disabled={activeFlashcardIndex === allFlashcards.length - 1}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <Flashcard 
          flashcard={allFlashcards[activeFlashcardIndex]} 
          index={activeFlashcardIndex}
          total={allFlashcards.length}
        />
      </div>
    );
  };

  // Render Formulas
  const renderFormulas = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <Calculator className="text-blue-600" />
        Fórmulas de {currentModule.title}
      </h3>
      
      {/* Module-level formulas */}
      {currentModule.formulas && currentModule.formulas.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {currentModule.formulas.map((formula, idx) => (
            <div key={idx} className={`p-6 rounded-2xl ${moduleColors.light} border border-slate-200`}>
              <h4 className="font-semibold text-slate-700 mb-2">{formula.name}</h4>
              <div className="text-2xl font-mono font-bold mb-2">{formula.formula}</div>
              <div className="text-sm text-slate-500">Unidade: {formula.unit}</div>
              {formula.description && (
                <div className="text-sm text-slate-400 mt-2">{formula.description}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Topic-level formulas */}
      {currentModule.topics.map((topic, topicIdx) => 
        topic.formulas && topic.formulas.length > 0 ? (
          <div key={topicIdx} className="space-y-4">
            <h4 className="font-semibold text-slate-700">{topic.title}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {topic.formulas.map((formula, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h5 className="font-medium text-slate-600 mb-2">{formula.name}</h5>
                  <div className="text-2xl font-mono font-bold text-slate-900 mb-2">{formula.formula}</div>
                  <div className="text-sm text-slate-500">Unidade: {formula.unit}</div>
                  {formula.description && (
                    <div className="text-sm text-slate-400 mt-2">{formula.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );

  // Render Exercises
  const renderExercises = () => {
    if (!currentModule.exercises || currentModule.exercises.length === 0) {
      return (
        <div className="text-center py-16">
          <Calculator size={48} className="mx-auto mb-4 text-slate-300" />
          <h3 className="text-xl font-semibold text-slate-600">Sem exercícios neste módulo</h3>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Calculator className="text-blue-600" />
          Exercícios de {currentModule.title}
        </h3>
        <div className="space-y-4">
          {currentModule.exercises.map((ex, idx) => {
            const key = `${activeModuleId}-${idx}`;
            const isOpen = showSolution[key];
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Exercício {idx + 1}</span>
                      <h4 className="font-semibold text-lg mt-1">{ex.question}</h4>
                    </div>
                    <button
                      onClick={() => setShowSolution(prev => ({ ...prev, [key]: !prev[key] }))}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm font-medium shrink-0"
                    >
                      {isOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                      {isOpen ? 'Ocultar' : 'Ver Solução'}
                    </button>
                  </div>
                  <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                    <p className="font-mono text-sm text-slate-600 whitespace-pre-line">{ex.data}</p>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">Resolução</p>
                          <p className="font-medium text-emerald-900">{ex.solution}</p>
                          {ex.steps && (
                            <ol className="mt-3 space-y-1">
                              {ex.steps.map((step, stepIdx) => (
                                <li key={stepIdx} className="text-sm text-emerald-700 flex gap-2">
                                  <span className="font-semibold">{stepIdx + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${moduleColors.bg}`}>
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-slate-800">TecMec</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed md:relative z-30 w-72 h-screen bg-white border-r border-slate-200 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6">
            {/* Logo */}
            <div className="hidden md:flex items-center gap-3 mb-8">
              <div className={`p-2 rounded-xl ${moduleColors.bg}`}>
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <h1 className="font-bold text-xl text-slate-800">TecMec Study</h1>
            </div>

            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Pesquisar módulos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm"
              />
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <div>
                <button
                  onClick={() => { setViewMode('dashboard'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                    viewMode === 'dashboard' 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Layout size={20} />
                  <span className="text-sm">Dashboard</span>
                </button>
                <button
                  onClick={() => { setViewMode('exams'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left mt-1 ${
                    viewMode === 'exams' 
                      ? 'bg-slate-900 text-white font-semibold' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <FileText size={20} />
                  <span className="text-sm">Exames</span>
                </button>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">Módulos</p>
                <div className="space-y-1">
                  {filteredModules.map((module) => {
                    const Icon = IconMap[module.icon as keyof typeof IconMap];
                    const isActive = activeModuleId === module.id;
                    const colors = getColorClasses(module.color);
                    return (
                      <button
                        key={module.id}
                        onClick={() => changeModule(module.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                          isActive 
                            ? `${colors.bg} text-white font-semibold shadow-lg` 
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                        <span className="text-sm truncate">{module.title}</span>
                        {isActive && <ChevronRight size={16} className="ml-auto opacity-70" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Module Progress */}
              {viewMode !== 'dashboard' && (
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-4">Progresso</p>
                  <div className="px-4">
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`h-full ${moduleColors.bg}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${topicProgress}%` }}
                      />
                    </div>
                    <p className="text-right text-xs text-slate-400 mt-2">
                      {Math.round(topicProgress)}% do módulo
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {viewMode === 'dashboard' ? (
            <div className="p-6 md:p-12 max-w-6xl mx-auto">
              {renderDashboard()}
            </div>
          ) : viewMode === 'exams' ? (
            <ExamDashboard />
          ) : (
            <div className="p-4 md:p-8 max-w-5xl mx-auto">
              {/* Module Header with Tabs */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  <button 
                    onClick={() => setViewMode('dashboard')}
                    className="hover:text-slate-600 transition-colors"
                  >
                    Dashboard
                  </button>
                  <ChevronRight size={14} />
                  <span className={moduleColors.text}>{currentModule.title}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {currentModule.title}
                </h2>
                <p className="text-slate-500 mb-6">{currentModule.summary}</p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-1">
                  {[
                    { id: 'topic', icon: BookOpen, label: 'Conteúdo' },
                    { id: 'quiz', icon: HelpCircle, label: 'Quiz' },
                    { id: 'flashcards', icon: RotateCw, label: 'Flashcards' },
                    { id: 'formulas', icon: Calculator, label: 'Fórmulas' },
                    { id: 'exercises', icon: Target, label: 'Exercícios' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setViewMode(tab.id as ViewMode)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-all ${
                        viewMode === tab.id
                          ? `${moduleColors.text} border-b-2 border-current bg-slate-50`
                          : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <tab.icon size={16} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeModuleId}-${viewMode}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {viewMode === 'topic' && (
                    <div className="space-y-8">
                      {/* Topic Navigation */}
                      <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {currentModule.topics.map((topic, idx) => (
                          <button
                            key={topic.id}
                            onClick={() => setActiveTopicIndex(idx)}
                            className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              activeTopicIndex === idx
                                ? `${moduleColors.bg} text-white`
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {idx + 1}. {topic.title}
                          </button>
                        ))}
                      </div>

                      {/* Topic Content */}
                      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                        <div className="mb-6">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Tópico {activeTopicIndex + 1} de {currentModule.topics.length}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mt-2">{currentTopic.title}</h3>
                          <p className="text-slate-500 mt-2">{currentTopic.summary}</p>
                        </div>

                        {/* Key Points */}
                        {currentTopic.keyPoints && currentTopic.keyPoints.length > 0 && (
                          <div className={`p-4 rounded-xl ${moduleColors.light} mb-6`}>
                            <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                              <AlertCircle size={18} className={moduleColors.text} />
                              Pontos-Chave
                            </h4>
                            <ul className="space-y-2">
                              {currentTopic.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${moduleColors.bg} shrink-0`} />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Content Paragraphs */}
                        <div className="space-y-4">
                          {currentTopic.content.map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Topic Flashcards */}
                        {currentTopic.flashcards && currentTopic.flashcards.length > 0 && (
                          <div className="mt-8 pt-6 border-t border-slate-100">
                            <h4 className="font-semibold text-slate-700 mb-4">Flashcards Deste Tópico</h4>
                            <Flashcard 
                              flashcard={currentTopic.flashcards[0]} 
                              index={0}
                              total={currentTopic.flashcards.length}
                            />
                          </div>
                        )}
                      </div>

                      {/* Videos Section */}
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                        <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Video className={moduleColors.text} size={20} />
                          Vídeos Relacionados
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {currentModule.videos.map((video, idx) => (
                            <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                              <iframe
                                className="w-full h-full"
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between items-center pt-4">
                        <button
                          onClick={prevTopic}
                          disabled={activeTopicIndex === 0}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 hover:bg-white"
                        >
                          <ChevronLeft size={20} /> Anterior
                        </button>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => setViewMode('quiz')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all ${moduleColors.bg} text-white`}
                          >
                            Ir para Quiz
                          </button>
                        </div>

                        <button
                          onClick={nextTopic}
                          disabled={activeTopicIndex === currentModule.topics.length - 1}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 hover:bg-white"
                        >
                          Próximo <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {viewMode === 'quiz' && (
                    <Quiz questions={currentModule.quiz} />
                  )}

                  {viewMode === 'flashcards' && renderFlashcards()}
                  {viewMode === 'formulas' && renderFormulas()}
                  {viewMode === 'exercises' && renderExercises()}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
