// ============================================
// BANCO COMPLETO DE QUESTÕES DE AVALIAÇÃO
// Tecnologia Mecânica - UBI
// Inclui: MCQ, Desenvolvimento, Cálculo, Análise, Comparação
// ============================================

export interface QuestionMCQ {
  type: 'mcq';
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  module: 'corte' | 'conformacao' | 'fundicao' | 'soldadura';
  tags: string[];
}

export interface QuestionDev {
  type: 'development';
  id: string;
  question: string;
  expectedPoints: string[];
  maxScore: number;
  difficulty: 'easy' | 'medium' | 'hard';
  module: 'corte' | 'conformacao' | 'fundicao' | 'soldadura';
  tags: string[];
}

export interface QuestionCalc {
  type: 'calculation';
  id: string;
  question: string;
  data: string;
  solution: string;
  steps: string[];
  formula: string;
  maxScore: number;
  difficulty: 'easy' | 'medium' | 'hard';
  module: 'corte' | 'conformacao' | 'fundicao' | 'soldadura';
  tags: string[];
}

export interface QuestionCompare {
  type: 'comparison';
  id: string;
  question: string;
  itemA: string;
  itemB: string;
  comparisonPoints: string[];
  maxScore: number;
  difficulty: 'easy' | 'medium' | 'hard';
  module: 'corte' | 'conformacao' | 'fundicao' | 'soldadura';
  tags: string[];
}

export interface QuestionAnalysis {
  type: 'analysis';
  id: string;
  scenario: string;
  questions: string[];
  expectedAnswers: string[];
  maxScore: number;
  difficulty: 'easy' | 'medium' | 'hard';
  module: 'corte' | 'conformacao' | 'fundicao' | 'soldadura';
  tags: string[];
}

export type AssessmentQuestion = QuestionMCQ | QuestionDev | QuestionCalc | QuestionCompare | QuestionAnalysis;

// ============================================
// QUESTÕES DE CORTE POR ARRANQUE DE APARA
// ============================================

