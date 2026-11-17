import { Link } from "react-router-dom";
import Icone from "../componentes/Icone";
import { modulos } from "../dados/projeto";

const numeros = [
  { valor: "8", texto: "módulos integrados" },
  { valor: "3", texto: "perfis de acesso" },
  { valor: "LGPD", texto: "privacidade desde o projeto" },
  { valor: "100%", texto: "web e responsivo" },
];

// Cartão decorativo que imita o dashboard real do sistema
function PreviaDashboard() {
  return (
    <div className="previa" aria-hidden="true">
      <div className="previa-topo">
        <span className="marca-logo pequena">R</span>
        <strong>Dashboard</strong>
        <span className="previa-pontos"><i /><i /><i /></span>
      </div>
      <div className="previa-grade">
        <div className="previa-cartao">
          <small>Simulados</small>
          <strong>124</strong>
          <div className="barra"><span style={{ width: "78%" }} className="verde" /></div>
          <div className="barra"><span style={{ width: "22%" }} className="vermelho" /></div>
        </div>
        <div className="previa-cartao">
          <small>Torneios</small>
          <strong>12</strong>
          <div className="barra"><span style={{ width: "64%" }} /></div>
          <div className="barra"><span style={{ width: "36%" }} className="vermelho" /></div>
        </div>
      </div>
      <div className="previa-chave">
        <div className="previa-luta"><span className="venceu">Robôs de Aço</span><span>MegaBots</span></div>
        <div className="previa-linha" />
        <div className="previa-luta"><span className="venceu">Robôs de Aço</span><span>Byte Force</span></div>
      </div>
    </div>
  );
}

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="container hero-conteudo">
          <div>
            <span className="etiqueta">Trabalho de Conclusão de Curso · UMC 2026</span>
            <h1>
              Torneios de robótica educacional, <em>organizados em um só lugar.</em>
            </h1>
            <p className="hero-texto">
              A RoboNet é uma plataforma web que centraliza equipes, turmas, aulas,
              simulados, torneios e resultados — com controle de acesso por perfil,
              auditoria e proteção de dados alinhada à LGPD.
            </p>
            <div className="botoes">
              <Link to="/torneios" className="botao botao-primario">
                Testar o chaveamento <Icone nome="seta" tamanho={18} />
              </Link>
              <Link to="/sobre" className="botao botao-secundario">Conhecer o projeto</Link>
            </div>
          </div>
          <PreviaDashboard />
        </div>
      </section>

      <section className="faixa-numeros">
        <div className="container numeros">
          {numeros.map((n) => (
            <div key={n.texto} className="numero">
              <strong>{n.valor}</strong>
              <span>{n.texto}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">O problema</span>
            <h2>Planilhas, grupos de mensagem e papel</h2>
            <p>
              Equipes como a <strong>Robótica Sempre Mais (RSM)</strong>, de Mogi das Cruzes,
              organizam competições sem um sistema integrado. Inscrições, chaves, resultados
              e dados dos alunos ficam espalhados, dificultando o acompanhamento e a
              proteção das informações pessoais — muitas delas de menores de idade.
            </p>
          </div>
          <div>
            <span className="etiqueta">A solução</span>
            <h2>Uma plataforma única e segura</h2>
            <p>
              A RoboNet reúne todo o ciclo da competição: do cadastro das equipes ao
              registro do campeão. Cada usuário enxerga apenas o que precisa, e todas as
              ações relevantes ficam registradas para auditoria.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Principais módulos</span>
            <h2>O que a plataforma oferece</h2>
          </div>
          <div className="grade-cartoes">
            {modulos.slice(0, 4).map((m) => (
              <article key={m.titulo} className="cartao">
                <div className="cartao-icone"><Icone nome={m.icone} /></div>
                <h3>{m.titulo}</h3>
                <p>{m.resumo}</p>
              </article>
            ))}
          </div>
          <div className="centro">
            <Link to="/funcionalidades" className="link-seta">
              Ver todas as funcionalidades <Icone nome="seta" tamanho={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container chamada">
          <div>
            <h2>Veja a RoboNet em ação</h2>
            <p>Monte um torneio de demonstração e escolha os vencedores de cada luta até chegar ao campeão.</p>
          </div>
          <Link to="/torneios" className="botao botao-claro">Abrir demonstração</Link>
        </div>
      </section>
    </>
  );
}
