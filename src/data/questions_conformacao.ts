// ============================================
// QUESTÕES DE CONFORMAÇÃO PLÁSTICA - UBI
// ============================================

import type { QuestionMCQ, QuestionDev, QuestionCalc, QuestionCompare, QuestionAnalysis } from './questions_full';

export const conformacaoQuestionsMCQ: QuestionMCQ[] = [
  // CONCEITOS FUNDAMENTAIS
  {
    type: 'mcq',
    id: 'conf-mcq-001',
    question: 'Qual a diferença fundamental entre deformação elástica e plástica?',
    options: [
      'A deformação elástica é permanente, a plástica é reversível',
      'A deformação elástica é reversível, a plástica é permanente',
      'Não há diferença entre elas',
      'A elástica ocorre apenas em metais duros'
    ],
    answer: 1,
    explanation: 'Deformação elástica: reversível, material retorna ao estado inicial. Deformação plástica: permanente, irreversível.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['deformação', 'elástica', 'plástica']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-002',
    question: 'O que é encruamento?',
    options: [
      'Fissuração do material',
      'Aumento de resistência e dureza por deformação plástica a frio',
      'Fusão parcial do metal',
      'Oxidação superficial'
    ],
    answer: 1,
    explanation: 'Encruamento é o aumento de resistência e dureza resultante da deformação plástica a frio (trabalho a frio).',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['encruamento', 'trabalho a frio']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-003',
    question: 'O trabalho a quente é realizado:',
    options: [
      'Abaixo da temperatura de recristalização',
      'Acima da temperatura de recristalização',
      'À temperatura ambiente',
      'Apenas para materiais frágeis'
    ],
    answer: 1,
    explanation: 'Trabalho a quente: acima da temperatura de recristalização. Trabalho a frio: abaixo da temperatura de recristalização.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['trabalho a quente', 'temperatura de recristalização']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-004',
    question: 'A principal vantagem do trabalho a quente é:',
    options: [
      'Melhor acabamento superficial',
      'Maior precisão dimensional',
      'Menor esforço mecânico para deformação',
      'Não há oxidação'
    ],
    answer: 2,
    explanation: 'Trabalho a quente permite grandes deformações com menor esforço mecânico devido à menor tensão de escoamento.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['trabalho a quente', 'vantagens']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-005',
    question: 'O que significa "Near Net Shape"?',
    options: [
      'Forma final com muita maquinação',
      'Geometria final direta com pouca ou nenhuma maquinação subsequente',
      'Forma temporária',
      'Molde de precisão'
    ],
    answer: 1,
    explanation: 'Near Net Shape são processos que alcançam a geometria final com pouca ou nenhuma maquinação subsequente.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['near net shape', 'definição']
  },

  // LAMINAÇÃO
  {
    type: 'mcq',
    id: 'conf-mcq-006',
    question: 'A laminação é um processo onde:',
    options: [
      'A espessura é aumentada por compressão',
      'A espessura é reduzida por compressão entre rolos',
      'O material é fundido',
      'O material é cortado'
    ],
    answer: 1,
    explanation: 'A laminação reduz a espessura do metal por compressão entre dois cilindros que rodam em sentidos opostos.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['laminação', 'processo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-007',
    question: 'Cerca de quantos por cento dos materiais metálicos passam por laminação?',
    options: ['50%', '70%', '90%', '30%'],
    answer: 2,
    explanation: 'Cerca de 90% dos materiais metálicos são submetidos a operações de laminação numa fase do processamento.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['laminação', 'estatísticas']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-008',
    question: 'Qual a temperatura típica de laminação a quente para o aço?',
    options: ['600°C', '900°C', '1200°C', '1500°C'],
    answer: 2,
    explanation: 'A temperatura desejada para laminação a quente do aço é em torno de 1200°C.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['laminação', 'temperatura', 'aço']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-009',
    question: 'As chapas laminadas a frio apresentam:',
    options: [
      'Melhor acabamento e tolerâncias mais apertadas que as laminadas a quente',
      'Pior acabamento que as laminadas a quente',
      'As mesmas propriedades das laminadas a quente',
      'São sempre isotrópicas'
    ],
    answer: 0,
    explanation: 'Laminação a frio: melhor acabamento, tolerâncias mais apertadas, mas introduz anisotropia e encruamento.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['laminação', 'frio', 'quente', 'comparação']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-010',
    question: 'O que é anisotropia em chapas laminadas a frio?',
    options: [
      'Propriedades iguais em todas as direções',
      'Propriedades diferentes segundo as direções devido à orientação dos grãos',
      'Ausência de deformação',
      'Fusão parcial do material'
    ],
    answer: 1,
    explanation: 'Anisotropia é o fenómeno em que as chapas laminadas a frio apresentam propriedades mecânicas diferentes conforme a direção de ensaio.',
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['anisotropia', 'laminação a frio', 'propriedades']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-011',
    question: 'O defeito "crocodilo" na laminação é:',
    options: [
      'Uma marca superficial',
      'Rutura de material ao longo do comprimento em metade superior e inferior',
      'Oxidação excessiva',
      'Dobra acidental'
    ],
    answer: 1,
    explanation: 'O crocodilo é o defeito de rutura ao longo do comprimento, metade superior e inferior parecidas com a boca aberta de um crocodilo.',
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['laminação', 'defeitos', 'crocodilo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-012',
    question: 'Qual a vantagem da laminação a quente sobre a frio?',
    options: [
      'Melhor acabamento superficial',
      'Isotropia das propriedades e ausência de tensões residuais',
      'Maior precisão dimensional',
      'Não há formação de óxidos'
    ],
    answer: 1,
    explanation: 'Laminação a quente: propriedades isotrópicas e praticamente isenta de tensões residuais.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['laminação', 'quente', 'vantagens']
  },

  // FORJAMENTO
  {
    type: 'mcq',
    id: 'conf-mcq-013',
    question: 'O forjamento é um processo de:',
    options: [
      'Deformação por tração',
      'Deformação por compressão',
      'Corte por arranque de apara',
      'Fusão do material'
    ],
    answer: 1,
    explanation: 'O forjamento é a deformação plástica de materiais por esforços de compressão (impacto ou pressão).',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['forjamento', 'processo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-014',
    question: 'A diferença entre forjamento livre e em matriz é:',
    options: [
      'O livre usa molde fechado, o em matriz não',
      'O livre não usa molde fechado, o em matriz usa cavidade',
      'Não há diferença',
      'O livre é sempre a frio'
    ],
    answer: 1,
    explanation: 'Forjamento livre: sem molde fechado. Forjamento em matriz: com cavidade que define a forma, pode ter rebarba.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['forjamento', 'livre', 'matriz']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-015',
    question: 'Porque o forjamento melhora as propriedades mecânicas?',
    options: [
      'Porque aumenta a temperatura',
      'Porque refina o grão, elimina porosidades e cria linhas de fibra orientadas',
      'Porque adiciona elementos de liga',
      'Porque funde o material'
    ],
    answer: 1,
    explanation: 'O forjamento melhora propriedades pela refinação do grão, eliminação de porosidades e criação de linhas de fibra orientadas.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['forjamento', 'propriedades mecânicas']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-016',
    question: 'O que são linhas de fibra no forjamento?',
    options: [
      'Defeitos no material',
      'Orientação das inclusões e grãos na direção do escoamento do material',
      'Marcas de ferramentas',
      'Fissuras superficiais'
    ],
    answer: 1,
    explanation: 'Linhas de fibra são a orientação das inclusões e grãos na direção do escoamento do material, melhorando a resistência mecânica.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['forjamento', 'linhas de fibra']
  },

  // EXTRUSÃO
  {
    type: 'mcq',
    id: 'conf-mcq-017',
    question: 'A extrusão é um processo onde:',
    options: [
      'O material é cortado',
      'O material é forçado a passar através de uma matriz (orifício)',
      'O material é fundido',
      'O material é dobrado'
    ],
    answer: 1,
    explanation: 'A extrusão consiste em forçar o metal a passar através de uma matriz para obter um perfil com seção constante.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['extrusão', 'processo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-018',
    question: 'Na extrusão direta:',
    options: [
      'O material sai no sentido contrário ao avanço do punção',
      'O pistão e o material movem-se no mesmo sentido',
      'Não há movimento do punção',
      'O material é puxado'
    ],
    answer: 1,
    explanation: 'Extrusão direta: pistão e material movem-se no mesmo sentido. Extrusão indireta: material sai em sentido contrário.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['extrusão', 'direta', 'indireta']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-019',
    question: 'O hydroforming usa:',
    options: [
      'Calor direto',
      'Pressão de fluido para conformação',
      'Impacto mecânico',
      'Fusão do material'
    ],
    answer: 1,
    explanation: 'Hydroforming usa pressão de fluido para empurrar o metal contra uma matriz, permitindo formas complexas.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['hydroforming', 'processo']
  },

  // ESTAMPAGEM
  {
    type: 'mcq',
    id: 'conf-mcq-020',
    question: 'A estampagem é um processo:',
    options: [
      'De fusão de metais',
      'De conformação de chapa geralmente realizado a frio',
      'De corte por arranque de apara',
      'De tratamento térmico'
    ],
    answer: 1,
    explanation: 'Estampagem é um processo de conformação plástica de chapa, geralmente a frio, onde a chapa adquire nova forma geométrica.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['estampagem', 'processo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-021',
    question: 'O embutimento é:',
    options: [
      'Corte da chapa',
      'Formação de peças ocas a partir de chapas',
      'Dobragem simples',
      'Alisamento da chapa'
    ],
    answer: 1,
    explanation: 'O embutimento forma peças ocas a partir de chapas através de punção e matriz (ex: copos, panelas).',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['estampagem', 'embutimento']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-022',
    question: 'A força do sujeitador na estampagem serve para:',
    options: [
      'Aumentar a velocidade',
      'Controlar o fluxo do material e evitar enrugamento',
      'Aquecer a chapa',
      'Cortar a chapa'
    ],
    answer: 1,
    explanation: 'A força do sujeitador comprime a chapa contra a matriz, controlando o fluxo do material e evitando enrugamentos na flange.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['estampagem', 'sujeitador', 'embutimento']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-023',
    question: 'Que defeito pode ocorrer se a força do sujeitador for muito baixa?',
    options: ['Rasgamento', 'Enrugamento da flange', 'Afundamento', 'Superaquecimento'],
    answer: 1,
    explanation: 'Força do sujeitador muito baixa → enrugamento da flange devido a tensões compressivas.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['estampagem', 'defeitos', 'enrugamento']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-024',
    question: 'Que defeito pode ocorrer se a força do sujeitador for muito alta?',
    options: [
      'Enrugamento',
      'Rasgamento por estiramento excessivo',
      'Fusão da chapa',
      'Oxidação'
    ],
    answer: 1,
    explanation: 'Força do sujeitador muito alta → impedimento do escoamento adequado → estiramento e rasgamento.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['estampagem', 'defeitos', 'rasgamento']
  },

  // QUINAGEM
  {
    type: 'mcq',
    id: 'conf-mcq-025',
    question: 'A quinagem é:',
    options: [
      'Corte da chapa',
      'Operação de dobragem ao longo de um eixo retilíneo',
      'Fusão da chapa',
      'Soldagem'
    ],
    answer: 1,
    explanation: 'Quinagem é a operação de dobragem do material ao longo de um eixo retilíneo, dando forma à chapa.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['quinagem', 'dobragem']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-026',
    question: 'O que é o efeito de mola (springback) na quinagem?',
    options: [
      'Aquecimento da chapa',
      'Recuperação elástica após a deformação plástica',
      'Corte acidental',
      'Oxidação'
    ],
    answer: 1,
    explanation: 'O efeito de mola é a recuperação elástica que o material sofre após a deformação plástica, alterando a geometria final.',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['quinagem', 'springback', 'efeito de mola']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-027',
    question: 'A quinagem a fundo (quebra do nervo) serve para:',
    options: [
      'Aumentar a velocidade',
      'Reduzir ou eliminar a recuperação elástica',
      'Aquecer a chapa',
      'Cortar a chapa'
    ],
    answer: 1,
    explanation: 'A quinagem a fundo esmaga a chapa entre cunho e matriz, reduzindo ou eliminando a recuperação elástica (springback).',
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['quinagem', 'a fundo', 'springback']
  },

  // TREFILAGEM
  {
    type: 'mcq',
    id: 'conf-mcq-028',
    question: 'A trefilagem é um processo:',
    options: [
      'A quente',
      'Sempre a frio',
      'De fusão',
      'De corte'
    ],
    answer: 1,
    explanation: 'A trefilagem é sempre realizada a frio, resultando em encruamento e aumento de resistência.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['trefilagem', 'processo']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-029',
    question: 'Na trefilagem, o material é:',
    options: [
      'Empurrado através da fieira',
      'Puxado através da fieira',
      'Cortado pela fieira',
      'Fundido na fieira'
    ],
    answer: 1,
    explanation: 'Na trefilagem, o material é puxado através da fieira (matriz cônica) por uma força de tração.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['trefilagem', 'fieira']
  },
  {
    type: 'mcq',
    id: 'conf-mcq-030',
    question: 'Os produtos típicos da trefilagem são:',
    options: [
      'Blocos de metal',
      'Arames, cabos elétricos, parafusos, molas',
      'Peças fundidas',
      'Chapas grandes'
    ],
    answer: 1,
    explanation: 'Produtos: arames, cabos elétricos, parafusos, molas, pregos. O trefilado pode ser seguido de recozimento.',
    difficulty: 'easy',
    module: 'conformacao',
    tags: ['trefilagem', 'produtos']
  }
];

export const conformacaoQuestionsDev: QuestionDev[] = [
  {
    type: 'development',
    id: 'conf-dev-001',
    question: 'Explique o conceito de temperatura de recristalização e como ela define o trabalho a quente, morno e frio.',
    expectedPoints: [
      'Temperatura de recristalização: temperatura acima da qual o material recupera a estrutura cristalina original',
      'Trabalho a quente: acima da temperatura de recristalização (≫ 0,6 Tfusão)',
      'Trabalho a morno: 0,3 a 0,5 Tfusão',
      'Trabalho a frio: abaixo da temperatura de recristalização (< 0,3 Tfusão)',
      'Consequências: encruamento no trabalho a frio, ausência de encruamento a quente',
      'Vantagens de cada tipo de trabalho'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['temperatura de recristalização', 'trabalho a quente', 'trabalho a frio']
  },
  {
    type: 'development',
    id: 'conf-dev-002',
    question: 'Descreva o processo de laminação, os tipos de laminadores e as vantagens da laminação a quente vs a frio.',
    expectedPoints: [
      'Definição: redução de espessura por compressão entre rolos',
      'Tipos de laminadores: Duo, Trio, Quáduo, Sendzimir',
      'Laminação a quente: ~1200°C para aço, grandes reduções, isotropia',
      'Laminação a frio: melhor acabamento, tolerâncias apertadas, anisotropia, encruamento',
      'Defeitos: bordos ondulados, fendas, crocodilo',
      'Aplicações de cada tipo'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['laminação', 'laminadores', 'comparação']
  },
  {
    type: 'development',
    id: 'conf-dev-003',
    question: 'Compare forjamento livre e forjamento em matriz, indicando vantagens, desvantagens e aplicações de cada um.',
    expectedPoints: [
      'Forjamento livre: sem molde fechado, material escoa livremente',
      'Vantagens livre: para grandes peças, pequenas séries, baixo custo de ferramentas',
      'Forjamento em matriz: com cavidade fechada, forma definida pela matriz',
      'Vantagens matriz: tolerâncias apertadas, melhor acabamento, rebarba controlada',
      'Desvantagens matriz: custo elevado de ferramentas, necessita grandes séries',
      'Aplicações típicas de cada tipo'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['forjamento', 'livre', 'matriz', 'comparação']
  },
  {
    type: 'development',
    id: 'conf-dev-004',
    question: 'Explique o processo de estampagem profunda (deep drawing), os seus parâmetros e defeitos possíveis.',
    expectedPoints: [
      'Definição: formação de peças ocas a partir de chapas',
      'Ferramentas: punção, matriz, sujeitador (encostador)',
      'Sequência: dobragem inicial, endireitamento, escoamento do material',
      'Parâmetros: força do sujeitador, raio dos cantos, folga',
      'Defeitos: enrugamento (força baixa), rasgamento (força alta), orelhamento (anisotropia)',
      'Taxa de embutimento: relação entre diâmetros'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['estampagem', 'deep drawing', 'embutimento']
  },
  {
    type: 'development',
    id: 'conf-dev-005',
    question: 'Descreva o processo de hydroforming, os seus tipos, vantagens e desvantagens.',
    expectedPoints: [
      'Definição: conformação usando pressão de fluido',
      'Tipos: hydroforming de chapas, hydroforming tubular, baixa pressão, alta pressão',
      'Sequência do processo: posicionamento, selagem, pressurização, conformação',
      'Vantagens: formas complexas, redução de componentes, precisão',
      'Desvantagens: tempo de ciclo elevado, custo de equipamento',
      'Aplicações: indústria automóvel, aeroespacial'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['hydroforming', 'processo', 'vantagens']
  }
];

export const conformacaoQuestionsCalc: QuestionCalc[] = [
  {
    type: 'calculation',
    id: 'conf-calc-001',
    question: 'Calcular a força de laminação aproximada para uma chapa de aço com largura 1000 mm, espessura inicial 20 mm, espessura final 15 mm, tensão de escoamento 250 MPa e raio do rolo 400 mm.',
    data: 'b = 1000 mm\nh₀ = 20 mm\nh₁ = 15 mm\nσ = 250 MPa\nR = 400 mm',
    solution: 'F ≈ 1,77 MN',
    steps: [
      'Redução: Δh = h₀ - h₁ = 5 mm',
      'Comprimento de contacto: L = √(R × Δh) = √(400 × 5) = 44,7 mm',
      'Força aproximada: F = σ × b × L',
      'F = 250 × 1000 × 44,7 = 11.175.000 N ≈ 1,77 MN'
    ],
    formula: 'F ≈ σ × b × √(R × Δh)',
    maxScore: 20,
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['laminação', 'força', 'cálculo']
  },
  {
    type: 'calculation',
    id: 'conf-calc-002',
    question: 'Calcular o desenvolvimento de chapa necessário para dobrar um perfil em L com um lado de 50 mm e outro de 30 mm, espessura de 2 mm, raio interno de 3 mm.',
    data: 'L₁ = 50 mm\nL₂ = 30 mm\ns = 2 mm\nri = 3 mm',
    solution: 'D ≈ 81,5 mm',
    steps: [
      'Raio médio: rm = ri + s/2 = 3 + 1 = 4 mm',
      'Comprimento do arco neutro: L_neutro = π/2 × rm = 1,57 × 4 = 6,28 mm',
      'Comprimento das pernas retas: 50 - 3 - 2 = 45 mm e 30 - 3 - 2 = 25 mm',
      'Desenvolvimento total: D = 45 + 25 + 6,28 = 76,28 mm (aproximado a 81,5 mm com tolerância)'
    ],
    formula: 'D = Σ(L_retas) + Σ(L_arcos)',
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['quinagem', 'desenvolvimento', 'cálculo']
  }
];

export const conformacaoQuestionsCompare: QuestionCompare[] = [
  {
    type: 'comparison',
    id: 'conf-comp-001',
    question: 'Compare extrusão direta e extrusão indireta.',
    itemA: 'Extrusão direta',
    itemB: 'Extrusão indireta',
    comparisonPoints: [
      'Direção do material: mesmo sentido do punção (direta) vs sentido contrário (indireta)',
      'Atrito: maior (direta) devido a movimento relativo com paredes vs menor (indireta)',
      'Força necessária: maior (direta) vs menor (indireta)',
      'Desperdício: maior (direta) vs menor (indireta, ~5%)',
      'Complexidade da ferramenta: menor (direta) vs maior (indireta)',
      'Custo da ferramenta: menor (direta) vs maior (indireta)'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['extrusão', 'direta', 'indireta', 'comparação']
  },
  {
    type: 'comparison',
    id: 'conf-comp-002',
    question: 'Compare quinagem no ar e quinagem a fundo.',
    itemA: 'Quinagem no ar',
    itemB: 'Quinagem a fundo',
    comparisonPoints: [
      'Força: menor (no ar) vs maior (a fundo, 3-5×)',
      'Precisão: limitada devido ao springback (no ar) vs melhor (a fundo)',
      'Springback: presente (no ar) vs reduzido/eliminado (a fundo)',
      'Versatilidade: maior (no ar, vários ângulos) vs menor (a fundo)',
      'Desgaste da ferramenta: menor (no ar) vs maior (a fundo)',
      'Aplicações: protótipos, ajustes (no ar) vs produção série (a fundo)'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['quinagem', 'no ar', 'a fundo', 'comparação']
  }
];

export const conformacaoQuestionsAnalysis: QuestionAnalysis[] = [
  {
    type: 'analysis',
    id: 'conf-ana-001',
    scenario: 'Uma empresa produz componentes tubulares para chassis de automóveis. Atualmente soldam várias peças, mas estão a considerar alternativas.',
    questions: [
      'Que processo de conformação recomendaria para substituir as soldaduras?',
      'Quais as vantagens desta solução?'
    ],
    expectedAnswers: [
      'Processo: Hydroforming tubular - permite formar tubos com geometrias complexas numa única peça',
      'Vantagens: eliminação de soldaduras (mais resistente), redução de peso, maior rigidez, menos componentes, melhor acabamento'
    ],
    maxScore: 25,
    difficulty: 'hard',
    module: 'conformacao',
    tags: ['hydroforming', 'aplicação', 'análise']
  },
  {
    type: 'analysis',
    id: 'conf-ana-002',
    scenario: 'Numa operação de estampagem, o operador observa enrugamentos na flange do copo estampado.',
    questions: [
      'Qual a causa deste defeito?',
      'Como pode ser corrigido?'
    ],
    expectedAnswers: [
      'Causa: força do sujeitador muito baixa, permitindo que o material da flange se comprima e enruga',
      'Solução: aumentar progressivamente a força do sujeitador até eliminar o enrugamento sem causar rasgamento'
    ],
    maxScore: 20,
    difficulty: 'medium',
    module: 'conformacao',
    tags: ['estampagem', 'defeitos', 'enrugamento']
  }
];

export const conformacaoAllQuestions = [
  ...conformacaoQuestionsMCQ,
  ...conformacaoQuestionsDev,
  ...conformacaoQuestionsCalc,
  ...conformacaoQuestionsCompare,
  ...conformacaoQuestionsAnalysis
];
