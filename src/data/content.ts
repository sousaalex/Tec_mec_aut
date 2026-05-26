export interface Formula {
  name: string;
  formula: string;
  unit: string;
  description?: string;
}

export interface Video {
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Exercise {
  question: string;
  data: string;
  solution: string;
  steps?: string[];
}

export interface Topic {
  id: string;
  title: string;
  summary: string;
  content: string[];
  formulas?: Formula[];
  keyPoints?: string[];
  flashcards?: Flashcard[];
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  summary: string;
  color: string;
  topics: Topic[];
  videos: Video[];
  quiz: Question[];
  exercises?: Exercise[];
  formulas?: Formula[];
}

// ============================================
// MÓDULO: PROCESSOS DE CORTE
// ============================================
const corteModule: Module = {
  id: "corte",
  title: "Corte por Arranque de Apara",
  icon: "Scissors",
  color: "blue",
  summary: "Processos de corte por remoção de material: torneamento, fresagem, furação, brochamento, retificação.",
  topics: [
    {
      id: "intro-corte",
      title: "Introdução à Maquinação",
      summary: "História e evolução das máquinas-ferramenta desde o Paleolítico até ao CNC.",
      content: [
        "As origens das máquinas-ferramentas remontam ao período paleolítico superior, cerca de 6.000 A.C., onde os nossos ancestrais desenvolveram plainas primitivas utilizando madeira e pedra lascada.",
        "Afrescos Egípcios datando de 1500 A.C. mostram o trabalho com 'engenhos de furar' com ferramentas rotativas movidas a arco, que permaneceram como principal acionamento até ao século XVI.",
        "O século XVI trouxe a substituição dos arcos pelas rodas de água como fonte motriz. O francês Jacques Benson em 1569 foi um dos grandes impulsionadores do torneamento ornamental.",
        "Da Vinci desenvolveu esboços de máquinas-ferramenta com características revolucionárias. As brocas já contavam com canais helicoidais.",
        "Wilkinson, na Revolução Industrial, obteve tolerâncias não maiores do que um dedo em cilindros com 1829 mm de diâmetro. Esta melhoria permitiu a James Watt o desenvolvimento da máquina a vapor.",
        "Os primeiros tornos projetados segundo princípios modernos foram realizados pelo francês Vaucanson por volta de 1765.",
        "No início do século XX surgiram tornos universais com acionamento por correias. A evolução da eletrónica levou à criação da primeira máquina CNC (Comando Numérico Computadorizado).",
        "Nos últimos 40 anos, o uso de sistemas CAE, CAD, CAM e CAPP permitiu uma verdadeira revolução no projeto de máquinas-ferramentas."
      ],
      keyPoints: [
        "6000 A.C. - Plainas primitivas",
        "1500 A.C. - Furadeira de arco egípcia",
        "Século XVI - Roda de água como fonte motriz",
        "1765 - Torno moderno por Vaucanson",
        "Século XX - Desenvolvimento do CNC"
      ]
    },
    {
      id: "tecnologia-processo",
      title: "Tecnologia do Processo",
      summary: "Mecanismo de corte, formação da limalha e zonas de deformação.",
      content: [
        "O corte por arranque de apara é um processo tecnológico de alteração de forma através da remoção do material não necessário à obtenção de uma peça com forma geométrica definida.",
        "As peças metálicas fabricadas por processos metalúrgicos convencionais geralmente apresentam superfícies grosseiras que exigem acabamento.",
        "O processo possibilita: obtenção de pormenores impossíveis por processos convencionais, fabricação a custo mais baixo, acabamento de superfícies, e fabricação de peças a partir de blocos.",
        "Na operação de maquinação, uma parte do material é retirada pela ação de uma ferramenta de corte, produzindo uma apara (limalha) de forma geométrica normalmente irregular.",
        "Segundo a DIN 8580, a maquinação aplica-se a todos os processos onde ocorre remoção de material sob a forma de limalha.",
        "Existem três zonas fundamentais: Zona de deformação primária (corte), Zona de deformação secundária (atrito apara/ferramenta), Zona de atrito (ferramenta/peça).",
        "Um núcleo estacionário de material pode aparecer junto do gume - a 'aresta postiça de corte' - que altera a geometria do processo e afeta a qualidade superficial.",
        "A temperatura aumenta consideravelmente no desbaste pesado. Cerca de 90% do trabalho mecânico transforma-se em calor.",
        "A maquinabilidade reflete a facilidade de maquinar um material, medida pelo tempo de vida da ferramenta, acabamento superficial e potência necessária."
      ],
      keyPoints: [
        "Três tipos de apara: Contínua regular, Contínua irregular, Descontínua",
        "Material frágil → apara descontínua",
        "Material dúctil → apara contínua",
        "Aresta postiça altera geometria e qualidade",
        "90% do trabalho mecânico vira calor"
      ],
      flashcards: [
        { front: "O que é maquinação?", back: "Processo de alteração de forma por remoção de material sob a forma de limalha ou apara." },
        { front: "Quais as três zonas de deformação no corte?", back: "1. Zona de deformação primária (corte)\n2. Zona de deformação secundária (atrito apara/ferramenta)\n3. Zona de atrito (ferramenta/peça)" },
        { front: "O que é a aresta postiça?", back: "Núcleo estacionário de material aderente à face de ataque da ferramenta que altera a geometria do corte." }
      ]
    },
    {
      id: "balanco-energetico",
      title: "Balanço Energético e Forças",
      summary: "Distribuição de calor, forças de corte e trabalho realizado.",
      content: [
        "O desenvolvimento de calor no corte tem origem em três regiões: deformação primária (atrito interno), zona apara/ferramenta (atrito face de ataque), e face de saída (atrito com peça).",
        "Cerca de 90% do trabalho mecânico de maquinação transforma-se em calor, dissipatedo pela apara, peça, ferramenta e meio ambiente.",
        "Na operação de torneamento, a maior parte do calor é dissipada pela apara. Na furação, isso acontece pela peça.",
        "No torneamento de alumínio, 73% do calor pode ser escoado pela peça. Em aço, percentagem semelhante é escoada pela apara.",
        "Em aço de construção maquinado a 50 m/min, 75% do calor é gerado pela deformação plástica. A 200 m/min, esta fonte representa apenas 25%.",
        "O atrito entre apara e ferramenta pode ser reduzido por: melhorar acabamento da ferramenta, usar materiais de baixo coeficiente de atrito, aumentar velocidade de corte, aumentar ângulo de ataque, ou usar fluido de corte.",
        "Quando se reduz o coeficiente de atrito, o ângulo de corte aumenta e a espessura da apara reduz-se."
      ],
      formulas: [
        { name: "Potência de Corte", formula: "Pc = Fc × Vc / 60", unit: "kW", description: "Fc = força de corte (N), Vc = velocidade de corte (m/min)" },
        { name: "Força de Corte Específica", formula: "kc = Fc / A", unit: "N/mm²", description: "A = área de corte = ap × f" },
        { name: "Razão de Corte", formula: "r = h/hc = sin(φ) / cos(φ-γ)", unit: "adimensional", description: "h = espessura não deformada, hc = espessura da apara" }
      ]
    },
    {
      id: "parametros-corte",
      title: "Parâmetros de Corte",
      summary: "Velocidade, avanço, profundidade de corte e cálculo de tempos.",
      content: [
        "Velocidade de Corte (Vc): Velocidade relativa entre a ferramenta e a peça. É o parâmetro mais importante para a vida da ferramenta.",
        "Avanço (f): Deslocamento da ferramenta por cada rotação ou golpe. Afeta diretamente a rugosidade superficial.",
        "Profundidade de corte (ap): Espessura da camada de material removida na direção radial (torneamento) ou axial (fresagem).",
        "A escolha dos parâmetros depende do material da peça, material da ferramenta, tipo de operação, rigidez do sistema e acabamento desejado.",
        "A fórmula de Taylor relaciona velocidade de corte com vida da ferramenta: Vc × T^n = C, onde T é o tempo de vida e C e n são constantes.",
        "O tempo de torneamento pode ser calculado considerando o comprimento a usinar, o avanço e a rotação da peça.",
        "Para operações de desbaste, usa-se maior profundidade e avanço com velocidade moderada. Para acabamento, usa-se menor profundidade e avanço com velocidade mais alta."
      ],
      formulas: [
        { name: "Velocidade de Corte", formula: "Vc = (π × D × n) / 1000", unit: "m/min", description: "D = diâmetro (mm), n = rotação (rpm)" },
        { name: "Rotação", formula: "n = (Vc × 1000) / (π × D)", unit: "rpm", description: "Calcula a rotação necessária para uma dada velocidade de corte" },
        { name: "Tempo de Torneamento", formula: "T = L / (f × n)", unit: "min", description: "L = comprimento de usinagem (mm)" },
        { name: "Taxa de Remoção", formula: "Q = ap × f × Vc", unit: "cm³/min", description: "Volume de material removido por unidade de tempo" }
      ]
    },
    {
      id: "torneamento",
      title: "Torneamento",
      summary: "Maquinação de superfícies de revolução com ferramenta de corte.",
      content: [
        "O torneamento é o processo de maquinação mais antigo e mais utilizado. Consiste na remoção de material de uma peça rotativa usando uma ferramenta de corte com movimento linear.",
        "A peça realiza o movimento de corte (rotação) e a ferramenta realiza o movimento de avanço (linear).",
        "Operações principais: desbaste (remoção de grande quantidade de material), acabamento (qualidade superficial), faceamento (usinagem das faces), furação, rosqueamento.",
        "Tipos de torneamento: externo, interno (mandrilamento), de face, de forma, de corte, de ranhuras.",
        "As ferramentas de torneamento têm geometria definida por ângulos de incidência, de ataque, de folga e de ponta.",
        "O material das ferramentas pode ser aço rápido, metal duro, cerâmicas, cermets, diamante ou nitreto de boro cúbico (CBN).",
        "A escolha da geometria da ferramenta depende do material da peça, tipo de operação e condições de corte."
      ],
      flashcards: [
        { front: "Quem realiza o movimento de corte no torneamento?", back: "A peça (rotação)." },
        { front: "Quem realiza o movimento de avanço no torneamento?", back: "A ferramenta (movimento linear)." },
        { front: "Quais os principais tipos de torneamento?", back: "Externo, interno (mandrilamento), faceamento, de corte, de ranhuras." }
      ]
    },
    {
      id: "fresagem",
      title: "Fresagem",
      summary: "Uso de ferramenta rotativa multicortante para superfícies planas ou perfis.",
      content: [
        "A fresagem é um processo de maquinação onde a ferramenta (fresa) possui vários gumes e realiza o movimento de corte por rotação.",
        "Ao contrário do torneamento, na fresagem a ferramenta rota e a peça move-se linearmente (ou vice-versa nas fresadoras de portal).",
        "Tipos de fresagem: frontal (eixo perpendicular à superfície), periférica (eixo paralelo), de perfil, de cavidades, de roscas.",
        "Fresagem em concordância: o sentido de rotação da fresa é igual ao da avanço da peça. Melhor acabamento mas maior desgaste.",
        "Fresagem em oposição: o sentido de rotação é contrário ao avanço. Maior rugosidade mas menor desgaste.",
        "Ferramentas: fresas de topo, de face, de caixa, de formato, de roscar, de T, angulares.",
        "Centros de maquinação CNC combinam torneamento, fresagem e furação numa única máquina."
      ],
      keyPoints: [
        "Fresagem concordância: rotação = avanço → melhor acabamento",
        "Fresagem oposição: rotação ≠ avanço → menor desgaste",
        "Fresa tem múltiplos gumes de corte",
        "Ferramenta rotativa na fresagem"
      ]
    },
    {
      id: "furação",
      title: "Furação e Brocas",
      summary: "Operação para obtenção de furos cilíndricos.",
      content: [
        "A furação é a operação de maquinação usada para criar furos cilíndricos com brocas helicoidais.",
        "A broca é uma ferramenta com dois gumes principais, margens para guia, e canal helicoidal para evacuação da apara.",
        "Ângulos importantes da broca: ângulo de ponta (geralmente 118° ou 135°), ângulo de hélice, ângulo de incidência.",
        "Problemas comuns: desvio do eixo do furo (especialmente em brocas longas), vibração, formação de rebarba na saída, aquecimento.",
        "O mandrilamento é a operação de alargamento e acabamento de furos já existentes com alta precisão.",
        "O escariamento produz furos de precisão dimensional e acabamento superficial de qualidade.",
        "O alargamento aumenta o diâmetro de um furo existente. O chanframento cria um cone na entrada do furo."
      ],
      formulas: [
        { name: "Velocidade de Corte Broca", formula: "Vc = (π × D × n) / 1000", unit: "m/min", description: "D = diâmetro da broca" },
        { name: "Avanço", formula: "f = fn × z", unit: "mm/rot", description: "fn = avanço por corte, z = número de gumes" }
      ]
    },
    {
      id: "retificacao",
      title: "Retificação",
      summary: "Processo de acabamento com alta precisão usando rebolos abrasivos.",
      content: [
        "A retificação é um processo de corte por arranque de apara onde as aparas são de menor dimensão (0,0025 a 0,25 mm), usando rebolos abrasivos.",
        "É utilizada para obter precisão dimensional e acabamento superficial de elevada qualidade.",
        "Rugosidades típicas: Ra 0,1 a 0,8 μm. Tolerâncias: IT5 a IT7.",
        "Tipos: retificação cilíndrica (externa e interna), plana, de centro, sem centros, de ferramentas.",
        "O rebolo é composto por grãos abrasivos (óxido de alumínio, carbeto de silício, CBN, diamante), ligante e poros.",
        "Parâmetros: velocidade de corte do rebolo (25-45 m/s), velocidade da peça (10-30 m/min), avanço e profundidade de corte.",
        "A retificação gera muito calor, requerendo refrigeração abundante para evitar danos térmicos na peça."
      ]
    },
    {
      id: "brochamento",
      title: "Brochamento, Aplainamento e Limagem",
      summary: "Outros processos de maquinação.",
      content: [
        "O brochamento é um processo de maquinação por arranque de apara que utiliza uma ferramenta especial (broca) com dentes sucessivos de altura crescente.",
        "A broca realiza movimento linear de avanço e remove material em cada dente até atingir a forma final.",
        "É ideal para perfis internos complexos (furos poligonais, estriados, chavetas) e superfícies externas.",
        "O aplainamento (plainagem) é usado para usinar superfícies planas com ferramenta de corte de fio.",
        "A limagem é semelhante ao aplainamento mas com ferramenta de corte de forma, produzindo perfis diversos.",
        "O rosqueamento pode ser feito com machos e caçonetes (manuais) ou com fresadoras CNC."
      ]
    }
  ],
  videos: [
    { title: "Animação 3D: Como funciona o Torneamento", url: "https://www.youtube.com/embed/S2O6_O9fWEY" },
    { title: "Animação 3D: Processos de Fresagem", url: "https://www.youtube.com/embed/8vB-k8eA8x8" },
    { title: "Como funciona a Retificação", url: "https://www.youtube.com/embed/3cFQ7-Y9X3k" },
    { title: "Brochamento - Princípios", url: "https://www.youtube.com/embed/pV8Z0Xy3w2o" }
  ],
  formulas: [
    { name: "Velocidade de Corte", formula: "Vc = π × D × n / 1000", unit: "m/min" },
    { name: "Rotação", formula: "n = Vc × 1000 / (π × D)", unit: "rpm" },
    { name: "Tempo de Usinagem", formula: "T = L / (f × n)", unit: "min" },
    { name: "Taxa de Remoção", formula: "Q = ap × f × Vc", unit: "cm³/min" }
  ],
  quiz: [
    {
      question: "Qual o principal objetivo dos fluidos de corte na maquinação?",
      options: ["Aumentar o ruído", "Lubrificação e Refrigeração", "Mudar a cor da peça", "Aumentar a dureza"],
      answer: 1,
      explanation: "Os fluidos de corte servem para reduzir o atrito (lubrificação) e dissipar o calor gerado (refrigeração).",
      difficulty: "easy"
    },
    {
      question: "Quanto do trabalho mecânico se transforma em calor na maquinação?",
      options: ["50%", "75%", "90%", "25%"],
      answer: 2,
      explanation: "Cerca de 90% do trabalho mecânico de maquinação transforma-se em calor.",
      difficulty: "medium"
    },
    {
      question: "No torneamento, quem realiza o movimento de corte?",
      options: ["A ferramenta", "A peça", "O carro transversal", "A contra-ponta"],
      answer: 1,
      explanation: "No torneamento, a peça rota (movimento de corte) e a ferramenta avança linearmente.",
      difficulty: "easy"
    },
    {
      question: "Qual a fórmula da velocidade de corte?",
      options: ["Vc = π × D × n", "Vc = π × D × n / 1000", "Vc = D / n", "Vc = π × n / D"],
      answer: 1,
      explanation: "Vc = (π × D × n) / 1000, onde D está em mm e n em rpm, resultando em m/min.",
      difficulty: "medium"
    },
    {
      question: "O que é a aresta postiça de corte?",
      options: ["Aresta afiada da ferramenta", "Núcleo de material aderente à ferramenta", "Rebarba na peça", "Canal de refrigerante"],
      answer: 1,
      explanation: "É um núcleo estacionário de material da apara que adere à face de ataque, alterando a geometria do corte.",
      difficulty: "hard"
    },
    {
      question: "Qual a diferença entre fresagem em concordância e em oposição?",
      options: ["Direção do corte", "Sentido de rotação vs avanço", "Tipo de fresa", "Material da peça"],
      answer: 1,
      explanation: "Concordância: rotação igual ao avanço (melhor acabamento). Oposição: rotação contrária ao avanço (menor desgaste).",
      difficulty: "medium"
    },
    {
      question: "Qual o ângulo de ponta típico de uma broca?",
      options: ["90°", "118°", "135°", "Ambos B e C"],
      answer: 3,
      explanation: "Broca standard tem 118°, mas brocas para materiais duros podem ter 135°.",
      difficulty: "medium"
    }
  ],
  exercises: [
    {
      question: "Calcular a rotação para um torneamento com Vc = 120 m/min e D = 80 mm",
      data: "Vc = 120 m/min\nD = 80 mm",
      solution: "n = (120 × 1000) / (π × 80) = 477 rpm",
      steps: ["Aplicar fórmula: n = (Vc × 1000) / (π × D)", "Substituir valores: n = 120000 / 251,3", "Resultado: n ≈ 477 rpm"]
    },
    {
      question: "Calcular o tempo de usinagem de um eixo com 200 mm de comprimento",
      data: "L = 200 mm\nf = 0,2 mm/rot\nn = 500 rpm",
      solution: "T = 200 / (0,2 × 500) = 2 minutos",
      steps: ["Fórmula: T = L / (f × n)", "Substituir: T = 200 / 100", "T = 2 min"]
    }
  ]
};

// ============================================
// MÓDULO: CONFORMAÇÃO PLÁSTICA
// ============================================
const conformacaoModule: Module = {
  id: "conformacao",
  title: "Conformação Plástica",
  icon: "Zap",
  color: "amber",
  summary: "Deformação plástica dos metais: laminação, forjamento, extrusão, estampagem, trefilagem.",
  topics: [
    {
      id: "intro-conformacao",
      title: "Conceitos Fundamentais",
      summary: "Trabalho a frio, morno e quente. Deformação elástica vs plástica.",
      content: [
        "A necessidade de fabricar surgiu há milhares de anos quando o Homem percebeu que precisava de ferramentas para se defender e caçar.",
        "Os processos de conformação plástica realizam mudanças significativas de forma em peças metálicas através de tensões que levam o metal ao escoamento plástico.",
        "Deformação Elástica: capacidade do material de retornar ao estado inicial após retirado o carregamento. Tensão e deformação são proporcionais (Lei de Hooke).",
        "Deformação Plástica: a partir do limite elástico, as deformações não são mais reversíveis. O material permanece deformado permanentemente.",
        "Trabalho a Quente: realizado acima da temperatura de recristalização. Permite grandes deformações com menor esforço mecânico.",
        "Trabalho a Frio: realizado abaixo da temperatura de recristalização. Aumenta a dureza (encruamento) e proporciona melhor acabamento.",
        "Trabalho a Morno: temperatura intermediária, combina vantagens de ambos.",
        "Near Net Shape: processos que alcançam a geometria final com pouca ou nenhuma maquinação subsequente."
      ],
      keyPoints: [
        "Trabalho a quente → grandes deformações, menor esforço",
        "Trabalho a frio → encruamento, melhor acabamento",
        "Temperatura de recristalização separa quente/frio",
        "Near net shape = geometria final direta"
      ],
      flashcards: [
        { front: "Qual a diferença entre deformação elástica e plástica?", back: "Elástica: reversível, proporcional. Plástica: permanente, irreversível." },
        { front: "Porque trabalhar a quente?", back: "Menor esforço mecânico, maiores deformações possíveis, não há encruamento." },
        { front: "O que é encruamento?", back: "Aumento de resistência e dureza por deformação plástica a frio." }
      ]
    },
    {
      id: "laminacao",
      title: "Laminação",
      summary: "Redução de espessura por compressão entre rolos.",
      content: [
        "A laminação é um processo onde a espessura do metal é reduzida por esforços compressivos entre dois cilindros que rodam em sentidos opostos.",
        "Cerca de 90% dos materiais metálicos são submetidos a operações de laminação numa fase do seu processamento.",
        "Laminação a quente: realizada em torno de 1200°C para o aço. Permite grandes reduções, isenta de tensões residuais, propriedades isotrópicas.",
        "Laminação a frio: aumenta resistência, melhora tolerâncias, melhor acabamento superficial. Usada para chapas finas.",
        "Configurações: Duo (2 rolos), Trio (3 rolos), Quáduo (4 rolos), Sendzimir (múltiplos rolos de apoio).",
        "Produtos: blocos, tarugos, placas, chapas, perfis estruturais, barras, tubos.",
        "O processo é contínuo nas modernas cadeias de laminação (tandem mill).",
        "A anisotropia é típica das chapas finas laminadas a frio devido à orientação dos grãos."
      ],
      keyPoints: [
        "90% dos metais passam por laminação",
        "Laminação quente: 1200°C para aço",
        "Laminação fria: melhor acabamento, encruamento",
        "Anisotropia em chapas laminadas a frio"
      ]
    },
    {
      id: "forjamento",
      title: "Forjamento",
      summary: "Deformação por compressão com moldes.",
      content: [
        "O forjamento é a deformação plástica de materiais por esforços de compressão (impacto ou pressão).",
        "É um dos processos mais antigos, datando de 4000 A.C. com o cobre nativo.",
        "Tipos: forjamento livre (sem matriz fechada), forjamento em matriz (fechada), forjamento por estampagem (com flash).",
        "Forjamento a quente: usado para grandes peças, elimina porosidades, melhora propriedades mecânicas pela refinação do grão.",
        "Forjamento a frio: maior precisão dimensional, melhor acabamento, encruamento aumenta resistência.",
        "Forjamento isotérmico: à temperatura constante para ligas de difícil conformação.",
        "O fluxo do material segue as linhas de fibra, melhorando a resistência mecânica na direção de trabalho.",
        "Aplicado em: veios de transmissão, bielas, pistões, ferramentas, componentes aeronáuticos."
      ],
      flashcards: [
        { front: "Qual a diferença entre forjamento livre e em matriz?", back: "Livre: sem molde fechado. Em matriz: com molde que define a forma." },
        { front: "Porque o forjamento melhora as propriedades mecânicas?", back: "Refina o grão, elimina porosidades, cria linhas de fibra orientadas." }
      ]
    },
    {
      id: "extrusao",
      title: "Extrusão",
      summary: "Forçar o metal a passar através de uma matriz.",
      content: [
        "A extrusão consiste em forçar o metal a passar através de uma matriz (orifício) para obter um perfil com seção constante.",
        "Tipos: extrusão direta (pistão e material movem-se no mesmo sentido) e indireta (pistão oco, material move-se em sentido contrário).",
        "Extrusão a quente: para ligas de baixa ductilidade e grandes taxas de redução.",
        "Extrusão a frio: melhor acabamento e tolerâncias, encruamento aumenta resistência.",
        "Hydroforming: processo de conformação usando pressão de fluido para empurrar o metal contra uma matriz.",
        "Produtos: perfis de alumínio, tubos, hastes, componentes estruturais."
      ]
    },
    {
      id: "estampagem",
      title: "Estampagem e Quinagem",
      summary: "Operações com chapas metálicas.",
      content: [
        "A estampagem engloba operações de corte e conformação realizadas em prensas com ferramentas específicas.",
        "Corte por punção: separação da chapa usando punção e matriz com folga adequada.",
        "Dobragem/Quinagem: dobrar a chapa segundo um ângulo definido ao longo de um eixo retilíneo.",
        "Embutimento: formar peças ocas a partir de chapas através de punção e matriz.",
        "Calandragem: conformação de chapas em superfícies cilíndricas ou curvas.",
        "Deep Drawing: embutimento profundo para peças como copos, panelas, carcaças.",
        "A relação entre diâmetro da peça e diâmetro do disco (taxa de embutimento) é crítica para evitar ruptura."
      ],
      keyPoints: [
        "Corte por punção: punção + matriz com folga",
        "Dobragem: curvatura segundo eixo retilíneo",
        "Embutimento: formar peças ocas",
        "Deep Drawing: embutimento profundo"
      ]
    },
    {
      id: "trefilagem",
      title: "Trefilagem",
      summary: "Redução de seção através de um fieira.",
      content: [
        "A trefilagem é o processo de redução da seção transversal de um material (tarugo ou arame) ao puxá-lo através de uma fieira (matriz cônica).",
        "É sempre um processo a frio, resultando em encruamento e aumento de resistência.",
        "A área de redução é limitada para evitar ruptura do material.",
        "O lubrificante é essencial para reduzir o atrito e o desgaste da fieira.",
        "Produtos: arames, cabos elétricos, parafusos, molas, pregos.",
        "O trefilado pode ser seguido de recozimento para eliminar o encruamento e recuperar a ductilidade."
      ]
    }
  ],
  videos: [
    { title: "Processo de Laminação", url: "https://www.youtube.com/embed/ZZgDj8eK1o0" },
    { title: "Animação: Processos de Forjamento", url: "https://www.youtube.com/embed/pCis6Wk_U10" },
    { title: "Extrusão de Alumínio", url: "https://www.youtube.com/embed/3cFQ7-Y9X3k" },
    { title: "Estampagem Industrial", url: "https://www.youtube.com/embed/8vB-k8eA8x8" }
  ],
  quiz: [
    {
      question: "Qual a principal vantagem do trabalho a quente?",
      options: ["Melhor acabamento", "Menor esforço de deformação", "Maior precisão dimensional", "Não oxida o material"],
      answer: 1,
      explanation: "A quente, a tensão de escoamento diminui, facilitando a deformação.",
      difficulty: "easy"
    },
    {
      question: "O que é encruamento?",
      options: ["Fissura no material", "Aumento de dureza por deformação a frio", "Oxidação superficial", "Fusão parcial"],
      answer: 1,
      explanation: "O encruamento é o aumento de resistência e dureza resultante da deformação plástica a frio.",
      difficulty: "medium"
    },
    {
      question: "Qual processo utiliza rolos para reduzir espessura?",
      options: ["Forjamento", "Extrusão", "Laminação", "Trefilagem"],
      answer: 2,
      explanation: "A laminação usa dois ou mais cilindros para comprimir e reduzir a espessura do material.",
      difficulty: "easy"
    },
    {
      question: "Na trefilagem, o processo é realizado:",
      options: ["A quente", "A frio", "A morno", "Qualquer temperatura"],
      answer: 1,
      explanation: "A trefilagem é sempre realizada a frio, resultando em encruamento do material.",
      difficulty: "medium"
    },
    {
      question: "O que é Near Net Shape?",
      options: ["Forma final com maquinação", "Geometria final direta", "Forma temporária", "Molde de precisão"],
      answer: 1,
      explanation: "Processos near net shape alcançam a geometria final com pouca ou nenhuma maquinação subsequente.",
      difficulty: "hard"
    }
  ]
};

// ============================================
// MÓDULO: FUNDIÇÃO
// ============================================
const fundicaoModule: Module = {
  id: "fundicao",
  title: "Fundição",
  icon: "Flame",
  color: "orange",
  summary: "Processos de fundição: areia, cera perdida, molde permanente, sob pressão, centrifugação.",
  topics: [
    {
      id: "intro-fundicao",
      title: "Introdução à Fundição",
      summary: "História, conceitos e vantagens do processo.",
      content: [
        "Os objetos em metal mais antigos datam de 10.000 anos A.C., pequenos enfeites de cobre nativo batido.",
        "De 5.000 a 3.000 A.C. surgiram os primeiros trabalhos com cobre fundido, iniciando a Idade do Bronze.",
        "O processo de fundição de ferro teve lugar na China em 600 A.C.",
        "O processo de fundição em aço é mais recente (1740), atribuído a Benjamin Huntsman na Inglaterra.",
        "A fundição é o processo de fabricação de peças metálicas que consiste em encher com metal líquido a cavidade de um molde com formato correspondente à peça desejada.",
        "É uma forma económica de fabricar objetos complexos, colocando o metal onde é necessário com o mínimo de operações secundárias.",
        "Permite obter peças com formas praticamente definitivas, com limitações mínimas de tamanho, formato e complexidade.",
        "Vantagens: geometria complexa, grandes dimensões possíveis, qualquer liga metálica, economia de peso, reciclagem de sucata.",
        "Desvantagens: precisão limitada, trabalho perigoso, propriedades mecânicas podem ser afetadas por porosidade, tensões residuais."
      ],
      keyPoints: [
        "10000 A.C. - primeiros objetos metálicos",
        "5000-3000 A.C. - Idade do Bronze",
        "1740 - Fundição de aço por Huntsman",
        "Molde destruído para retirar a peça"
      ]
    },
    {
      id: "etapas-fundicao",
      title: "Etapas do Processo",
      summary: "Do desenho à peça final.",
      content: [
        "1. Desenho da peça: considerando as particularidades do processo de fundição.",
        "2. Projeto do molde: estudo e otimização considerando todas as opções.",
        "3. Fabrico do modelo: construção com dimensões ajustadas à contração do metal.",
        "4. Fabrico do molde: moldagem do material refratário sobre o modelo.",
        "5. Fabrico dos machos: para formar vazios, furos e reentrâncias internas.",
        "6. Fecho do molde: encaixe das partes do molde.",
        "7. Fusão do metal: aquecimento acima da temperatura de fusão.",
        "8. Vazamento: enchimento do molde com metal líquido.",
        "9. Controlo do arrefecimento: taxa de arrefecimento afeta a microestrutura.",
        "10. Desmoldagem: retirada da peça do molde.",
        "11. Limpeza: remoção de areia e incrustações.",
        "12. Rebarbagem: remoção de canais de alimentação e rebarbas.",
        "13. Controlo de qualidade: inspeção visual, dimensional e ensaios mecânicos."
      ]
    },
    {
      id: "elementos-molde",
      title: "Elementos dos Moldes",
      summary: "Caixa de moldação, sistemas de enchimento e alimentação.",
      content: [
        "Caixa de moldação: suporta o molde, geralmente em duas partes (superior e inferior) separadas pelo plano de aparta.",
        "Sistema de enchimento: bacia de vazamento, coluna de enchimento (canal de descida), canal de distribuição, canais de ataque.",
        "A bacia de vazamento assegura fluxo ininterrupto e permite que escória flutue.",
        "A coluna de enchimento deve evitar aspirações e turbulência excessiva.",
        "Sistema de alimentação: alimentadores/massalotes fornecem metal adicional durante a contração.",
        "Os massalotes são colocados nas zonas que solidificam por último.",
        "O conceito de direcionalidade da solidificação: peça deve solidificar do mais afastado para o sistema de alimentação."
      ],
      flashcards: [
        { front: "Para que servem os massalotes?", back: "Reservatórios de metal que compensam a contração durante a solidificação." },
        { front: "O que é direcionalidade da solidificação?", back: "Peça deve solidificar das extremidades para o sistema de alimentação." }
      ]
    },
    {
      id: "processos-fundicao",
      title: "Processos de Fundição",
      summary: "Areia, casca, cera perdida, molde permanente, pressão.",
      content: [
        "Fundição em molde de areia: molde destruído após cada vazamento. Económico, para pequenas e grandes séries.",
        "Fundição em casca (shell-molding): areia revestida com resina térmica endurecida. Melhor precisão e acabamento.",
        "Fundição por cera perdida: modelo de cera revestido por cerâmica. Cera é eliminada por fusão. Alta precisão.",
        "Fundição em molde permanente: moldes metálicos reutilizáveis. Para grandes séries.",
        "Fundição sob pressão: metal injetado sob alta pressão em molde metálico. Alta produtividade para alumínio e zinco.",
        "Fundição por centrifugação: molde rotativo. Força centrífuga distribui o metal. Excelente para peças cilíndricas.",
        "Fundição contínua: lingotamento contínuo para produtos semiformados."
      ],
      keyPoints: [
        "Areia: mais económico, molde destruído",
        "Cera perdida: alta precisão",
        "Sob pressão: alta produtividade",
        "Centrifugação: excelente para cilindros"
      ]
    },
    {
      id: "defeitos-fundicao",
      title: "Defeitos e Controlo de Qualidade",
      summary: "Principais defeitos e suas causas.",
      content: [
        "Choco: cavidade por contração inadequada durante solidificação. Causa: alimentação insuficiente.",
        "Rechupe: cavidade por contração, geralmente na superfície.",
        "Porosidade: pequenos vazios no interior da peça. Causas: gases, solidificação desordenada.",
        "Inclusões: partículas estranhas no metal (areia, escória).",
        "Trincas: fissuras por tensões térmicas ou estruturais.",
        "Rebarbas: excesso de material nas linhas de junta do molde.",
        "Defeitos de superfície: escamas, poeira, irregularidades.",
        "A inspeção pode ser visual, por raios-X, ultra-sons, líquidos penetrantes, partículas magnéticas."
      ],
      flashcards: [
        { front: "O que é um choco?", back: "Cavidade interna por contração inadequada durante solidificação." },
        { front: "Quais as causas da porosidade?", back: "Gases dissolvidos, solidificação desordenada, alimentação insuficiente." }
      ]
    }
  ],
  videos: [
    { title: "Animação 3D: Fundição em Areia", url: "https://www.youtube.com/embed/6iB3F5v-e7g" },
    { title: "Fundição por Cera Perdida", url: "https://www.youtube.com/embed/jPzCBgEzN-4" },
    { title: "Fundição sob Pressão", url: "https://www.youtube.com/embed/XbWw8VyKb8M" }
  ],
  quiz: [
    {
      question: "O que é um 'rechupe' na fundição?",
      options: ["Um tipo de molde", "Cavidade de contração", "Ferramenta de limpeza", "Canal de alimentação"],
      answer: 1,
      explanation: "O rechupe é uma cavidade que ocorre devido à contração do metal durante a solidificação.",
      difficulty: "medium"
    },
    {
      question: "Qual processo usa modelo de cera?",
      options: ["Areia", "Cascas", "Cera perdida", "Molde permanente"],
      answer: 2,
      explanation: "A fundição por cera perdida utiliza modelo de cera que é eliminada por fusão antes do vazamento.",
      difficulty: "easy"
    },
    {
      question: "Para que servem os massalotes?",
      options: ["Aquecer o metal", "Compensar contração", "Resfriar o molde", "Remover rebarbas"],
      answer: 1,
      explanation: "Os massalotes são reservatórios de metal que fornecem material durante a contração da peça.",
      difficulty: "medium"
    },
    {
      question: "Qual processo tem maior produtividade?",
      options: ["Areia", "Cera perdida", "Sob pressão", "Centrifugação"],
      answer: 2,
      explanation: "A fundição sob pressão permite alta produtividade com ciclos rápidos.",
      difficulty: "easy"
    }
  ]
};

// ============================================
// MÓDULO: SOLDADURA
// ============================================
const soldaduraModule: Module = {
  id: "soldadura",
  title: "Soldadura",
  icon: "Box",
  color: "red",
  summary: "União permanente de materiais: arco elétrico, TIG, MIG/MAG, resistência, brasagem.",
  topics: [
    {
      id: "intro-soldadura",
      title: "Conceitos Fundamentais",
      summary: "Tipos de ligações e processos de soldadura.",
      content: [
        "Ligações Desmontáveis: parafusos, porcas, cavilhas. Podem ser retiradas sem dano.",
        "Ligações Permanentes: soldadura, rebitagem. Exigem destruição para separar.",
        "Soldadura por Fusão: material de base funde-se com material de adição (ou não).",
        "Soldadura por Pressão: união por pressão com ou sem calor.",
        "Soldadura por Fricção: calor gerado pelo atrito entre as peças.",
        "Brasagem: apenas o material de adição funde (temperatura abaixo do ponto de fusão da base).",
        "Soldabilidade: capacidade de um material de ser soldado com qualidade.",
        "Fatores que afetam a soldabilidade: composição química, espessura, rigidez estrutural, temperatura."
      ],
      keyPoints: [
        "Ligações desmontáveis: parafusos, cavilhas",
        "Ligações permanentes: soldadura, rebitagem",
        "Brasagem: só material de adição funde",
        "Soldabilidade depende do material"
      ],
      flashcards: [
        { front: "Qual a diferença entre soldadura e brasagem?", back: "Na soldadura o material de base funde. Na brasagem, só o material de adição funde." },
        { front: "O que é soldabilidade?", back: "Capacidade de um material de ser soldado com qualidade." }
      ]
    },
    {
      id: "arco-eletrico",
      title: "Soldadura por Arco Elétrico",
      summary: "SER, TIG, MIG/MAG.",
      content: [
        "SER (Eletrodo Revestido): arco entre eletrodo consumível e a peça. O revestimento protege e adiciona material. Versátil e manual.",
        "TIG (Tungsten Inert Gas): arco entre eletrodo de tungsténio não consumível e a peça. Proteção gasosa inerte (argão). Elevada qualidade.",
        "MIG/MAG (Metal Inert/Active Gas): eletrodo consumível em forma de fio com proteção gasosa. MIG usa gás inerte, MAG usa gás ativo.",
        "No TIG, o calor é controlado separadamente da adição de material, permitindo grande precisão.",
        "O MIG/MAG é altamente produtivo e permite automatização.",
        "A escolha do processo depende do material, espessura, posição de soldadura e qualidade requerida."
      ],
      keyPoints: [
        "SER: eletrodo revestido, manual",
        "TIG: tungsténio não consumível, alta qualidade",
        "MIG: gás inerte, alta produtividade",
        "MAG: gás ativo, para aços"
      ]
    },
    {
      id: "resistencia",
      title: "Soldadura por Resistência",
      summary: "Ponto, costura e projeção.",
      content: [
        "Soldadura por resistência: calor gerado pela passagem de corrente elétrica através da resistência dos materiais.",
        "Soldadura por ponto: dois eletrodos aplicam pressão e corrente num ponto. Muito usada na indústria automóvel.",
        "Soldadura por costura: eletrodos em forma de rolo para soldadura contínua.",
        "Soldadura por projeção: projeções previamente formadas nas peças concentram a corrente.",
        "Vantagens: rápida, sem consumíveis, adequada para automatização.",
        "Limitações: equipamento específico, adequada principalmente para chapas finas."
      ]
    },
    {
      id: "outros-processos",
      title: "Outros Processos de Soldadura",
      summary: "Oxigás, plasma, laser, fricção.",
      content: [
        "Soldadura oxigás (oxiacetilénica): chama de combustão entre oxigénio e acetileno. Usada para soldadura, corte e aquecimento.",
        "Corte a plasma: arco elétrico ioniza gás que corta o metal. Alta velocidade e qualidade.",
        "Soldadura a laser: feixe de luz concentrado funde o material. Precisão extrema.",
        "Soldadura por fricção: calor gerado por atrito entre peças em movimento relativo.",
        "Soldadura por ultra-sons: vibrações de alta frequência para materiais não metálicos ou metais leves.",
        "Soldadura por explosão: onda de choque une materiais diferentes."
      ]
    },
    {
      id: "qualidade-soldadura",
      title: "Qualidade e Defeitos",
      summary: "Controlo de qualidade em soldadura.",
      content: [
        "Defeitos comuns: porosidade, falta de fusão, trincas, inclusões de escória, deformações, mordedura.",
        "A mordedura é a penetração excessiva do cordão na peça adjacente.",
        "Deformações ocorrem devido à expansão/contração térmica.",
        "Contrafogo: técnica para compensar distorções por contração.",
        "Ensaios destrutivos: tração, dobra, impacto, macrografia.",
        "Ensaios não destrutivos: raios-X, ultra-sons, líquidos penetrantes, partículas magnéticas.",
        "A qualificação de soldadores segue normas específicas (ISO 9606, AWS)."
      ]
    }
  ],
  videos: [
    { title: "Fundamentos da Soldadura", url: "https://www.youtube.com/embed/P_H9V0R5Nfk" },
    { title: "Soldadura TIG vs MIG", url: "https://www.youtube.com/embed/8vB-k8eA8x8" },
    { title: "Soldadura por Resistência", url: "https://www.youtube.com/embed/3cFQ7-Y9X3k" }
  ],
  quiz: [
    {
      question: "Qual a principal diferença da Brasagem?",
      options: ["Usa eletrodos", "O material de base não funde", "É mais rápida", "Só para plásticos"],
      answer: 1,
      explanation: "Na brasagem apenas o material de adição funde, abaixo do ponto de fusão do material base.",
      difficulty: "medium"
    },
    {
      question: "No TIG, o eletrodo é:",
      options: ["Consumível", "Não consumível", "De cobre", "De alumínio"],
      answer: 1,
      explanation: "O TIG usa eletrodo de tungsténio que não se consome durante a soldadura.",
      difficulty: "easy"
    },
    {
      question: "Qual processo usa gás ativo (CO2)?",
      options: ["TIG", "MIG", "MAG", "SER"],
      answer: 2,
      explanation: "MAG (Metal Active Gas) usa gás ativo como CO2 ou misturas argão/CO2.",
      difficulty: "medium"
    },
    {
      question: "A soldadura por ponto é um processo de:",
      options: ["Fusão", "Resistência", "Brasagem", "Pressão"],
      answer: 1,
      explanation: "A soldadura por ponto é um processo de resistência elétrica.",
      difficulty: "easy"
    }
  ]
};

// ============================================
// MÓDULO: TRATAMENTOS TÉRMICOS
// ============================================
const tratamentosModule: Module = {
  id: "tratamentos",
  title: "Tratamentos Térmicos",
  icon: "Zap",
  color: "purple",
  summary: "Têmpera, revenido, recozimento, normalização e revestimentos superficiais.",
  topics: [
    {
      id: "termicos",
      title: "Tratamentos Térmicos",
      summary: "Alteração das propriedades mecânicas por aquecimento e arrefecimento controlado.",
      content: [
        "Têmpera: aquecimento acima da temperatura crítica (723°C para aços eutetoides) seguido de arrefecimento rápido. Aumenta a dureza e resistência mas aumenta a fragilidade.",
        "Revenido: aquecimento de peças temperadas a temperaturas entre 150-650°C para reduzir fragilidade e tensões internas. Ajusta a dureza à aplicação.",
        "Recozimento: aquecimento seguido de arrefecimento muito lento. Elimina dureza, melhora a usinabilidade, alivia tensões.",
        "Normalização: aquecimento seguido de arrefecimento ao ar. Refina a estrutura do grão, uniformiza as propriedades.",
        "Cementação: enriquecimento superficial de carbono para aumentar a dureza da camada externa mantendo o núcleo tenaz.",
        "Nitruração: enriquecimento superficial de nitrogénio. Alta dureza superficial sem necessidade de tratamento térmico posterior.",
        "Carbonitruração: combinação de carbono e nitrogénio na superfície."
      ],
      keyPoints: [
        "Têmpera → arrefecimento rápido → dureza",
        "Revenido → reduz fragilidade da têmpera",
        "Recozimento → arrefecimento lento → mole",
        "Cementação → dureza superficial"
      ],
      flashcards: [
        { front: "Qual o objetivo da têmpera?", back: "Aumentar dureza e resistência através de arrefecimento rápido." },
        { front: "Para que serve o revenido?", back: "Reduzir fragilidade e tensões internas após a têmpera." },
        { front: "Diferença entre recozimento e normalização?", back: "Recozimento: arrefecimento lento (forno). Normalização: arrefecimento ao ar." }
      ]
    },
    {
      id: "superficiais",
      title: "Tratamentos de Superfície",
      summary: "Proteção contra corrosão e desgaste.",
      content: [
        "Grenalhagem: projeção de granalha para limpeza, texturização ou aumento de resistência à fadiga.",
        "Eletrodeposição: revestimento metálico via eletrólise (cromagem, niquelação, zincagem).",
        "Anodização: criação de camada de óxido protetora em alumínio. A peça é o ânodo.",
        "Fosfatização: pré-tratamento antes da pintura para melhorar aderência e proteção anticorrosão.",
        "Pintura por pó: aplicação eletrostática de pó polimérico seguido de cura térmica.",
        "Galvanização: revestimento de zinco por imersão a quente. Excelente proteção anticorrosão.",
        "PVD (Physical Vapor Deposition): deposição de camadas finas em vácuo para dureza e decoração."
      ]
    }
  ],
  videos: [
    { title: "Tratamentos Térmicos dos Aços", url: "https://www.youtube.com/embed/Z9v68-xP-k0" },
    { title: "Cementação e Nitruração", url: "https://www.youtube.com/embed/8vB-k8eA8x8" }
  ],
  quiz: [
    {
      question: "Qual o objetivo do Revenido?",
      options: ["Aumentar a dureza máxima", "Diminuir a fragilidade após a têmpera", "Mudar a cor da peça", "Tornar o material isolante"],
      answer: 1,
      explanation: "O revenido ajusta a dureza e aumenta a tenacidade de peças temperadas.",
      difficulty: "easy"
    },
    {
      question: "O que é cementação?",
      options: ["Endurecer toda a peça", "Enriquecer superfície em carbono", "Recozimento rápido", "Revestimento de zinco"],
      answer: 1,
      explanation: "Cementação é o enriquecimento superficial de carbono para aumentar a dureza externa.",
      difficulty: "medium"
    },
    {
      question: "Na anodização, a peça é:",
      options: ["O cátodo", "O ânodo", "O eletrólito", "O revestimento"],
      answer: 1,
      explanation: "Na anodização, a peça de alumínio é o ânodo (polo positivo).",
      difficulty: "medium"
    }
  ]
};

// ============================================
// MÓDULO: METROLOGIA
// ============================================
const metrologiaModule: Module = {
  id: "metrologia",
  title: "Metrologia e Qualidade",
  icon: "Ruler",
  color: "emerald",
  summary: "Controlo de qualidade, medição, tolerâncias e ajustes.",
  topics: [
    {
      id: "intro-metrologia",
      title: "Conceitos de Metrologia",
      summary: "A ciência das medidas e medições.",
      content: [
        "Metrologia é a ciência que abrange todos os aspetos teóricos e práticos relativos às medições.",
        "Dimensão Nominal: valor teórico indicado no desenho.",
        "Dimensão Efetiva: valor real obtido após medição da peça.",
        "Dimensões Limites: valores máximo e mínimo aceitáveis.",
        "Afastamento: diferença entre dimensão limite e dimensão nominal.",
        "Tolerância: diferença entre dimensão máxima e mínima admitidas.",
        "Ajuste: relação entre dimensões de duas peças que se acoplam (eixo e furo).",
        "Tipos de ajuste: folga (eixo sempre menor), interferência (eixo sempre maior), incerto (pode ter folga ou interferência)."
      ],
      keyPoints: [
        "Metrologia = ciência das medições",
        "Tolerância = diferença entre máx e mín",
        "Ajuste com folga = eixo < furo",
        "Ajuste com interferência = eixo > furo"
      ],
      flashcards: [
        { front: "O que é metrologia?", back: "Ciência que estuda as medições." },
        { front: "Qual a diferença entre dimensão nominal e efetiva?", back: "Nominal: valor teórico do desenho. Efetiva: valor real medido na peça." },
        { front: "O que é tolerância?", back: "Diferença entre dimensão máxima e mínima admitidas." }
      ]
    },
    {
      id: "instrumentos",
      title: "Instrumentos de Medição",
      summary: "Paquímetro, micrómetro e relógio comparador.",
      content: [
        "Paquímetro: instrumento versátil para medições internas, externas e profundidade. Precisão típica: 0,02 ou 0,05 mm.",
        "Micrómetro: instrumento de alta precisão baseado no sistema parafuso/porca. Precisão: 0,01 mm.",
        "Relógio Comparador: instrumento de medição indireta (comparativa). Precisão: 0,01 mm.",
        "Pés de rei: gabaritos para verificação rápida de dimensões sem medição direta.",
        "Calibre: instrumento de medição direta com escala linear fixa.",
        "Rugosímetro: mede a rugosidade superficial (parâmetros Ra, Rz, Rt).",
        "Goniómetro: medição de ângulos.",
        "Durômetro: medição de dureza (Rockwell, Brinell, Vickers)."
      ]
    },
    {
      id: "tolerancias",
      title: "Sistema de Tolerâncias ISO",
      summary: "Classes de tolerância e ajustes normalizados.",
      content: [
        "O sistema ISO define tolerâncias através de letras (posição) e números (qualidade).",
        "Para furos: letras maiúsculas (A, B, C...). Para eixos: letras minúsculas (a, b, c...).",
        "IT (International Tolerance): qualidade da tolerância. IT01 mais preciso, IT18 menos preciso.",
        "Ajustes comuns: H7/g6 (folga deslizante), H7/k6 (incerto), H7/p6 (interferência).",
        "O sistema de furo base usa H como referência. O sistema de eixo base usa h.",
        "A escolha da tolerância depende da função, custo e capacidade de fabricação."
      ],
      formulas: [
        { name: "Tolerância", formula: "t = Dmax - Dmin", unit: "mm", description: "Diferença entre dimensão máxima e mínima" },
        { name: "Folga Máxima", formula: "Fmax = Fmax - Emin", unit: "mm", description: "Furo máximo menos eixo mínimo" },
        { name: "Folga Mínima", formula: "Fmin = Fmin - Emax", unit: "mm", description: "Furo mínimo menos eixo máximo" },
        { name: "Interferência Máxima", formula: "Imax = Emax - Fmin", unit: "mm", description: "Eixo máximo menos furo mínimo" }
      ]
    }
  ],
  videos: [
    { title: "Como ler um Paquímetro", url: "https://www.youtube.com/embed/nU1_XU7_M_M" },
    { title: "Sistema ISO de Tolerâncias", url: "https://www.youtube.com/embed/8vB-k8eA8x8" }
  ],
  quiz: [
    {
      question: "A ciência das medidas e das medições denomina-se:",
      options: ["Simbologia", "Fisiologia", "Metrologia", "Numerologia"],
      answer: 2,
      explanation: "Metrologia é a ciência que estuda a medição.",
      difficulty: "easy"
    },
    {
      question: "Entende-se por dimensão efetiva:",
      options: ["A dimensão representada na peça", "A dimensão real resultante da medição", "O valor máximo admissível", "O valor mínimo admissível"],
      answer: 1,
      explanation: "A dimensão efetiva é o valor medido na peça real.",
      difficulty: "easy"
    },
    {
      question: "Qual a precisão típica de um micrómetro?",
      options: ["0,1 mm", "0,01 mm", "0,001 mm", "1 mm"],
      answer: 1,
      explanation: "O micrómetro tem precisão típica de 0,01 mm (1 centésimo).",
      difficulty: "medium"
    },
    {
      question: "Num ajuste com folga:",
      options: ["Eixo > Furo", "Eixo < Furo", "Eixo = Furo", "Não importa"],
      answer: 1,
      explanation: "Ajuste com folga significa que o eixo é sempre menor que o furo.",
      difficulty: "easy"
    }
  ],
  exercises: [
    {
      question: "Cálculo de Tolerância e Dimensões Limites",
      data: "Considere um veio com dimensão nominal Ø = 40 mm.\nAfastamento superior = +0,032 mm\nAfastamento inferior = +0,010 mm",
      solution: "Tolerância (t) = 0,022 mm\nDimensão Máxima = 40,032 mm\nDimensão Mínima = 40,010 mm",
      steps: [
        "Tolerância = as - ai = 0,032 - 0,010 = 0,022 mm",
        "Dimensão máxima = 40 + 0,032 = 40,032 mm",
        "Dimensão mínima = 40 + 0,010 = 40,010 mm"
      ]
    },
    {
      question: "Cálculo de Ajustes",
      data: "Acoplamento de 50 mm:\nEixo: as = +0,000, ai = -0,035\nFuro: As = +0,062, Ai = +0,023",
      solution: "Tipo: Folga (ajuste móvel)\nFolga Máxima = 0,097 mm\nFolga Mínima = 0,023 mm",
      steps: [
        "Eixo máx = 50,000; Eixo mín = 49,965",
        "Furo máx = 50,062; Furo mín = 50,023",
        "Folga máx = 50,062 - 49,965 = 0,097 mm",
        "Folga mín = 50,023 - 50,000 = 0,023 mm"
      ]
    }
  ]
};

// ============================================
// MÓDULO: CORTE POR PUNÇÃO
// ============================================
const puncaoModule: Module = {
  id: "puncao",
  title: "Corte por Punção",
  icon: "Hammer",
  color: "slate",
  summary: "Processos de corte por punção e matriz: folga de corte, rebarba, ferramentas.",
  topics: [
    {
      id: "mecanismo-corte",
      title: "Mecanismo de Corte",
      summary: "Como ocorre a rotura do material.",
      content: [
        "O corte por punção ocorre em três fases: Deformação elástica, Deformação plástica e Rotura.",
        "Folga de Corte: espaço entre punção e matriz. Essencial para a qualidade da face cortada.",
        "Folga excessiva → rebarba grande. Folga insuficiente → desgaste acelerado da ferramenta.",
        "A folga ideal depende do tipo e espessura do material, tipicamente 5-10% da espessura.",
        "Rebarba: excesso de material resultante de folga excessiva ou desgaste da ferramenta.",
        "As faces cortadas apresentam quatro zonas: arredondamento, brilhante, opaca (fratura) e rebarba.",
        "A penetração da punção no material antes da rotura varia com o material (25-50% da espessura)."
      ],
      keyPoints: [
        "Três fases: elástica, plástica, rotura",
        "Folga típica: 5-10% da espessura",
        "Folga excessiva → rebarba",
        "Faces cortadas: 4 zonas distintas"
      ],
      flashcards: [
        { front: "Quais as três fases do corte por punção?", back: "Deformação elástica, deformação plástica, rotura." },
        { front: "O que é a folga de corte?", back: "Espaço entre punção e matriz, essencial para qualidade do corte." }
      ]
    },
    {
      id: "ferramentas-puncao",
      title: "Prensas e Matrizes",
      summary: "Equipamento e componentes.",
      content: [
        "Punção: ferramenta macho que penetra na chapa.",
        "Matriz: ferramenta fêmea que suporta o corte.",
        "Extrator: componente que retira a chapa da punção após o golpe.",
        "Prensa excêntrica: movimento alternativo do eixo transformado em circular da manivela.",
        "Prensa fricção: usa rodas de fricção para acionar o movimento.",
        "Prensa hidráulica: força gerada por pressão de fluido, maior controlo e força.",
        "A capacidade da prensa é medida em toneladas (força máxima exercida).",
        "A progressividade permite várias operações numa única ferramenta."
      ]
    },
    {
      id: "estampagem",
      title: "Estampagem",
      summary: "Corte e conformação em série.",
      content: [
        "Estampagem é o processo de fabricação em série de peças a partir de chapa metálica.",
        "Operações de corte: corte (separação), vazamento (corte interno), perfuração (furação).",
        "Operações de conformação: dobra, embutimento, alisamento, calandragem.",
        "O desenvolvimento da chapa calcula o comprimento necessário antes da dobra.",
        "A força de corte é proporcional ao perímetro, espessura e resistência ao corte do material.",
        "Matrizes progressivas realizam várias operações simultâneas em estações diferentes."
      ],
      formulas: [
        { name: "Força de Corte", formula: "F = P × s × τc", unit: "N", description: "P = perímetro, s = espessura, τc = resistência ao corte" },
        { name: "Trabalho de Corte", formula: "W = F × s × k", unit: "J", description: "k = coeficiente (0,6-0,8)" }
      ]
    }
  ],
  videos: [
    { title: "Corte e Estampagem", url: "https://www.youtube.com/embed/uG-PToYQ_g0" }
  ],
  quiz: [
    {
      question: "A folga de corte correta depende principalmente de:",
      options: ["Cor da chapa", "Espessura e dureza do material", "Peso da prensa", "Hora do dia"],
      answer: 1,
      explanation: "A folga ideal é calculada com base na espessura e no tipo de material.",
      difficulty: "easy"
    },
    {
      question: "Folga excessiva causa:",
      options: ["Corte limpo", "Rebarba grande", "Desgaste da ferramenta", "Maior força"],
      answer: 1,
      explanation: "Folga excessiva resulta em grande rebarba na peça cortada.",
      difficulty: "medium"
    }
  ]
};

// ============================================
// EXPORTAR TODOS OS MÓDULOS
// ============================================
export const studyData: Module[] = [
  corteModule,
  conformacaoModule,
  fundicaoModule,
  soldaduraModule,
  tratamentosModule,
  metrologiaModule,
  puncaoModule
];

// Estatísticas para o dashboard
export const getStudyStats = () => {
  const totalModules = studyData.length;
  const totalTopics = studyData.reduce((acc, m) => acc + m.topics.length, 0);
  const totalQuiz = studyData.reduce((acc, m) => acc + m.quiz.length, 0);
  const totalExercises = studyData.reduce((acc, m) => acc + (m.exercises?.length || 0), 0);
  const totalVideos = studyData.reduce((acc, m) => acc + m.videos.length, 0);
  
  return { totalModules, totalTopics, totalQuiz, totalExercises, totalVideos };
};

// Buscar módulo por ID
export const getModuleById = (id: string) => studyData.find(m => m.id === id);

// Buscar tópico por ID
export const getTopicById = (moduleId: string, topicId: string) => {
  const module = getModuleById(moduleId);
  return module?.topics.find(t => t.id === topicId);
};
