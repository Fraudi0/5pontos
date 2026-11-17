import CabecalhoPagina from "../componentes/CabecalhoPagina";
import Icone from "../componentes/Icone";
import { entidades, tecnologias } from "../dados/projeto";

const camadas = [
  { titulo: "Usuário", detalhe: "Navegador web", icone: "usuarios" },
  { titulo: "Front-end", detalhe: "React · View", icone: "codigo" },
  { titulo: "Back-end", detalhe: "Controller · Service · Repository", icone: "servidor" },
  { titulo: "PostgreSQL", detalhe: "Model · persistência", icone: "banco" },
];

const seguranca = [
  "Autenticação com token JWT e código de verificação por e-mail",
  "Senhas armazenadas com hash e regras de senha forte",
  "Rotas protegidas por perfil no front-end e no back-end",
  "Credenciais fora do código-fonte (variáveis de ambiente)",
  "Registro de ações em log para auditoria",
  "Termo de privacidade versionado e exclusão de dados",
];

export default function Tecnologias() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Tecnologias"
        titulo="Arquitetura e stack"
        descricao="A aplicação segue o padrão MVC, com front-end e back-end separados e comunicação via API REST."
      />

      <section className="secao">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Arquitetura</span>
            <h2>Fluxo de uma requisição</h2>
          </div>
          <div className="fluxo">
            {camadas.map((c, i) => (
              <div key={c.titulo} className="fluxo-item">
                <div className="fluxo-caixa">
                  <Icone nome={c.icone} tamanho={28} />
                  <strong>{c.titulo}</strong>
                  <small>{c.detalhe}</small>
                </div>
                {i < camadas.length - 1 && (
                  <span className="fluxo-seta">
                    <Icone nome="seta" />
                    {i === 1 && <small>API REST</small>}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="nota-fluxo">
            Integrações externas: <strong>Google Calendar API</strong> (agenda de aulas e eventos) e
            <strong> serviço de e-mail</strong> (códigos de acesso e notificações).
          </p>
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Stack</span>
            <h2>Tecnologias utilizadas</h2>
          </div>
          <div className="grade-cartoes">
            {tecnologias.map((t) => (
              <article key={t.camada} className="cartao">
                <div className="cartao-icone"><Icone nome={t.icone} /></div>
                <h3>{t.camada}</h3>
                <p>{t.texto}</p>
                <div className="chips">
                  {t.nomes.map((n) => <span key={n} className="chip">{n}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">Banco de dados</span>
            <h2>Principais entidades</h2>
            <div className="entidades">
              {entidades.map((e) => (
                <div key={e.nome} className="entidade">
                  <strong>{e.nome}</strong>
                  <ul>{e.campos.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="etiqueta">Segurança</span>
            <h2>Segurança e LGPD</h2>
            <ul className="lista-check grande">
              {seguranca.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
