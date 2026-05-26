# TecMec Study - Plataforma de Estudo de Tecnologia Mecânica

Bem-vindo ao **TecMec Study**, uma ferramenta interativa desenvolvida para auxiliar estudantes de engenharia e entusiastas nos temas de Tecnologia Mecânica.

## 🚀 Como Aceder e Executar

Siga os passos abaixo para colocar a aplicação a funcionar localmente:

### 1. Pré-requisitos
Certifique-se de que tem o [Node.js](https://nodejs.org/) instalado no seu computador.

### 2. Instalação
No terminal, dentro da pasta `tec-mec-study`, execute o seguinte comando para instalar as dependências:
```bash
npm install
```

### 3. Execução
Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Após executar, abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

### 4. Construção para Produção (Build)
Para gerar os ficheiros finais para publicação:
```bash
npm run build
```

---

## 📚 Estrutura da Aplicação

A aplicação está dividida em quatro módulos principais:
1. **Processos de Corte (Arranque de Apara):** Torneamento, Fresagem, Furação, etc.
2. **Conformação Plástica:** Laminagem, Forjamento, Extrusão, etc.
3. **Processos de Fundição:** Moldação em areia, cera perdida, etc.
4. **Processos de Soldadura:** Soldadura por arco elétrico, TIG/MIG, etc.

Cada módulo contém:
- **Resumo Teórico:** Introdução ao tema.
- **Tópicos Chave:** Listagem dos pontos mais importantes.
- **Fórmulas Essenciais:** Cálculos fundamentais com unidades.
- **Video-Aulas:** Vídeos ilustrativos e explicativos.
- **Quiz Interativo:** Teste os seus conhecimentos com correção imediata.

## 🛠️ Tecnologias Utilizadas
- **React 18** + **TypeScript**
- **Vite** (Build Tool)
- **Tailwind CSS** (Estilização)
- **Framer Motion** (Animações)
- **Lucide React** (Ícones)

---

## 📝 Notas de Versão
- **Correção de Interação:** O sistema de quiz foi corrigido para permitir a seleção de respostas e visualização de explicações.
- **Melhoria de Vídeos:** Adicionada a possibilidade de abrir vídeos diretamente no YouTube para melhor visualização.
- **Interface:** Totalmente traduzida para Português de Portugal.
