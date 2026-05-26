// ============================================
// QUESTÕES DE FUNDIÇÃO - UBI
// ============================================

import type { QuestionMCQ, QuestionDev, QuestionCalc, QuestionCompare, QuestionAnalysis } from './questions_full';

export const fundicaoQuestionsMCQ: QuestionMCQ[] = [
  // CONCEITOS FUNDAMENTAIS
  {
    type: 'mcq',
    id: 'fund-mcq-001',
    question: 'A fundição é um processo de fabrico onde:',
    options: [
      'O metal é deformado plásticamente',
      'O metal é fundido e vertido num molde',
      'O metal é cortado por arranque de apara',
      'O metal é unido por soldadura'
    ],
    answer: 1,
    explanation: 'A fundição consiste em fundir o metal e vertê-lo num molde com a forma da peça desejada.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['definição', 'processo']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-002',
    question: 'Os objetos metálicos mais antigos conhecidos datam de:',
    options: ['1000 A.C.', '5000 A.C.', '10000 A.C.', '500 A.C.'],
    answer: 2,
    explanation: 'Os objetos em metal mais antigos conhecidos datam de 10.000 anos A.C., pequenos enfeites de cobre nativo batido.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['história', 'evolução']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-003',
    question: 'O processo de fundição de aço é atribuído a:',
    options: ['Da Vinci', 'Benjamin Huntsman em 1740', 'Vaucanson', 'Wilkinson'],
    answer: 1,
    explanation: 'O processo de fundição em aço é bem mais recente (1740), atribuído a Benjamin Huntsman na Inglaterra.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['história', 'aço']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-004',
    question: 'A fluidez de um metal é:',
    options: [
      'A sua resistência mecânica',
      'A capacidade de escoar e preencher o molde',
      'A sua dureza',
      'A temperatura de fusão'
    ],
    answer: 1,
    explanation: 'Fluidez é a capacidade do metal de escoar e preencher todas as cavidades do molde. Não deve ser confundida com viscosidade.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['fluidade', 'propriedades']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-005',
    question: 'A temperatura de fusão é:',
    options: [
      'A temperatura em que o metal passa do sólido para o líquido',
      'A temperatura de trabalho do forno',
      'A temperatura ambiente',
      'A temperatura de solidificação'
    ],
    answer: 0,
    explanation: 'Temperatura de fusão é a temperatura em que o metal passa do estado sólido para o estado líquido.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['temperatura', 'fusão']
  },

  // PROCESSOS DE FUNDIÇÃO
  {
    type: 'mcq',
    id: 'fund-mcq-006',
    question: 'Na fundição em molde de areia:',
    options: [
      'O molde é reutilizável várias vezes',
      'O molde é destruído após cada vazamento',
      'Não usa areia',
      'É sempre um processo a frio'
    ],
    answer: 1,
    explanation: 'Na fundição em areia (destrutível), o molde é destruído para retirar a peça, sendo usado uma vez.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['areia', 'molde destrutível']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-007',
    question: 'A fundição em casca (shell-molding) usa:',
    options: [
      'Areia verde',
      'Areia revestida com resina térmica endurecida',
      'Cera',
      'Metal'
    ],
    answer: 1,
    explanation: 'Shell-molding usa areia revestida com resina térmica que é endurecida, proporcionando melhor precisão e acabamento.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['shell-molding', 'casca', 'processo']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-008',
    question: 'A fundição por cera perdida utiliza:',
    options: [
      'Modelo metálico',
      'Modelo de cera eliminada por fusão',
      'Molde permanente',
      'Areia verde'
    ],
    answer: 1,
    explanation: 'A cera perdida usa modelo de cera que é eliminada por fusão antes do vazamento, permitindo alta precisão.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['cera perdida', 'processo']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-009',
    question: 'A fundição sob pressão é caracterizada por:',
    options: [
      'Baixa produtividade',
      'Metal injetado sob alta pressão em molde metálico',
      'Uso exclusivo de aço',
      'Molde destruído a cada peça'
    ],
    answer: 1,
    explanation: 'A fundição sob pressão injeta metal sob alta pressão em molde metálico, permitindo alta produtividade para alumínio e zinco.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['pressão', 'alta produtividade']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-010',
    question: 'A fundição por centrifugação é ideal para:',
    options: [
      'Peças planas',
      'Peças cilíndricas',
      'Peças muito pequenas',
      'Apenas plásticos'
    ],
    answer: 1,
    explanation: 'A centrifugação usa molde rotativo e força centrífuga, sendo excelente para peças cilíndricas (tubos, anéis).',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['centrifugação', 'aplicações']
  },

  // ELEMENTOS DOS MOLDES
  {
    type: 'mcq',
    id: 'fund-mcq-011',
    question: 'A bacia de vazamento serve para:',
    options: [
      'Aquecer o metal',
      'Assegurar fluxo ininterrupto e reter escória',
      'Arrefecer o metal',
      'Cortar o metal'
    ],
    answer: 1,
    explanation: 'A bacia de vazamento assegura fluxo ininterrupto do metal e permite que escória flutue e seja retida.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['bacia de vazamento', 'sistema de enchimento']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-012',
    question: 'Os massalotes (alimentadores) servem para:',
    options: [
      'Aquecer o molde',
      'Compensar a contração durante solidificação',
      'Cortar rebarbas',
      'Limpar o metal'
    ],
    answer: 1,
    explanation: 'Os massalotes são reservatórios de metal que fornecem material durante a contração da peça na solidificação.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['massalotes', 'alimentadores', 'contração']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-013',
    question: 'A direcionalidade da solidificação significa que:',
    options: [
      'A peça solidifica aleatoriamente',
      'A peça deve solidificar das extremidades para o sistema de alimentação',
      'O metal é aquecido numa direção',
      'O molde é inclinado'
    ],
    answer: 1,
    explanation: 'A direcionalidade da solidificação exige que a peça solidifique das extremidades para os massalotes (últimos a solidificar).',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['direcionalidade', 'solidificação']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-014',
    question: 'Os machos são usados para:',
    options: [
      'Cortar o metal',
      'Formar superfícies internas, vazios e reentrâncias',
      'Aquecer o molde',
      'Limpar a peça'
    ],
    answer: 1,
    explanation: 'Os machos são elementos que ocupam espaços no molde para formar superfícies internas, vazios, reentrâncias.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['machos', 'cavidades internas']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-015',
    question: 'O plano de apartação é:',
    options: [
      'O local onde se corta o metal',
      'O plano que separa as metades superior e inferior do molde',
      'A temperatura de fusão',
      'O tempo de solidificação'
    ],
    answer: 1,
    explanation: 'O plano de apartação separa as metades superior e inferior do molde, permitindo a desmoldagem.',
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['plano de apartação', 'molde']
  },

  // DEFEITOS
  {
    type: 'mcq',
    id: 'fund-mcq-016',
    question: 'O que é um "choco" na fundição?',
    options: [
      'Excesso de metal',
      'Cavidade por contração inadequada durante solidificação',
      'Oxidação superficial',
      'Inclusão de areia'
    ],
    answer: 1,
    explanation: 'O choco é uma cavidade interna causada por contração inadequada durante a solidificação (alimentação insuficiente).',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['choco', 'defeitos', 'contração']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-017',
    question: 'A porosidade na fundição é causada por:',
    options: [
      'Excesso de metal',
      'Gases e solidificação desordenada',
      'Temperatura muito baixa',
      'Molde muito frio'
    ],
    answer: 1,
    explanation: 'A porosidade resulta de gases dissolvidos, solidificação desordenada ou alimentação insuficiente.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['porosidade', 'defeitos', 'gases']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-018',
    question: 'As trincas na fundição podem ser causadas por:',
    options: [
      'Temperatura uniforme',
      'Tensões térmicas ou estruturais',
      'Excesso de metal',
      'Molde muito quente'
    ],
    answer: 1,
    explanation: 'As trincas (fissuras) ocorrem devido a tensões térmicas, estruturais ou restrições à contração.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['trincas', 'fissuras', 'defeitos']
  },

  // FORNOS
  {
    type: 'mcq',
    id: 'fund-mcq-019',
    question: 'O cubilote é um forno usado para:',
    options: [
      'Aquecer aço',
      'Fundir ferro fundido',
      'Tratamento térmico',
      'Cozer alimentos'
    ],
    answer: 1,
    explanation: 'O cubilote é um forno de coluna usado principalmente para fundir ferro fundido, operando continuamente.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['cubilote', 'fornos', 'ferro fundido']
  },
  {
    type: 'mcq',
    id: 'fund-mcq-020',
    question: 'O forno de revérbero é caracterizado por:',
    options: [
      'Uso de combustível sólido',
      'Soleira plana onde o metal é aquecido por radiação',
      'Operação contínua',
      'Uso apenas para alumínio'
    ],
    answer: 1,
    explanation: 'O forno de revérbero ou soleira tem uma soleira plana onde o metal é aquecido por radiação dos gases e chama.',
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['revérbero', 'fornos']
  }
];

