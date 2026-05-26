// ============================================
// QUESTÕES DE SOLDADURA - UBI
// ============================================

import type { QuestionMCQ, QuestionDev, QuestionCalc, QuestionCompare, QuestionAnalysis } from './questions_full';

export const soldaduraQuestionsMCQ: QuestionMCQ[] = [
  // CONCEITOS FUNDAMENTAIS
  {
    type: 'mcq',
    id: 'sold-mcq-001',
    question: 'A soldadura é um processo de:',
    options: [
      'União temporária de materiais',
      'União permanente com coalescência de metais',
      'Corte de materiais',
      'Tratamento térmico superficial'
    ],
    answer: 1,
    explanation: 'Soldadura é o processo de união permanente de materiais metálicos com coalescência (fusão localizada), produzida por aquecimento e/ou pressão.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['definição', 'união permanente']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-002',
    question: 'A soldabilidade é:',
    options: [
      'A velocidade de soldadura',
      'A capacidade de um material de ser soldado com qualidade',
      'A temperatura de fusão',
      'O tipo de eletrodo usado'
    ],
    answer: 1,
    explanation: 'Soldabilidade é a propriedade que indica a capacidade de um material de ser soldado de forma a obter uma união com qualidade.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['soldabilidade', 'propriedade']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-003',
    question: 'A diferença entre soldadura e brasagem é:',
    options: [
      'Não há diferença',
      'Na brasagem apenas o material de adição funde',
      'Na soldadura usa-se menos calor',
      'A brasagem é sempre mais forte'
    ],
    answer: 1,
    explanation: 'Na soldadura o material de base funde. Na brasagem, apenas o material de adição funde, abaixo do ponto de fusão do material base.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['brasagem', 'diferença', 'soldadura']
  },

  // TIPOS DE JUNTAS
  {
    type: 'mcq',
    id: 'sold-mcq-004',
    question: 'Os cinco tipos básicos de juntas são:',
    options: [
      'Topo, lateral, angular, T, sobreposta',
      'Topo a topo, sobreposta, em T, de ângulo, rebordada',
      'Interna, externa, plana, curva, mista',
      'Circular, quadrada, triangular, hexagonal, oval'
    ],
    answer: 1,
    explanation: 'Os cinco tipos básicos de juntas são: topo a topo, sobreposta, em T, de ângulo e rebordada.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['juntas', 'tipos']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-005',
    question: 'O chanfro é:',
    options: [
      'Um tipo de eletrodo',
      'A abertura entre peças para contenção da soldadura',
      'Um defeito de soldadura',
      'Um tipo de gás de proteção'
    ],
    answer: 1,
    explanation: 'O chanfro é a abertura entre as duas peças a soldar, criando espaço para contenção da soldadura.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['chanfro', 'preparação']
  },

  // PROCESSOS POR ARCO
  {
    type: 'mcq',
    id: 'sold-mcq-006',
    question: 'No processo SER (Eletrodo Revestido):',
    options: [
      'O eletrodo não se consome',
      'O eletrodo é consumível e o revestimento protege o arco',
      'Não há arco elétrico',
      'Us-se apenas gás de proteção'
    ],
    answer: 1,
    explanation: 'No SER, o eletrodo é consumível (metal) e o revestimento protege o arco e adiciona material à solda.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['SER', 'eletrodo revestido', 'processo']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-007',
    question: 'No processo TIG (Tungsten Inert Gas):',
    options: [
      'O eletrodo é consumível',
      'O eletrodo de tungsténio é não consumível',
      'Não usa gás de proteção',
      'É um processo de resistência'
    ],
    answer: 1,
    explanation: 'O TIG usa eletrodo de tungsténio não consumível e gás inerte (argão) para proteção.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['TIG', 'tungsténio', 'processo']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-008',
    question: 'O processo MAG usa:',
    options: [
      'Gás inerte (Argão)',
      'Gás ativo (CO2 ou mistura)',
      'Apenas ar atmosférico',
      'Não usa gás'
    ],
    answer: 1,
    explanation: 'MAG (Metal Active Gas) usa gás ativo como CO2 ou misturas Argão/CO2. MIG usa gás inerte.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['MAG', 'MIG', 'gás de proteção']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-009',
    question: 'No arco submerso:',
    options: [
      'O arco é visível',
      'O arco é coberto por fluxo granular',
      'Não há fusão',
      'Usa-se apenas para alumínio'
    ],
    answer: 1,
    explanation: 'No arco submerso, o arco elétrico é coberto por uma camada de fluxo granular fundido, protegendo a solda.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['arco submerso', 'fluxo', 'processo']
  },

  // RESISTÊNCIA
  {
    type: 'mcq',
    id: 'sold-mcq-010',
    question: 'A soldadura por resistência gera calor por:',
    options: [
      'Combustão',
      'Passagem de corrente elétrica através da resistência dos materiais',
      'Fricção',
      'Radiação laser'
    ],
    answer: 1,
    explanation: 'A soldadura por resistência gera calor pela passagem de corrente elétrica através da resistência ao contacto dos materiais.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['resistência', 'princípio', 'calor']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-011',
    question: 'A soldadura por ponto é muito usada em:',
    options: [
      'Construção naval',
      'Indústria automóvel para chapas finas',
      'Soldagem de tubos',
      'Reparação de estruturas'
    ],
    answer: 1,
    explanation: 'A soldadura por ponto é muito usada na indústria automóvel para unir chapas finas em série.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['ponto', 'resistência', 'automóvel']
  },

  // OUTROS PROCESSOS
  {
    type: 'mcq',
    id: 'sold-mcq-012',
    question: 'A soldadura por fricção (FSW) é:',
    options: [
      'Um processo de fusão',
      'Um processo no estado sólido',
      'Um processo de brasagem',
      'Um corte térmico'
    ],
    answer: 1,
    explanation: 'A soldadura por fricção e mistura (FSW) é um processo no estado sólido onde o metal não é fundido.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['fricção', 'FSW', 'estado sólido']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-013',
    question: 'A soldadura laser é caracterizada por:',
    options: [
      'Baixa precisão',
      'Feixe de luz concentrado com precisão extrema',
      'Uso apenas para materiais grossos',
      'Processo muito lento'
    ],
    answer: 1,
    explanation: 'A soldadura laser usa feixe de luz altamente concentrado, permitindo precisão extrema e alta velocidade.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['laser', 'precisão', 'processo']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-014',
    question: 'A oxiacetilénica usa:',
    options: [
      'Arco elétrico',
      'Chama de combustão entre oxigénio e acetileno',
      'Fricção mecânica',
      'Raio laser'
    ],
    answer: 1,
    explanation: 'A soldadura oxiacetilénica usa calor de uma chama de combustão entre oxigénio e acetileno.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['oxiacetilénica', 'chama', 'processo']
  },

  // DEFEITOS E QUALIDADE
  {
    type: 'mcq',
    id: 'sold-mcq-015',
    question: 'A "mordedura" na soldadura é:',
    options: [
      'Um tipo de junta',
      'Penetração excessiva do cordão na peça adjacente',
      'Um eletrodo',
      'Um gás de proteção'
    ],
    answer: 1,
    explanation: 'A mordedura é a penetração excessiva do cordão de solda na peça adjacente, enfraquecendo a zona.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['mordedura', 'defeito']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-016',
    question: 'A falta de fusão é causada por:',
    options: [
      'Calor excessivo',
      'Calor insuficiente ou técnica inadequada',
      'Gás de proteção em excesso',
      'Velocidade muito baixa'
    ],
    answer: 1,
    explanation: 'A falta de fusão ocorre quando há calor insuficiente ou técnica inadequada, impedindo a união completa.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['falta de fusão', 'defeito']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-017',
    question: 'A ZTA (Zona Termicamente Afetada) é:',
    options: [
      'A zona de fusão',
      'A região do metal base próxima à solda que sofre ciclo térmico',
      'O eletrodo',
      'O gás de proteção'
    ],
    answer: 1,
    explanation: 'A ZTA é a região do metal base próxima à solda que sofre aquecimento e arrefecimento, podendo ter alterações metalúrgicas.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['ZTA', 'zona afetada', 'metalurgia']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-018',
    question: 'O contrafogo é uma técnica para:',
    options: [
      'Aumentar a velocidade',
      'Compensar distorções por contração',
      'Reduzir a temperatura',
      'Aplicar o gás de proteção'
    ],
    answer: 1,
    explanation: 'O contrafogo é uma técnica de soldagem que prevê deformações para compensar as distorções por contração.',
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['contrafogo', 'distorções', 'compensação']
  },

  // ENSAIOS
  {
    type: 'mcq',
    id: 'sold-mcq-019',
    question: 'Raios-X e ultra-sons são ensaios:',
    options: [
      'Destrutivos',
      'Não destrutivos',
      'Mecânicos destrutivos',
      'Químicos'
    ],
    answer: 1,
    explanation: 'Raios-X e ultra-sons são ensaios não destrutivos (END) que detectam defeitos internos sem danificar a peça.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['END', 'raios-X', 'ultra-sons', 'controlo de qualidade']
  },
  {
    type: 'mcq',
    id: 'sold-mcq-020',
    question: 'O ensaio de dobra é:',
    options: [
      'Um ensaio não destrutivo',
      'Um ensaio destrutivo',
      'Um ensaio de dureza',
      'Um ensaio de corrosão'
    ],
    answer: 1,
    explanation: 'O ensaio de dobra é um ensaio destrutivo que avalia a ductilidade e qualidade da solda.',
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['ensaio de dobra', 'destrutivo', 'qualidade']
  }
];

