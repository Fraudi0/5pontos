import CabecalhoPagina from "../componentes/CabecalhoPagina";
import Icone from "../componentes/Icone";

const objetivosEspecificos = [
  "Centralizar o cadastro de usuários, turmas e equipes de robótica.",
  "Automatizar a criação de torneios e o chaveamento no formato mata-mata.",
  "Registrar resultados e disponibilizar painéis de acompanhamento.",
  "Apoiar a preparação dos alunos com aulas e simulados.",
  "Garantir controle de acesso por perfil e registro de auditoria.",
  "Aplicar princípios da LGPD: minimização, consentimento e exclusão de dados.",
];

const publico = [
  "Organizadores de torneios",
  "Administradores",
  "Professores e técnicos",
  "Equipes de robótica",
  "Responsáveis pelas equipes",
  "Alunos participantes",
];

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Sobre o projeto"
        titulo="Por que a RoboNet existe"
        descricao="Contexto, motivação e objetivos do Trabalho de Conclusão de Curso."
      />

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">Contexto</span>
            <h2>Robótica educacional em crescimento</h2>
            <p>
              As competições de robótica educacional envolvem muitos processos:
              inscrição de equipes, organização de participantes, montagem das chaves,
              registro de partidas, resultados e classificações.
            </p>
            <p>
              O projeto nasceu da experiência com a equipe <strong>Robótica Sempre Mais (RSM)</strong>,
              de Mogi das Cruzes, que não possui um sistema integrado para gerenciar
              torneios, equipes e participantes.
            </p>
          </div>
          <div className="destaque">
            <Icone nome="alvo" tamanho={32} />
            <h3>Objetivo geral</h3>
            <p>
              Desenvolver uma plataforma web para gerenciar torneios de robótica
              educacional, centralizando usuários, equipes, torneios, partidas e
              resultados, com controle de acesso, auditoria e mecanismos de privacidade
              e proteção de dados alinhados aos princípios da LGPD.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Objetivos específicos</span>
            <h2>O que o trabalho se propõe a entregar</h2>
          </div>
          <ol className="lista-numerada">
            {objetivosEspecificos.map((obj) => <li key={obj}>{obj}</li>)}
          </ol>
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">Público-alvo</span>
            <h2>Para quem a plataforma foi pensada</h2>
            <div className="chips">
              {publico.map((p) => <span key={p} className="chip">{p}</span>)}
            </div>
          </div>
          <div>
            <span className="etiqueta">Justificativa</span>
            <h2>Organização e proteção de dados</h2>
            <p>
              Boa parte dos participantes é formada por estudantes menores de idade.
              Por isso, além de facilitar a organização das competições, a RoboNet trata
              a privacidade como requisito: coleta apenas o necessário, registra o aceite
              do termo de privacidade e permite que o usuário consulte, exporte ou peça a
              exclusão dos seus dados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