export const corteQuestionsMCQ: QuestionMCQ[] = [
  // CONCEITOS FUNDAMENTAIS
  {
    type: 'mcq',
    id: 'corte-mcq-001',
    question: 'Segundo a DIN 8580, a maquinação aplica-se a processos onde ocorre:',
    options: [
      'Remoção de material por fusão',
      'Remoção de material sob a forma de limalha ou apara',
      'Deformação plástica do material',
      'Adição de material por soldadura'
    ],
    answer: 1,
    explanation: 'A DIN 8580 define maquinação como processos onde ocorre remoção de material sob a forma de limalha ou apara.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['DIN 8580', 'definição', 'maquinação']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-002',
    question: 'Qual a percentagem típica do trabalho mecânico de maquinação que se transforma em calor?',
    options: ['Cerca de 50%', 'Cerca de 75%', 'Cerca de 90%', 'Cerca de 25%'],
    answer: 2,
    explanation: 'Cerca de 90% do trabalho mecânico de maquinação transforma-se em calor, dissipado pela apara, peça, ferramenta e ambiente.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['balanço energético', 'calor', 'temperatura']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-003',
    question: 'Quais são as três zonas fundamentais no corte por arranque de apara?',
    options: [
      'Zona de aquecimento, zona de fusão, zona de resfriamento',
      'Zona de deformação primária, zona de deformação secundária, zona de atrito',
      'Zona de corte, zona de avanço, zona de profundidade',
      'Zona elástica, zona plástica, zona de rutura'
    ],
    answer: 1,
    explanation: 'As três zonas são: Zona I (deformação primária - corte), Zona II (deformação secundária - atrito apara/ferramenta), Zona III (atrito ferramenta/peça).',
    difficulty: 'medium',
    module: 'corte',
    tags: ['zonas de deformação', 'teoria do corte']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-004',
    question: 'O que é a aresta postiça de corte?',
    options: [
      'A aresta afiada da ferramenta nova',
      'Núcleo estacionário de material da apara aderente à face de ataque',
      'Rebarba formada na peça após corte',
      'Canal de lubrificação na ferramenta'
    ],
    answer: 1,
    explanation: 'A aresta postiça é um núcleo estacionário de material da apara que adere à face de ataque da ferramenta, alterando a geometria do corte e afetando a qualidade superficial.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['aresta postiça', 'formação da limalha']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-005',
    question: 'Qual tipo de apara é típico de materiais frágeis?',
    options: [
      'Apara contínua regular',
      'Apara contínua irregular',
      'Apara descontínua',
      'Apara helicoidal'
    ],
    answer: 2,
    explanation: 'Materiais frágeis produzem apara descontínua (em bocados irregulares), enquanto materiais dúcteis produzem apara contínua.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['tipos de apara', 'material', 'fragilidade']
  },
  
  // FORÇAS E PARÂMETROS DE CORTE
  {
    type: 'mcq',
    id: 'corte-mcq-006',
    question: 'A força de corte específica (kc) é calculada por:',
    options: [
      'Fc / A onde A é a área de corte',
      'Fc × Vc / 60',
      'ap × f × Vc',
      'π × D × n / 1000'
    ],
    answer: 0,
    explanation: 'kc = Fc / A, onde Fc é a força de corte e A é a área de corte (ap × f). Unidade: N/mm².',
    difficulty: 'medium',
    module: 'corte',
    tags: ['fórmulas', 'força de corte', 'cálculo']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-007',
    question: 'No torneamento de alumínio, a maior parte do calor é dissipada:',
    options: [
      'Pela ferramenta',
      'Pela apara',
      'Pela peça (73% típico)',
      'Pelos fluidos de corte'
    ],
    answer: 2,
    explanation: 'No torneamento de alumínio, cerca de 73% do calor pode ser escoado pela peça. Em aços, percentagem semelhante é escoada pela apara.',
    difficulty: 'hard',
    module: 'corte',
    tags: ['dissipação de calor', 'alumínio', 'temperatura']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-008',
    question: 'A velocidade de corte (Vc) é calculada por:',
    options: [
      'Vc = π × D × n',
      'Vc = π × D × n / 1000',
      'Vc = D / (π × n)',
      'Vc = n / (π × D)'
    ],
    answer: 1,
    explanation: 'Vc = (π × D × n) / 1000 [m/min], onde D está em mm e n em rpm.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['fórmulas', 'velocidade de corte', 'cálculo']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-009',
    question: 'A fórmula de Taylor relaciona velocidade de corte com vida da ferramenta:',
    options: [
      'Vc × T = C',
      'Vc × T² = C',
      'Vc × T^n = C',
      'Vc / T = C'
    ],
    answer: 2,
    explanation: 'Fórmula de Taylor: Vc × T^n = C, onde T é tempo de vida, C e n são constantes do material.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['Taylor', 'vida da ferramenta', 'desgaste']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-010',
    question: 'Qual a relação correta para calcular a rotação (n) a partir da velocidade de corte?',
    options: [
      'n = (Vc × 1000) / (π × D)',
      'n = (Vc × D) / (π × 1000)',
      'n = (π × D) / (Vc × 1000)',
      'n = Vc / (π × D)'
    ],
    answer: 0,
    explanation: 'n = (Vc × 1000) / (π × D) [rpm], onde Vc em m/min e D em mm.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['fórmulas', 'rotação', 'cálculo']
  },

  // TORNEAMENTO
  {
    type: 'mcq',
    id: 'corte-mcq-011',
    question: 'No torneamento, quem realiza o movimento de corte?',
    options: [
      'A ferramenta',
      'A peça (rotação)',
      'O carro transversal',
      'A contra-ponta'
    ],
    answer: 1,
    explanation: 'No torneamento, a peça rota (movimento de corte) e a ferramenta avança linearmente (movimento de avanço).',
    difficulty: 'easy',
    module: 'corte',
    tags: ['torneamento', 'movimentos', 'cinemática']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-012',
    question: 'No torneamento, quem realiza o movimento de avanço?',
    options: [
      'A peça',
      'A ferramenta',
      'O prato',
      'O motor'
    ],
    answer: 1,
    explanation: 'A ferramenta realiza o movimento de avanço (linear), enquanto a peça realiza o movimento de corte (rotação).',
    difficulty: 'easy',
    module: 'corte',
    tags: ['torneamento', 'movimentos', 'avanço']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-013',
    question: 'Qual o ângulo de ponta típico de uma broca standard?',
    options: ['90°', '118°', '135°', '180°'],
    answer: 1,
    explanation: 'Broca standard tem 118°, mas brocas para materiais duros podem ter 135°.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['furação', 'broca', 'geometria']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-014',
    question: 'Qual a temperatura típica de laminação a quente para o aço?',
    options: ['600°C', '900°C', '1200°C', '1500°C'],
    answer: 2,
    explanation: 'A temperatura desejada para laminação a quente do aço é em torno de 1200°C.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['laminação', 'temperatura', 'aço']
  },

  // FRESAGEM
  {
    type: 'mcq',
    id: 'corte-mcq-015',
    question: 'Na fresagem em concordância:',
    options: [
      'O sentido de rotação é contrário ao avanço',
      'O sentido de rotação é igual ao avanço (melhor acabamento)',
      'A fresa não rota',
      'A peça não se move'
    ],
    answer: 1,
    explanation: 'Fresagem em concordância: rotação igual ao avanço → melhor acabamento. Em oposição: rotação contrária → menor desgaste.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['fresagem', 'concordância', 'oposição']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-016',
    question: 'Qual a principal diferença entre torneamento e fresagem quanto aos movimentos?',
    options: [
      'No torneamento a ferramenta roda, na fresagem a peça roda',
      'No torneamento a peça roda e a ferramenta avança; na fresagem a ferramenta roda e a peça avança',
      'Ambos têm os mesmos movimentos',
      'No torneamento não há rotação'
    ],
    answer: 1,
    explanation: 'Torneamento: peça rotativa (corte) + ferramenta linear (avanço). Fresagem: ferramenta rotativa (corte) + peça linear (avanço).',
    difficulty: 'medium',
    module: 'corte',
    tags: ['torneamento', 'fresagem', 'movimentos']
  },

  // FLUIDOS DE CORTE
  {
    type: 'mcq',
    id: 'corte-mcq-017',
    question: 'Quais são as duas funções principais dos fluidos de corte?',
    options: [
      'Aumentar o ruído e reduzir vibrações',
      'Lubrificação e refrigeração',
      'Mudar a cor da apara e proteger a máquina',
      'Aumentar a dureza da peça e da ferramenta'
    ],
    answer: 1,
    explanation: 'Os fluidos de corte servem para: 1) Lubrificação (reduzir atrito) e 2) Refrigeração (dissipar calor).',
    difficulty: 'easy',
    module: 'corte',
    tags: ['fluidos de corte', 'lubrificação', 'refrigeração']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-018',
    question: 'Os fluidos de corte à base de água são mais eficazes:',
    options: [
      'A baixas velocidades de corte',
      'A altas velocidades de corte quando há muito calor',
      'Apenas para retificação',
      'Apenas para rosqueamento'
    ],
    answer: 1,
    explanation: 'Fluidos à base de água (elevado calor específico e condutividade térmica) são mais eficazes em altas velocidades quando a geração de calor é um problema.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['fluidos de corte', 'refrigeração', 'propriedades']
  },

  // FERRAMENTAS
  {
    type: 'mcq',
    id: 'corte-mcq-019',
    question: 'Qual material de ferramenta tem maior resistência ao calor?',
    options: ['Aço carbono', 'Aço rápido', 'Metal duro', 'Diamante'],
    answer: 3,
    explanation: 'O diamante tem a maior resistência ao calor, seguido de CBN, cerâmicas, metal duro, aço rápido e aço carbono.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['materiais de ferramenta', 'temperatura', 'diamante']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-020',
    question: 'A retificação é caracterizada por:',
    options: [
      'Aparas de grande dimensão (0,25-2,5 mm)',
      'Aparas de pequena dimensão (0,0025-0,25 mm) usando rebolos abrasivos',
      'Sem remoção de material',
      'Fusão do material'
    ],
    answer: 1,
    explanation: 'A retificação usa rebolos abrasivos e produz aparas de pequena dimensão (0,0025 a 0,25 mm), com alta precisão e acabamento.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['retificação', 'aparas', 'precisão']
  },

  // MÁQUINAS-FERRAMENTAS
  {
    type: 'mcq',
    id: 'corte-mcq-021',
    question: 'A plaina mecânica (limadora) é adequada para:',
    options: [
      'Superfícies de revolução',
      'Superfícies planas com movimento retilíneo alternado',
      'Furos cilíndricos',
      'Roscas internas'
    ],
    answer: 1,
    explanation: 'A plaina mecânica (limadora) é destinada à obtenção de superfícies planas geradas por movimento retilíneo alternado.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['plaina', 'limagem', 'superfícies planas']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-022',
    question: 'O mandrilamento destina-se a:',
    options: [
      'Criar furos em peça sólida',
      'Alargar e acabar furos existentes com alta precisão',
      'Cortar peças ao meio',
      'Rosquear furos'
    ],
    answer: 1,
    explanation: 'O mandrilamento é a operação de alargamento e acabamento de furos já existentes com alta precisão dimensional.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['mandrilamento', 'furação', 'precisão']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-023',
    question: 'O brochamento utiliza:',
    options: [
      'Uma ferramenta com dentes sucessivos de altura crescente',
      'Uma ferramenta de corte rotativa',
      'Uma ferramenta abrasiva',
      'Um feixe laser'
    ],
    answer: 0,
    explanation: 'O brochamento usa uma ferramenta especial (broca) com dentes sucessivos de altura crescente para remover material progressivamente.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['brochamento', 'ferramenta', 'dentes']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-024',
    question: 'Qual a vantagem da fresagem em oposição sobre a concordância?',
    options: [
      'Melhor acabamento superficial',
      'Menor desgaste da ferramenta',
      'Maior taxa de remoção',
      'Menor rugosidade'
    ],
    answer: 1,
    explanation: 'Fresagem em oposição (rotação contrária ao avanço) apresenta menor desgaste da ferramenta, embora maior rugosidade.',
    difficulty: 'hard',
    module: 'corte',
    tags: ['fresagem', 'oposição', 'desgaste']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-025',
    question: 'A taxa de remoção (Q) é calculada por:',
    options: [
      'Q = ap × f × n',
      'Q = ap × f × Vc',
      'Q = Vc / (ap × f)',
      'Q = π × D × n'
    ],
    answer: 1,
    explanation: 'Q = ap × f × Vc [cm³/min], onde ap é profundidade de corte, f é avanço e Vc é velocidade de corte.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['fórmulas', 'taxa de remoção', 'cálculo']
  },

  // HISTÓRIA E EVOLUÇÃO
  {
    type: 'mcq',
    id: 'corte-mcq-026',
    question: 'Quando surgiram as primeiras plainas primitivas?',
    options: ['1500 A.C.', '400 A.C.', '6000 A.C.', 'Século XVI'],
    answer: 2,
    explanation: 'As plainas primitivas surgiram cerca de 6000 A.C., no período paleolítico superior.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['história', 'evolução', 'plaina']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-027',
    question: 'Quem desenvolveu esboços de máquinas-ferramentas revolucionárias no século XVI?',
    options: ['James Watt', 'Wilkinson', 'Da Vinci', 'Vaucanson'],
    answer: 2,
    explanation: 'Da Vinci desenvolveu esboços de máquinas-ferramentas com características revolucionárias no século XVI.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['história', 'Da Vinci', 'evolução']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-028',
    question: 'Quando foram realizados os primeiros tornos segundo princípios modernos?',
    options: ['1569 por Benson', '1765 por Vaucanson', '1800 por Maudsley', 'Século XX'],
    answer: 1,
    explanation: 'Os primeiros tornos projetados segundo princípios modernos foram realizados pelo francês Vaucanson por volta de 1765.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['história', 'torno', 'Vaucanson']
  },

  // CÁLCULOS DE TEMPO
  {
    type: 'mcq',
    id: 'corte-mcq-029',
    question: 'O tempo de torneamento é calculado por:',
    options: [
      'T = L × f × n',
      'T = L / (f × n)',
      'T = (f × n) / L',
      'T = L + f + n'
    ],
    answer: 1,
    explanation: 'T = L / (f × n) [min], onde L é comprimento de usinagem, f é avanço e n é rotação.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['fórmulas', 'tempo', 'cálculo']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-030',
    question: 'Na furação, a maior parte do calor é dissipada:',
    options: ['Pela ferramenta', 'Pela peça', 'Pela apara', 'Pelo fluido de corte'],
    answer: 1,
    explanation: 'Na furação, diferentemente do torneamento, a maior parte do calor é dissipada pela peça.',
    difficulty: 'hard',
    module: 'corte',
    tags: ['furação', 'calor', 'dissipação']
  },

  // PROCESSOS AVANÇADOS
  {
    type: 'mcq',
    id: 'corte-mcq-031',
    question: 'Os centros de maquinação CNC combinam:',
    options: [
      'Apenas torneamento',
      'Torneamento, fresagem e furação numa única máquina',
      'Apenas soldadura',
      'Apenas polimento'
    ],
    answer: 1,
    explanation: 'Centros de maquinação CNC combinam múltiplas operações (torneamento, fresagem, furação) numa única máquina.',
    difficulty: 'easy',
    module: 'corte',
    tags: ['CNC', 'centro de maquinação', 'automação']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-032',
    question: 'A maquinabilidade é medida por:',
    options: [
      'Apenas pelo tempo de vida da ferramenta',
      'Tempo de vida da ferramenta, acabamento superficial e potência necessária',
      'Apenas pela cor da apara',
      'Apenas pelo ruído gerado'
    ],
    answer: 1,
    explanation: 'Maquinabilidade reflete-se em: tempo de vida da ferramenta, acabamento superficial obtido, e potência/forças necessárias.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['maquinabilidade', 'indicadores', 'avaliação']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-033',
    question: 'O atrito entre apara e ferramenta pode ser reduzido por:',
    options: [
      'Apenas diminuindo a velocidade de corte',
      'Melhorar acabamento da ferramenta, usar materiais de baixo coeficiente de atrito, aumentar ângulo de ataque, usar fluido de corte',
      'Aumentar a profundidade de corte',
      'Não há formas de reduzir'
    ],
    answer: 1,
    explanation: 'Métodos: melhorar acabamento da ferramenta, usar materiais de baixo coeficiente de atrito, aumentar Vc, aumentar ângulo de ataque, usar fluido de corte.',
    difficulty: 'medium',
    module: 'corte',
    tags: ['atrito', 'redução', 'fluido de corte']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-034',
    question: 'A escateladora é adequada para:',
    options: [
      'Grandes séries de produção',
      'Pequenas séries, escatéis interiores, matrizes para corte de chapa',
      'Apenas torneamento',
      'Apenas laminação'
    ],
    answer: 1,
    explanation: 'A escateladora é económica para pequenas séries e trabalhos como escatéis interiores, matrizes para corte de chapa, cames.',
    difficulty: 'hard',
    module: 'corte',
    tags: ['escatelamento', 'aplicações', 'séries']
  },
  {
    type: 'mcq',
    id: 'corte-mcq-035',
    question: 'Qual o curso de furação em torno mecânico?',
    options: [
      'Curso = l',
      'Curso = l + 3 mm',
      'Curso = l - 3 mm',
      'Curso = 2 × l'
    ],
    answer: 1,
    explanation: 'Em torno mecânico: Curso de furação = l + 3 mm (para considerar a penetração inicial).',
    difficulty: 'medium',
    module: 'corte',
    tags: ['furação', 'curso', 'cálculo']
  }
];

