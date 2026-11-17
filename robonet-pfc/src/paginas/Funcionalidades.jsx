import { useState } from "react";
import CabecalhoPagina from "../componentes/CabecalhoPagina";
import Icone from "../componentes/Icone";
import { modulos, perfis } from "../dados/projeto";

export default function Funcionalidades() {
  const [perfilAtivo, setPerfilAtivo] = useState(0);
  const perfil = perfis[perfilAtivo];

  return (
    <>
      <CabecalhoPagina
        etiqueta="Funcionalidades"
        titulo="Módulos da plataforma"
        descricao="Cada módulo resolve uma parte da organização das competições de robótica."
      />

      <section className="secao">
        <div className="container grade-cartoes">
          {modulos.map((m) => (
            <article key={m.titulo} className="cartao">
              <div className="cartao-icone"><Icone nome={m.icone} /></div>
              <h3>{m.titulo}</h3>
              <p>{m.resumo}</p>
              <ul className="lista-check">
                {m.itens.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container">
          <div className="titulo-secao">
            <span className="etiqueta">Controle de acesso</span>
            <h2>Cada perfil vê o que precisa</h2>
            <p>Selecione um perfil para ver as áreas liberadas.</p>
          </div>

          <div className="abas" role="tablist">
            {perfis.map((p, i) => (
              <button
                key={p.nome}
                role="tab"
                aria-selected={i === perfilAtivo}
                className={`aba ${i === perfilAtivo ? "aba-ativa" : ""}`}
                onClick={() => setPerfilAtivo(i)}
              >
                {p.nome}
              </button>
            ))}
          </div>

          <div className="painel-perfil">
            <div>
              <h3>{perfil.nome}</h3>
              <p>{perfil.descricao}</p>
            </div>
            <div className="chips">
              {perfil.permissoes.map((perm) => <span key={perm} className="chip chip-forte">{perm}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
