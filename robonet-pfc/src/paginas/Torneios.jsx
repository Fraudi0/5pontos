import { useState } from "react";
import CabecalhoPagina from "../componentes/CabecalhoPagina";
import Icone from "../componentes/Icone";
import { equipesDemo } from "../dados/projeto";

const nomesFases = ["Quartas de final", "Semifinal", "Final"];

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Monta as fases a partir da ordem das equipes e dos vencedores escolhidos.
// Se um vencedor deixar de estar na luta (porque a fase anterior mudou), ele é ignorado.
function montarChave(equipes, vencedores) {
  const fases = [];
  let participantes = equipes;

  for (let fase = 0; fase < nomesFases.length; fase++) {
    const lutas = [];
    for (let i = 0; i < participantes.length; i += 2) {
      const a = participantes[i];
      const b = participantes[i + 1];
      const escolhido = vencedores[`${fase}-${i / 2}`];
      const vencedor = escolhido && (escolhido === a || escolhido === b) ? escolhido : null;
      lutas.push({ a, b, vencedor });
    }
    fases.push(lutas);
    participantes = lutas.map((l) => l.vencedor);
  }
  return fases;
}

export default function Torneios() {
  const [equipes, setEquipes] = useState(equipesDemo);
  const [vencedores, setVencedores] = useState({});

  const fases = montarChave(equipes, vencedores);
  const campeao = fases[fases.length - 1][0].vencedor;
  const lutasDecididas = fases.flat().filter((l) => l.vencedor).length;

  function escolher(fase, indice, equipe) {
    if (!equipe) return;
    setVencedores({ ...vencedores, [`${fase}-${indice}`]: equipe });
  }

  function sortear() {
    setEquipes(embaralhar(equipesDemo));
    setVencedores({});
  }

  return (
    <>
      <CabecalhoPagina
        etiqueta="Demonstração"
        titulo="Chaveamento de torneio"
        descricao="Simulação do módulo de torneios no formato mata-mata. Clique em uma equipe para registrá-la como vencedora da luta."
      />

      <section className="secao">
        <div className="container">
          <div className="barra-torneio">
            <div className="info-torneio">
              <strong>Copa RSM de Robótica 2026</strong>
              <span>Mogi das Cruzes · 8 equipes · {lutasDecididas} de 7 lutas decididas</span>
            </div>
            <div className="botoes">
              <button className="botao botao-secundario" onClick={() => setVencedores({})}>Limpar resultados</button>
              <button className="botao botao-primario" onClick={sortear}>Sortear chaves</button>
            </div>
          </div>

          <div className="chave">
            {fases.map((lutas, fase) => (
              <div key={fase} className="chave-fase">
                <h3>{nomesFases[fase]}</h3>
                <div className="chave-lutas">
                  {lutas.map((luta, indice) => (
                    <div key={indice} className="chave-luta">
                      <span className="chave-numero">Luta {indice + 1}</span>
                      {[luta.a, luta.b].map((equipe, lado) => (
                        <button
                          key={lado}
                          className={`chave-equipe ${!equipe ? "vazia" : ""} ${luta.vencedor === equipe && equipe ? "venceu" : ""} ${luta.vencedor && luta.vencedor !== equipe ? "perdeu" : ""}`}
                          disabled={!equipe || !luta.a || !luta.b}
                          onClick={() => escolher(fase, indice, equipe)}
                        >
                          {equipe || "A definir"}
                          {luta.vencedor === equipe && equipe && <span className="selo">Venceu</span>}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="chave-fase">
              <h3>Campeão</h3>
              <div className={`campeao ${campeao ? "definido" : ""}`}>
                <Icone nome="trofeu" tamanho={40} />
                <strong>{campeao || "Aguardando final"}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao secao-clara">
        <div className="container grade-tres">
          <div className="passo">
            <span>1</span>
            <h3>Cadastro do torneio</h3>
            <p>O professor informa nome, local, datas e regras, e inscreve as equipes participantes.</p>
          </div>
          <div className="passo">
            <span>2</span>
            <h3>Chaveamento automático</h3>
            <p>O sistema sorteia as lutas e cria as fases. Quando o número não é potência de 2, há folgas.</p>
          </div>
          <div className="passo">
            <span>3</span>
            <h3>Resultados</h3>
            <p>A cada vitória registrada, o vencedor avança. Alunos acompanham a chave em tempo real.</p>
          </div>
        </div>
      </section>
    </>
  );
}