// ============================================
// QUESTÕES DE DESENVOLVIMENTO - CORTE
// ============================================

export const corteQuestionsDev: QuestionDev[] = [
  {
    type: 'development',
    id: 'corte-dev-001',
    question: 'Explique o mecanismo de formação da limalha no corte por arranque de apara, identificando as três zonas de deformação e as características de cada uma.',
    expectedPoints: [
      'Zona I - Deformação primária (corte): plano de corte, escorregamento devido a tensões de corte, inclinação φ',
      'Zona II - Deformação secundária: atrito entre apara e face de ataque, escorregamento do material',
      'Zona III - Atrito: entre ferramenta e superfície maquinada, afeta acabamento superficial',
      'Aresta postiça: núcleo estacionário que altera geometria do corte',
      'Tipos de apara: contínua regular (dúcteis), contínua irregular, descontínua (frágeis)'
    ],
    maxScore: 20,
    difficulty: 'hard',
    module: 'corte',
    tags: ['formação da limalha', 'zonas de deformação', 'teoria do corte']
  },
  {
    type: 'development',
    id: 'corte-dev-002',
    question: 'Descreva o balanço energético no corte por arranque de apara, indicando as origens do calor e as formas de dissipação.',
    expectedPoints: [
      'Cerca de 90% do trabalho mecânico transforma-se em calor',
      'Origem do calor: deformação primária (atrito interno), atrito apara/ferramenta, atrito ferramenta/peça',
      'Dissipação: pela apara (maior parte em aço), pela peça (maior parte em alumínio), pela ferramenta, pelo ambiente',
      'Variação com material e velocidade',
      'Efeito do fluido de corte na dissipação'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['balanço energético', 'calor', 'temperatura']
  },
  {
    type: 'development',
    id: 'corte-dev-003',
    question: 'Compare os movimentos principais na torneamento e na fresagem, identificando quem realiza o corte e quem realiza o avanço em cada processo.',
    expectedPoints: [
      'Torneamento: peça rotativa (corte), ferramenta linear (avanço)',
      'Fresagem: ferramenta rotativa (corte), peça linear (avanço) ou vice-versa em fresadoras de portal',
      'Consequências: na furação calor vai para peça; no torneamento calor vai para apara',
      'Vantagens de cada configuração',
      'Exemplos de aplicações'
    ],
    maxScore: 15,
    difficulty: 'easy',
    module: 'corte',
    tags: ['torneamento', 'fresagem', 'movimentos', 'comparação']
  },
  {
    type: 'development',
    id: 'corte-dev-004',
    question: 'Explique as funções dos fluidos de corte, os tipos existentes e quando devem ser aplicados.',
    expectedPoints: [
      'Funções: lubrificação (reduzir atrito) e refrigeração (dissipar calor)',
      'Tipos: emulsões (semissintéticos), soluções, óleos integrais',
      'Óleos com aditivos ativos: altas pressões/temperaturas',
      'Óleos à base de água: eficazes a altas velocidades',
      'Métodos de aplicação: jato baixa pressão, névoa, manual',
      'Perda de eficácia acima de 120 m/min'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['fluidos de corte', 'lubrificação', 'refrigeração', 'tipos']
  },
  {
    type: 'development',
    id: 'corte-dev-005',
    question: 'Descreva a evolução histórica das máquinas-ferramentas desde o Paleolítico até à era do CNC.',
    expectedPoints: [
      '6000 A.C.: plainas primitivas com pedra e madeira',
      '1500 A.C.: furadeiras de arco egípcias',
      '400 A.C.: primeiros tornos',
      'Século XVI: rodas de água substituem arcos, torneamento ornamental (Benson 1569)',
      'Da Vinci: esboços revolucionários com brocas de canais helicoidais',
      'Revolução Industrial: Wilkinson (tolerâncias apertadas), Maudsley',
      '1765: torno moderno por Vaucanson',
      'Século XX: desenvolvimento do CNC, máquinas de ultraprecisão'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['história', 'evolução', 'máquinas-ferramentas']
  },
  {
    type: 'development',
    id: 'corte-dev-006',
    question: 'Explique a fórmula de Taylor e a sua importância na seleção de parâmetros de corte.',
    expectedPoints: [
      'Fórmula: Vc × T^n = C',
      'Vc = velocidade de corte, T = tempo de vida, C e n = constantes',
      'Relação inversa: aumentar Vc diminui T',
      'Aplicação: otimizar produtividade vs custo de ferramentas',
      'Constantes dependem do par material/ferramenta',
      'Gráfico log-log dá reta'
    ],
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['Taylor', 'vida da ferramenta', 'otimização']
  },
  {
    type: 'development',
    id: 'corte-dev-007',
    question: 'Descreva os tipos de máquinas-ferramentas para produção em série e para maquinação especial.',
    expectedPoints: [
      'Produção em série: centros de maquinação, comboios de produção',
      'Centros CNC: múltiplas ferramentas, alta automação',
      'Maquinação especial: eletroerosão, ultrassónica, mecânica anódica',
      'Vantagens de cada tipo',
      'Critérios de seleção'
    ],
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['máquinas-ferramentas', 'produção', 'CNC']
  },
  {
    type: 'development',
    id: 'corte-dev-008',
    question: 'Explique o processo de retificação, suas características e aplicações.',
    expectedPoints: [
      'Processo abrasivo com rebolos',
      'Aparas pequenas: 0,0025 a 0,25 mm',
      'Alta precisão: tolerâncias IT5-IT7, rugosidade Ra 0,1-0,8 μm',
      'Tipos: cilíndrica (externa/interna), plana, sem centros',
      'Composição do rebolo: grãos abrasivos, ligante, poros',
      'Velocidade do rebolo: 25-45 m/s',
      'Gera muito calor → refrigeração essencial'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['retificação', 'precisão', 'acabamento']
  },
  {
    type: 'development',
    id: 'corte-dev-009',
    question: 'Compare a fresagem em concordância e em oposição, indicando vantagens e desvantagens de cada uma.',
    expectedPoints: [
      'Concordância: rotação igual ao avanço',
      'Vantagens concordância: melhor acabamento superficial',
      'Desvantagens concordância: maior desgaste da ferramenta',
      'Oposição: rotação contrária ao avanço',
      'Vantagens oposição: menor desgaste',
      'Desvantagens oposição: maior rugosidade',
      'Critérios de seleção'
    ],
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['fresagem', 'concordância', 'oposição', 'comparação']
  },
  {
    type: 'development',
    id: 'corte-dev-010',
    question: 'Descreva o processo de brochamento, sua ferramenta e aplicações típicas.',
    expectedPoints: [
      'Ferramenta: broca com dentes sucessivos de altura crescente',
      'Movimento linear de avanço',
      'Cada dente remove material progressivamente',
      'Forma final atingida no último dente',
      'Aplicações: perfis internos complexos (poligonais, estriados, chavetas)',
      'Vantagens: alta precisão, acabamento superficial de qualidade',
      'Desvantagens: ferramenta específica para cada forma'
    ],
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['brochamento', 'ferramenta', 'aplicações']
  }
];

// ============================================
// QUESTÕES DE CÁLCULO - CORTE
// ============================================

export const corteQuestionsCalc: QuestionCalc[] = [
  {
    type: 'calculation',
    id: 'corte-calc-001',
    question: 'Calcular a rotação necessária para um torneamento com velocidade de corte de 120 m/min e diâmetro de 80 mm.',
    data: 'Vc = 120 m/min\nD = 80 mm',
    solution: 'n = 477 rpm',
    steps: [
      'Fórmula: n = (Vc × 1000) / (π × D)',
      'Substituir: n = (120 × 1000) / (π × 80)',
      'n = 120000 / 251,33',
      'n ≈ 477 rpm'
    ],
    formula: 'n = (Vc × 1000) / (π × D)',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['rotação', 'velocidade de corte', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-002',
    question: 'Calcular o tempo de usinagem de um eixo com comprimento de 200 mm, avanço de 0,2 mm/rot e rotação de 500 rpm.',
    data: 'L = 200 mm\nf = 0,2 mm/rot\nn = 500 rpm',
    solution: 'T = 2 minutos',
    steps: [
      'Fórmula: T = L / (f × n)',
      'Substituir: T = 200 / (0,2 × 500)',
      'T = 200 / 100',
      'T = 2 min'
    ],
    formula: 'T = L / (f × n)',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['tempo', 'avanço', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-003',
    question: 'Calcular a velocidade de corte para uma fresa de 50 mm de diâmetro rodando a 800 rpm.',
    data: 'D = 50 mm\nn = 800 rpm',
    solution: 'Vc = 125,7 m/min',
    steps: [
      'Fórmula: Vc = (π × D × n) / 1000',
      'Substituir: Vc = (π × 50 × 800) / 1000',
      'Vc = 125663,7 / 1000',
      'Vc ≈ 125,7 m/min'
    ],
    formula: 'Vc = (π × D × n) / 1000',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['velocidade de corte', 'fresagem', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-004',
    question: 'Calcular a taxa de remoção para uma operação com profundidade de corte de 3 mm, avanço de 0,3 mm/rot e velocidade de corte de 100 m/min.',
    data: 'ap = 3 mm\nf = 0,3 mm/rot\nVc = 100 m/min',
    solution: 'Q = 90 cm³/min',
    steps: [
      'Fórmula: Q = ap × f × Vc',
      'Substituir: Q = 3 × 0,3 × 100',
      'Q = 90 cm³/min',
      'Nota: ap e f em mm, Vc em m/min → resultado em cm³/min'
    ],
    formula: 'Q = ap × f × Vc',
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['taxa de remoção', 'produtividade', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-005',
    question: 'Calcular a força de corte específica sabendo que a força de corte é 1500 N e a área de corte é 1,5 mm².',
    data: 'Fc = 1500 N\nA = 1,5 mm²',
    solution: 'kc = 1000 N/mm²',
    steps: [
      'Fórmula: kc = Fc / A',
      'Substituir: kc = 1500 / 1,5',
      'kc = 1000 N/mm²'
    ],
    formula: 'kc = Fc / A',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['força de corte', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-006',
    question: 'Calcular a potência de corte para Fc = 2000 N e Vc = 150 m/min.',
    data: 'Fc = 2000 N\nVc = 150 m/min',
    solution: 'Pc = 5 kW',
    steps: [
      'Fórmula: Pc = (Fc × Vc) / 60',
      'Substituir: Pc = (2000 × 150) / 60',
      'Pc = 300000 / 60',
      'Pc = 5000 W = 5 kW'
    ],
    formula: 'Pc = (Fc × Vc) / 60',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['potência', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-007',
    question: 'Uma peça de 300 mm de comprimento deve ser usinada com avanço de 0,25 mm/rot. A velocidade de corte é 80 m/min e o diâmetro é 60 mm. Calcular o tempo total de usinagem.',
    data: 'L = 300 mm\nf = 0,25 mm/rot\nVc = 80 m/min\nD = 60 mm',
    solution: 'T ≈ 3,58 min',
    steps: [
      'Passo 1: Calcular rotação: n = (Vc × 1000) / (π × D)',
      'n = (80 × 1000) / (π × 60) = 424,4 rpm',
      'Passo 2: Calcular tempo: T = L / (f × n)',
      'T = 300 / (0,25 × 424,4)',
      'T = 300 / 106,1 = 2,83 min'
    ],
    formula: 'n = (Vc × 1000) / (π × D); T = L / (f × n)',
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['tempo', 'rotação', 'cálculo combinado']
  },
  {
    type: 'calculation',
    id: 'corte-calc-008',
    question: 'Calcular o tempo de usinagem para fresar uma superfície de 150 mm de comprimento com avanço por dente de 0,1 mm, fresa com 4 dentes, rotação de 600 rpm.',
    data: 'L = 150 mm\nfz = 0,1 mm/dente\nz = 4 dentes\nn = 600 rpm',
    solution: 'T = 0,625 min',
    steps: [
      'Passo 1: Calcular avanço por rotação: f = fz × z',
      'f = 0,1 × 4 = 0,4 mm/rot',
      'Passo 2: Calcular tempo: T = L / (f × n)',
      'T = 150 / (0,4 × 600)',
      'T = 150 / 240 = 0,625 min'
    ],
    formula: 'f = fz × z; T = L / (f × n)',
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['fresagem', 'avanço', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-009',
    question: 'Calcular a área de corte para uma operação com profundidade de corte de 4 mm e avanço de 0,2 mm/rot.',
    data: 'ap = 4 mm\nf = 0,2 mm/rot',
    solution: 'A = 0,8 mm²',
    steps: [
      'Fórmula: A = ap × f',
      'Substituir: A = 4 × 0,2',
      'A = 0,8 mm²'
    ],
    formula: 'A = ap × f',
    maxScore: 10,
    difficulty: 'easy',
    module: 'corte',
    tags: ['área de corte', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'corte-calc-010',
    question: 'Usando a fórmula de Taylor (Vc × T^0,25 = 80), calcular a vida da ferramenta para Vc = 100 m/min.',
    data: 'Vc × T^0,25 = 80\nVc = 100 m/min\nn = 0,25',
    solution: 'T = 0,41 min',
    steps: [
      'Fórmula: Vc × T^n = C',
      '100 × T^0,25 = 80',
      'T^0,25 = 80 / 100 = 0,8',
      'T = 0,8^4 = 0,4096 ≈ 0,41 min'
    ],
    formula: 'Vc × T^n = C',
    maxScore: 15,
    difficulty: 'hard',
    module: 'corte',
    tags: ['Taylor', 'vida da ferramenta', 'cálculo']
  }
];

// ============================================
// QUESTÕES DE COMPARAÇÃO - CORTE
// ============================================

export const corteQuestionsCompare: QuestionCompare[] = [
  {
    type: 'comparison',
    id: 'corte-comp-001',
    question: 'Compare o torneamento e a fresagem em termos de movimentos, ferramentas e aplicações.',
    itemA: 'Torneamento',
    itemB: 'Fresagem',
    comparisonPoints: [
      'Movimento de corte: peça rotativa (torneamento) vs ferramenta rotativa (fresagem)',
      'Movimento de avanço: ferramenta linear (torneamento) vs peça linear (fresagem)',
      'Geometria produzida: superfícies de revolução (torneamento) vs superfícies planas/perfil (fresagem)',
      'Ferramenta: monocortante (torneamento) vs multicortante (fresagem)',
      'Aplicações típicas',
      'Distribuição de calor: apara (torneamento) vs peça (furação)'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['torneamento', 'fresagem', 'comparação']
  },
  {
    type: 'comparison',
    id: 'corte-comp-002',
    question: 'Compare a laminação a quente e a laminação a frio.',
    itemA: 'Laminação a quente',
    itemB: 'Laminação a frio',
    comparisonPoints: [
      'Temperatura: ~1200°C para aço (quente) vs temperatura ambiente (frio)',
      'Força necessária: menor (quente) vs maior (frio)',
      'Acabamento superficial: rugoso com óxidos (quente) vs liso/brilhante (frio)',
      'Tolerâncias: mais abertas (quente) vs mais apertadas (frio)',
      'Propriedades mecânicas: isotrópicas (quente) vs anisotrópicas com encruamento (frio)',
      'Tensões residuais: praticamente nulas (quente) vs presentes (frio)',
      'Aplicações típicas'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['laminação', 'quente', 'frio', 'comparação']
  },
  {
    type: 'comparison',
    id: 'corte-comp-003',
    question: 'Compare ferramentas de aço rápido e metal duro.',
    itemA: 'Aço rápido (HSS)',
    itemB: 'Metal duro (carbonetos)',
    comparisonPoints: [
      'Resistência ao calor: até 600°C (HSS) vs até 900°C (metal duro)',
      'Velocidades de corte: mais baixas (HSS) vs mais altas (metal duro)',
      'Tenacidade: maior (HSS) vs menor (metal duro)',
      'Custo: menor (HSS) vs maior (metal duro)',
      'Aplicações: ferramentaria, brocas (HSS) vs produção em série, usinagem pesada (metal duro)',
      'Revestimentos possíveis'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['materiais de ferramenta', 'HSS', 'metal duro', 'comparação']
  },
  {
    type: 'comparison',
    id: 'corte-comp-004',
    question: 'Compare a furação e o mandrilamento.',
    itemA: 'Furação',
    itemB: 'Mandrilamento',
    comparisonPoints: [
      'Objetivo: criar furo (furação) vs alargar/acabar furo existente (mandrilamento)',
      'Precisão: menor (furação) vs maior (mandrilamento)',
      'Tolerâncias: mais abertas (furação) vs mais apertadas (mandrilamento)',
      'Rugosidade: maior (furação) vs menor (mandrilamento)',
      'Ferramenta: broca helicoidal (furação) vs mandril (mandrilamento)',
      'Aplicações típicas'
    ],
    maxScore: 15,
    difficulty: 'easy',
    module: 'corte',
    tags: ['furação', 'mandrilamento', 'comparação']
  },
  {
    type: 'comparison',
    id: 'corte-comp-005',
    question: 'Compare a plaina (limadora) e a fresagem para obtenção de superfícies planas.',
    itemA: 'Plaina/Limadora',
    itemB: 'Fresagem',
    comparisonPoints: [
      'Movimento: retilíneo alternado (plaina) vs rotação (fresagem)',
      'Tipo de corte: intermitente (plaina) vs contínuo (fresagem)',
      'Produtividade: menor (plaina) vs maior (fresagem)',
      'Aplicações típicas: guias, ranhuras (plaina) vs peças diversas (fresagem)',
      'Custo do equipamento',
      'Precisão alcançável'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['plaina', 'limagem', 'fresagem', 'comparação']
  }
];

// ============================================
// QUESTÕES DE ANÁLISE - CORTE
// ============================================

export const corteQuestionsAnalysis: QuestionAnalysis[] = [
  {
    type: 'analysis',
    id: 'corte-ana-001',
    scenario: 'Numa operação de torneamento de aço, o operador observa que a ferramenta está a aquecer excessivamente e a apara está a apresentar cor azulada.',
    questions: [
      'Qual pode ser a causa do problema?',
      'Que medidas pode tomar para resolver?'
    ],
    expectedAnswers: [
      'Causas: velocidade de corte excessiva, avanço inadequado, falta de fluido de corte, geometria da ferramenta inadequada',
      'Medidas: reduzir Vc, verificar avanço e profundidade, aplicar fluido de corte adequado, verificar geometria da ferramenta'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['diagnóstico', 'problemas', 'aquecimento']
  },
  {
    type: 'analysis',
    id: 'corte-ana-002',
    scenario: 'Numa operação de fresagem, a peça apresenta rugosidade superficial excessiva após a usinagem.',
    questions: [
      'Identifique possíveis causas para este defeito.',
      'Proponha soluções para melhorar o acabamento.'
    ],
    expectedAnswers: [
      'Causas: fresagem em oposição (em vez de concordância), desgaste da ferramenta, avanço excessivo, vibrações, rigidez insuficiente',
      'Soluções: usar fresagem em concordância, trocar/tocar ferramenta, reduzir avanço, aumentar rigidez do sistema, verificar fixação'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'corte',
    tags: ['diagnóstico', 'rugosidade', 'acabamento']
  },
  {
    type: 'analysis',
    id: 'corte-ana-003',
    scenario: 'Uma broca durante a furação desvia-se do eixo pretendido, criando um furo torto.',
    questions: [
      'Explique as causas mais prováveis deste problema.',
      'Que precauções devem ser tomadas para evitar este defeito?'
    ],
    expectedAnswers: [
      'Causas: broca muito longa, falta de rigidez, material heterogêneo, ângulo de ponta inadequado, ausência de pré-furação/centragem',
      'Precauções: usar broca de menor comprimento ou diâmetro maior, verificar rigidez do sistema, fazer furo de centragem primeiro, reduzir avanço'
    ],
    maxScore: 20,
    difficulty: 'hard',
    module: 'corte',
    tags: ['diagnóstico', 'furação', 'desvio']
  },
  {
    type: 'analysis',
    id: 'corte-ana-004',
    scenario: 'Numa operação de retificação, observam-se marcas de queimadura térmica na superfície da peça.',
    questions: [
      'Qual a causa deste defeito?',
      'Como pode ser evitado?'
    ],
    expectedAnswers: [
      'Causa: acumulo excessivo de calor devido a refrigeração insuficiente, velocidade excessiva, profundidade de corte grande',
      'Soluções: aumentar fluxo de fluido de corte, reduzir velocidade/profundidade, usar rebolo mais mole, dressar o rebolo'
    ],
    maxScore: 15,
    difficulty: 'medium',
    module: 'corte',
    tags: ['diagnóstico', 'retificação', 'queimadura térmica']
  },
  {
    type: 'analysis',
    id: 'corte-ana-005',
    scenario: 'Uma empresa precisa produzir 1000 peças cilíndricas com tolerâncias apertadas (IT7) e acabamento superficial Ra 0,4 μm.',
    questions: [
      'Que processos de maquinação recomendaria?',
      'Justifique a sequência de operações proposta.'
    ],
    expectedAnswers: [
      'Processos: torneamento de desbaste + torneamento de acabamento + retificação cilíndrica',
      'Justificação: torneamento desbaste remove material rápido; torneamento acabamento aproxima dimensões; retificação garante precisão IT7 e Ra 0,4 μm'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'corte',
    tags: ['planeamento', 'processos', 'precisão']
  }
];

// Exportar todas as questões de corte
export const corteAllQuestions = [
  ...corteQuestionsMCQ,
  ...corteQuestionsDev,
  ...corteQuestionsCalc,
  ...corteQuestionsCompare,
  ...corteQuestionsAnalysis
];