export const soldaduraQuestionsDev: QuestionDev[] = [
  {
    type: 'development',
    id: 'sold-dev-001',
    question: 'Compare os processos TIG, MIG/MAG e SER, indicando vantagens, desvantagens e aplicações.',
    expectedPoints: [
      'TIG: eletrodo não consumível (tungsténio), gás inerte, alta qualidade, controle preciso',
      'Vantagens TIG: qualidade superior, sem respingos, para todos os metais',
      'Desvantagens TIG: mais lento, requer maior habilidade',
      'MIG/MAG: eletrodo consumível em fio, alta produtividade',
      'Diferença MIG (gás inerte) vs MAG (gás ativo)',
      'SER: eletrodo revestido, portátil, versátil',
      'Aplicações típicas de cada processo'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'soldadura',
    tags: ['TIG', 'MIG', 'MAG', 'SER', 'comparação']
  },
  {
    type: 'development',
    id: 'sold-dev-002',
    question: 'Explique os defeitos mais comuns na soldadura, suas causas e formas de prevenção.',
    expectedPoints: [
      'Porosidade: gases, contaminação, umidade no eletrodo',
      'Falta de fusão: calor insuficiente, técnica inadequada',
      'Trincas: hidrogénio, tensões residuais, endurecimento',
      'Inclusões de escória: limpeza inadequada entre passes',
      'Mordedura: corrente excessiva, velocidade inadequada',
      'Deformações: expansão térmica, contração',
      'Prevenção de cada defeito'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'soldadura',
    tags: ['defeitos', 'qualidade', 'prevenção']
  },
  {
    type: 'development',
    id: 'sold-dev-003',
    question: 'Descreva a ZTA (Zona Termicamente Afetada) e as alterações que pode sofrer.',
    expectedPoints: [
      'Definição: região do metal base próxima à solda que sofre ciclo térmico',
      'Não é fundida mas é aquecida',
      'Alterações: mudanças microestruturais, endurecimento ou amolecimento',
      'Tensões residuais',
      'Efeitos nocivos: fragilização, redução de propriedades',
      'Formas de minimizar: pré-aquecimento, controlo térmico'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['ZTA', 'metalurgia', 'alterações']
  },
  {
    type: 'development',
    id: 'sold-dev-004',
    question: 'Explique os ensaios destrutivos e não destrutivos usados em soldadura.',
    expectedPoints: [
      'Ensaios destrutivos: tração, dobra, impacto, macrografia, dureza',
      'Objetivos dos ensaios destrutivos',
      'Ensaios não destrutivos: raios-X, ultra-sons, líquidos penetrantes, partículas magnéticas',
      'Princípio de cada END',
      'Vantagens e limitações',
      'Quando usar cada tipo'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['ensaios', 'END', 'controlo de qualidade']
  }
];

export const soldaduraQuestionsCalc: QuestionCalc[] = [
  {
    type: 'calculation',
    id: 'sold-calc-001',
    question: 'Calcular a potência elétrica para soldagem com corrente de 200 A e tensão de 25 V.',
    data: 'I = 200 A\nU = 25 V',
    solution: 'P = 5 kW',
    steps: [
      'Fórmula: P = U × I',
      'P = 25 × 200',
      'P = 5000 W = 5 kW'
    ],
    formula: 'P = U × I',
    maxScore: 10,
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['potência', 'cálculo elétrico']
  },
  {
    type: 'calculation',
    id: 'sold-calc-002',
    question: 'Calcular o rendimento de um processo de soldagem sabendo que a energia de entrada foi 10 kJ e a energia útil foi 3 kJ.',
    data: 'E_entrada = 10 kJ\nE_util = 3 kJ',
    solution: 'η = 30%',
    steps: [
      'Fórmula: η = (E_util / E_entrada) × 100',
      'η = (3 / 10) × 100',
      'η = 30%'
    ],
    formula: 'η = (E_util / E_entrada) × 100',
    maxScore: 10,
    difficulty: 'easy',
    module: 'soldadura',
    tags: ['rendimento', 'eficiência']
  }
];

export const soldaduraQuestionsCompare: QuestionCompare[] = [
  {
    type: 'comparison',
    id: 'sold-comp-001',
    question: 'Compare soldadura por fusão e soldadura no estado sólido.',
    itemA: 'Soldadura por fusão',
    itemB: 'Soldadura no estado sólido',
    comparisonPoints: [
      'Temperatura: material base funde (fusão) vs temperatura inferior à fusão (sólido)',
      'Metal de adição: geralmente sim (fusão) vs frequentemente não (sólido)',
      'ZTA: mais pronunciada (fusão) vs mínima ou ausente (sólido)',
      'Exemplos: TIG, MIG, SER (fusão) vs fricção, ultra-sons (sólido)',
      'Aplicações: estruturas gerais (fusão) vs materiais sensíveis ao calor (sólido)',
      'Precisão: variável (fusão) vs geralmente alta (sólido)'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['fusão', 'estado sólido', 'comparação']
  },
  {
    type: 'comparison',
    id: 'sold-comp-002',
    question: 'Compare soldadura e brasagem.',
    itemA: 'Soldadura',
    itemB: 'Brasagem',
    comparisonPoints: [
      'Temperatura: material base funde (soldadura) vs apenas MA funde (brasagem)',
      'Temperatura MA: acima do ponto de fusão da base (soldadura) vs abaixo (brasagem)',
      'Resistência: geralmente mais alta (soldadura) vs mais baixa (brasagem)',
      'Aplicações: estruturas de carga (soldadura) vs junções eletrónicas, tubagens (brasagem)',
      'Distorções: maiores (soldadura) vs menores (brasagem)',
      'Materiais: mais limitados (soldadura) vs versátil (brasagem)'
    ],
    maxScore: 25,
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['soldadura', 'brasagem', 'comparação']
  }
];

export const soldaduraQuestionsAnalysis: QuestionAnalysis[] = [
  {
    type: 'analysis',
    id: 'sold-ana-001',
    scenario: 'Após soldar uma estrutura em aço carbono, observaram-se trincas na zona da solda algumas horas após o arrefecimento.',
    questions: [
      'Qual a causa mais provável das trincas?',
      'Que medidas podem ser tomadas para evitar este problema?'
    ],
    expectedAnswers: [
      'Causa provável: Fissuras a frio por hidrogénio (hydrogen induced cracking) devido a hidrogénio no eletrodo/fio, tensões residuais e endurecimento da ZTA',
      'Medidas: usar eletrodos/fios secos, pré-aquecimento, pós-aquecimento (PWHT), controlo da velocidade de arrefecimento, escolha adequada do consumível'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'soldadura',
    tags: ['trincas', 'hidrogénio', 'fissuras a frio']
  },
  {
    type: 'analysis',
    id: 'sold-ana-002',
    scenario: 'Uma empresa precisa soldar tanques de alumínio para indústria alimentar, exigindo alta qualidade superficial e ausência de contaminação.',
    questions: [
      'Que processo de soldadura recomendaria?',
      'Justifique a sua escolha.'
    ],
    expectedAnswers: [
      'Processo recomendado: TIG (Tungsten Inert Gas)',
      'Justificação: alta qualidade, sem respingos, excelente para alumínio, controle preciso do calor, proteção com argão evita contaminação, boa aparência superficial'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'soldadura',
    tags: ['TIG', 'alumínio', 'seleção de processo']
  }
];

export const soldaduraAllQuestions = [
  ...soldaduraQuestionsMCQ,
  ...soldaduraQuestionsDev,
  ...soldaduraQuestionsCalc,
  ...soldaduraQuestionsCompare,
  ...soldaduraQuestionsAnalysis
];
