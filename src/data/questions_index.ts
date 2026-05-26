// ============================================
// INDEXADOR COMPLETO DE QUESTÕES - UBI
// Tecnologia Mecânica - Todas as tipologias
// ============================================

export * from './questions_full';
export * from './questions_conformacao';
export * from './questions_fundicao';
export * from './questions_soldadura';

// Importar todas as questões
import { corteAllQuestions } from './questions_full';
import { conformacaoAllQuestions } from './questions_conformacao';
import { fundicaoAllQuestions } from './questions_fundicao';
import { soldaduraAllQuestions } from './questions_soldadura';

// Banco completo de todas as questões
export const allAssessmentQuestions = [
  ...corteAllQuestions,
  ...conformacaoAllQuestions,
  ...fundicaoAllQuestions,
  ...soldaduraAllQuestions
];

// Estatísticas do banco de questões
export const getQuestionStats = () => {
  const all = allAssessmentQuestions;
  
  return {
    total: all.length,
    byModule: {
      corte: corteAllQuestions.length,
      conformacao: conformacaoAllQuestions.length,
      fundicao: fundicaoAllQuestions.length,
      soldadura: soldaduraAllQuestions.length
    },
    byType: {
      mcq: all.filter(q => q.type === 'mcq').length,
      development: all.filter(q => q.type === 'development').length,
      calculation: all.filter(q => q.type === 'calculation').length,
      comparison: all.filter(q => q.type === 'comparison').length,
      analysis: all.filter(q => q.type === 'analysis').length
    },
    byDifficulty: {
      easy: all.filter(q => q.difficulty === 'easy').length,
      medium: all.filter(q => q.difficulty === 'medium').length,
      hard: all.filter(q => q.difficulty === 'hard').length
    }
  };
};

// Log de estatísticas
console.log('📊 Banco de Questões Tecnologia Mecânica UBI carregado:');
console.log(getQuestionStats());
