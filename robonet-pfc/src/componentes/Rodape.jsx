import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <div>
          <div className="marca">
            <span className="marca-logo">R</span>
            <span className="marca-texto"><strong>ROBONET</strong></span>
          </div>
          <p>
            Plataforma web para gerenciamento de torneios de robótica educacional.
            Trabalho de Conclusão de Curso — Bacharelado em Sistemas de Informação, UMC.
          </p>
        </div>

        <div>
          <h4>Páginas</h4>
          <Link to="/sobre">Sobre o projeto</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <Link to="/torneios">Torneios</Link>
          <Link to="/tecnologias">Tecnologias</Link>
          <Link to="/equipe">Equipe</Link>
        </div>

        <div>
          <h4>Autores</h4>
          <span>Paola dos Santos Ramos</span>
          <span>Bruno Bernardelli Fraudio</span>
          <span>Mogi das Cruzes — SP, 2026</span>
        </div>
      </div>
      <div className="container rodape-final">
        © 2026 RoboNet · Projeto acadêmico
      </div>
    </footer>
  );
}
