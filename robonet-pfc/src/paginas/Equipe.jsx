import CabecalhoPagina from "../componentes/CabecalhoPagina";
import Icone from "../componentes/Icone";
import { autores, etapas } from "../dados/projeto";

const evolucoes = [
  "Geração de relatórios",
  "Integração com outras plataformas",
  "Outras modalidades de competição",
  "Mais análises dos torneios",
];

export default function Equipe() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Equipe"
        titulo="Quem desenvolve a RoboNet"
        descricao="Trabalho de Conclusão de Curso do Bacharelado em Sistemas de Informação da Universidade de Mogi das Cruzes."
      />

      <section className="secao">
        <div className="container grade-autores">
          {autores.map((a) => (
            <article key={a.nome} className="autor">
              <div className="avatar">{a.iniciais}</div>
              <h3>{a.nome}</h3>
              <span>{a.papel}</span>
            </article>
          ))}
          <article className="autor autor-instituicao">
            <div className="avatar"><Icone nome="formatura" tamanho={30} /></div>
            <h3>Universidade de Mogi das Cruzes</h3>
            <span>Bacharelado em Sistemas de Informação · 2026</span>
          </article>
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Metodologia</span>
            <h2>Etapas do desenvolvimento</h2>
          </div>
          <ol className="linha-tempo">
            {etapas.map((e, i) => (
              <li key={e.titulo}>
                <span className="linha-tempo-numero">{i + 1}</span>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">Próximos passos</span>
            <h2>Possíveis evoluções</h2>
            <ul className="lista-check grande">
              {evolucoes.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
          <div className="destaque">
            <Icone nome="lampada" tamanho={32} />
            <h3>Referências</h3>
            <p>
              Documentação oficial do Java (Oracle), React (Meta) e PostgreSQL, além de
              plataformas de gestão de competições como FTC TeamForge, Pitside e
              RoboCup Brasil — Olimpo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
