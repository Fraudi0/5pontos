# RoboNet — Página do TCC (React)

Site de apresentação do Trabalho de Conclusão de Curso **RoboNet**, plataforma web para
gerenciamento de torneios de robótica educacional.

Bacharelado em Sistemas de Informação — Universidade de Mogi das Cruzes (UMC), 2026.
Autores: Paola dos Santos Ramos e Bruno Bernardelli Fraudio.

## Páginas

| Rota               | Página           | Conteúdo                                                      |
|--------------------|------------------|---------------------------------------------------------------|
| `/`                | Início           | Apresentação, problema x solução, principais módulos          |
| `/sobre`           | Sobre            | Contexto, objetivo geral, objetivos específicos, público-alvo |
| `/funcionalidades` | Funcionalidades  | Os 8 módulos e os perfis de acesso (abas interativas)          |
| `/torneios`        | Torneios         | Demonstração interativa do chaveamento mata-mata               |
| `/tecnologias`     | Tecnologias      | Arquitetura MVC, stack, entidades do banco, segurança e LGPD   |
| `/equipe`          | Equipe           | Autores, etapas do desenvolvimento, evoluções e referências    |

## Como executar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:5173 no navegador.

Para gerar a versão de produção: `npm run build` (arquivos em `dist/`).

## Estrutura

```text
src/
├── main.jsx              # ponto de entrada (HashRouter)
├── App.jsx               # rotas das páginas
├── estilo.css            # estilos globais e responsivos
├── componentes/
│   ├── Navbar.jsx        # menu superior (com menu mobile)
│   ├── Rodape.jsx
│   ├── CabecalhoPagina.jsx
│   └── Icone.jsx         # ícones SVG
├── dados/
│   └── projeto.js        # textos e dados exibidos nas páginas
└── paginas/
    ├── Inicio.jsx
    ├── Sobre.jsx
    ├── Funcionalidades.jsx
    ├── Torneios.jsx
    ├── Tecnologias.jsx
    ├── Equipe.jsx
    └── NaoEncontrada.jsx
```

Esta versão é independente do back-end: não precisa de Java, PostgreSQL nem login.
Os dados do torneio são fictícios e servem apenas para demonstração.