export const fundicaoQuestionsDev: QuestionDev[] = [
  {
    type: 'development',
    id: 'fund-dev-001',
    question: 'Descreva as etapas do processo de fundição desde o desenho até à peça final.',
    expectedPoints: [
      '1. Desenho da peça considerando particularidades do processo',
      '2. Projeto do molde e otimização',
      '3. Fabrico do modelo com dimensões ajustadas à contração',
      '4. Fabrico do molde moldando material refratário',
      '5. Fabrico dos machos para vazios e superfícies internas',
      '6. Fecho do molde com encaixe das partes',
      '7. Fusão do metal acima da temperatura de fusão',
      '8. Vazamento do metal líquido no molde',
      '9. Controlo do arrefecimento',
      '10. Desmoldagem e limpeza',
      '11. Rebarbagem e controlo de qualidade'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'fundicao',
    tags: ['etapas', 'processo', 'sequência']
  },
  {
    type: 'development',
    id: 'fund-dev-002',
    question: 'Compare os processos de fundição em areia, cera perdida e sob pressão.',
    expectedPoints: [
      'Areia: molde destruído, económico, para pequenas e grandes séries',
      'Cera perdida: alta precisão, modelo de cera eliminado por fusão',
      'Sob pressão: metal injetado sob alta pressão, alta produtividade',
      'Comparação de custos, precisão, acabamento, aplicações',
      'Materiais aplicáveis a cada processo'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'fundicao',
    tags: ['comparação', 'processos', 'areia', 'cera perdida', 'pressão']
  },
  {
    type: 'development',
    id: 'fund-dev-003',
    question: 'Explique o sistema de enchimento e o sistema de alimentação num molde de fundição.',
    expectedPoints: [
      'Sistema de enchimento: bacia de vazamento, coluna de enchimento, canais de distribuição, canais de ataque',
      'Função de cada componente do sistema de enchimento',
      'Sistema de alimentação: massalotes/alimentadores',
      'Função dos massalotes: compensar contração',
      'Direcionalidade da solidificação',
      'Critérios de dimensionamento'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'fundicao',
    tags: ['sistema de enchimento', 'alimentação', 'massalotes']
  },
  {
    type: 'development',
    id: 'fund-dev-004',
    question: 'Descreva os principais defeitos na fundição e as suas causas.',
    expectedPoints: [
      'Choco: cavidade por contração, alimentação insuficiente',
      'Porosidade: gases dissolvidos, solidificação desordenada',
      'Inclusões: partículas estranhas (areia, escória)',
      'Trincas: tensões térmicas, restrição à contração',
      'Rebarbas: excesso de material nas juntas',
      'Soluções e prevenção de cada defeito'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['defeitos', 'qualidade', 'prevenção']
  }
];

export const fundicaoQuestionsCalc: QuestionCalc[] = [
  {
    type: 'calculation',
    id: 'fund-calc-001',
    question: 'Calcular o volume de metal necessário para um massalote cilíndrico com diâmetro 60 mm e altura 80 mm, considerando 10% de segurança.',
    data: 'D = 60 mm\nh = 80 mm\nMargem = 10%',
    solution: 'V = 248.550 mm³ ≈ 249 cm³',
    steps: [
      'Volume cilindro: V = π × r² × h',
      'r = 30 mm',
      'V = π × 30² × 80 = 226.195 mm³',
      'Com 10% de margem: V_total = 226.195 × 1,10 = 248.815 mm³ ≈ 249 cm³'
    ],
    formula: 'V = π × r² × h × margem',
    maxScore: 15,
    difficulty: 'easy',
    module: 'fundicao',
    tags: ['massalote', 'volume', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'fund-calc-002',
    question: 'Calcular a velocidade de enchimento num canal de ataque sabendo que o metal cai de 300 mm de altura.',
    data: 'h = 300 mm = 0,3 m\ng = 9,8 m/s²',
    solution: 'v ≈ 2,42 m/s',
    steps: [
      'Usando Torricelli: v = √(2 × g × h)',
      'v = √(2 × 9,8 × 0,3)',
      'v = √5,88 = 2,42 m/s'
    ],
    formula: 'v = √(2 × g × h)',
    maxScore: 15,
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['velocidade', 'enchimento', 'cálculo']
  }
];

export const fundicaoQuestionsCompare: QuestionCompare[] = [
  {
    type: 'comparison',
    id: 'fund-comp-001',
    question: 'Compare moldes destrutíveis e moldes permanentes.',
    itemA: 'Moldes destrutíveis',
    itemB: 'Moldes permanentes',
    comparisonPoints: [
      'Reutilização: usados uma vez (destrutíveis) vs várias vezes (permanentes)',
      'Materiais: areia, gesso, cera (destrutíveis) vs metal, grafite (permanentes)',
      'Acabamento: geralmente mais rugoso (destrutíveis) vs mais liso (permanentes)',
      'Custo do molde: menor (destrutíveis) vs maior (permanentes)',
      'Produção: pequenas a grandes séries (destrutíveis) vs grandes séries (permanentes)',
      'Complexidade da peça: mais complexa (destrutíveis) vs mais simples (permanentes)'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['moldes', 'destrutíveis', 'permanentes', 'comparação']
  }
];

export const fundicaoQuestionsAnalysis: QuestionAnalysis[] = [
  {
    type: 'analysis',
    id: 'fund-ana-001',
    scenario: 'Numa peça fundida em alumínio, detetaram-se cavidades internas após a usinagem.',
    questions: [
      'Qual o defeito mais provável?',
      'Quais as causas e soluções?'
    ],
    expectedAnswers: [
      'Defeito: Choco (cavidade por contração)',
      'Causas: alimentação insuficiente, massalotes mal dimensionados, solidificação na direção errada',
      'Soluções: redimensionar massalotes, verificar direcionalidade da solidificação, aumentar temperatura de vazamento'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'fundicao',
    tags: ['choco', 'defeitos', 'análise']
  }
];

export const fundicaoAllQuestions = [
  ...fundicaoQuestionsMCQ,
  ...fundicaoQuestionsDev,
  ...fundicaoQuestionsCalc,
  ...fundicaoQuestionsCompare,
  ...fundicaoQuestionsAnalysis
];
