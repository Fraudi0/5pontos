// Conteúdo do projeto em um único lugar: as páginas apenas leem estes dados.

export const modulos = [
  {
    icone: "trofeu",
    titulo: "Torneios",
    resumo: "Criação de torneios no formato mata-mata, inscrição de equipes, chaveamento automático e registro dos vencedores de cada luta.",
    itens: ["Chaveamento automático", "Registro de vencedores", "Status do torneio"],
  },
  {
    icone: "usuarios",
    titulo: "Equipes e turmas",
    resumo: "Organização dos alunos em turmas e equipes, com membros vinculados e acompanhamento da participação em competições.",
    itens: ["Cadastro de turmas", "Montagem de equipes", "Membros autorizados"],
  },
  {
    icone: "livro",
    titulo: "Aulas",
    resumo: "Agenda de aulas de robótica com integração ao Google Calendar e visualização das aulas pelos alunos.",
    itens: ["Agenda de aulas", "Google Calendar", "Visão do aluno"],
  },
  {
    icone: "prancheta",
    titulo: "Simulados",
    resumo: "Simulados com questões de múltipla escolha para preparação dos alunos, com correção e histórico de resultados.",
    itens: ["Questões objetivas", "Correção automática", "Histórico de notas"],
  },
  {
    icone: "grafico",
    titulo: "Dashboard",
    resumo: "Painel inicial com indicadores de desempenho: simulados realizados, acertos, erros, vitórias e derrotas.",
    itens: ["Acertos e erros", "Vitórias e derrotas", "Visão por perfil"],
  },
  {
    icone: "escudo",
    titulo: "Privacidade (LGPD)",
    resumo: "Termo de privacidade versionado, consulta e exportação dos próprios dados e solicitação de alteração ou exclusão.",
    itens: ["Termo de aceite", "Meus dados", "Exclusão de conta"],
  },
  {
    icone: "lista",
    titulo: "Auditoria",
    resumo: "Registro das ações relevantes realizadas na plataforma, permitindo rastrear quem fez o quê e quando.",
    itens: ["Log de ações", "Filtros de consulta", "Rastreabilidade"],
  },
  {
    icone: "cadeado",
    titulo: "Acesso seguro",
    resumo: "Login com código de verificação enviado por e-mail, regras de senha forte e controle de acesso por perfil.",
    itens: ["Código por e-mail", "Senha forte", "Rotas protegidas"],
  },
];

export const perfis = [
  {
    nome: "Administrador",
    descricao: "Gerencia usuários, turmas e consulta a auditoria da plataforma.",
    permissoes: ["Usuários", "Turmas", "Auditoria", "Torneios", "Aulas", "Simulados"],
  },
  {
    nome: "Professor",
    descricao: "Organiza aulas, simulados, equipes e conduz os torneios.",
    permissoes: ["Aulas", "Simulados", "Equipes", "Torneios", "Dashboard"],
  },
  {
    nome: "Aluno",
    descricao: "Participa das aulas, responde simulados e acompanha sua equipe.",
    permissoes: ["Minhas aulas", "Simulados", "Minha equipe", "Meus dados"],
  },
];

export const tecnologias = [
  { icone: "codigo", camada: "Front-end", nomes: ["React 18", "React Router", "Vite", "HTML5 / CSS3"], texto: "Interface em componentes, navegação entre páginas e build rápido." },
  { icone: "servidor", camada: "Back-end", nomes: ["Java 17", "Spring Boot 3", "Spring Security + JWT", "API REST"], texto: "Regras de negócio, autenticação, autorização e validação." },
  { icone: "banco", camada: "Banco de dados", nomes: ["PostgreSQL", "Triggers", "Funções SQL"], texto: "Armazenamento estruturado de usuários, equipes, torneios e lutas." },
  { icone: "calendario", camada: "Integrações", nomes: ["Google Calendar API", "Serviço de e-mail", "Docker"], texto: "Agenda de eventos, envio de códigos e notificações, implantação em contêineres." },
];

export const entidades = [
  { nome: "Usuarios", campos: ["IdUsuario", "Nome", "Email", "Perfil", "Senha (hash)"] },
  { nome: "Turmas", campos: ["IdTurma", "Nome", "DtRegistro"] },
  { nome: "Equipes", campos: ["IdEquipe", "Nome", "IdTurma"] },
  { nome: "Torneios", campos: ["IdTorneio", "Nome", "Local", "DtInicio", "Status"] },
  { nome: "Lutas", campos: ["IdLuta", "Fase", "EquipeA", "EquipeB", "Vencedor"] },
  { nome: "Log", campos: ["IdLog", "Usuario", "Acao", "DtRegistro"] },
];

export const autores = [
  { nome: "Paola dos Santos Ramos", papel: "Desenvolvimento e documentação", iniciais: "PR" },
  { nome: "Bruno Bernardelli Fraudio", papel: "Desenvolvimento e documentação", iniciais: "BF" },
];

export const etapas = [
  { titulo: "Levantamento", texto: "Entrevistas com a equipe Robótica Sempre Mais e definição dos requisitos." },
  { titulo: "Modelagem", texto: "Casos de uso, modelo de dados e arquitetura MVC." },
  { titulo: "Desenvolvimento", texto: "Front-end em React, API em Spring Boot e banco PostgreSQL." },
  { titulo: "Testes e entrega", texto: "Validação com usuários, ajustes finais e apresentação à banca." },
];

// Equipes fictícias usadas na demonstração do chaveamento
export const equipesDemo = [
  "Robôs de Aço", "MegaBots", "Circuito Rápido", "Engrenagem 7",
  "Titãs do Código", "Faísca", "Byte Force", "Os Inventores",
];
