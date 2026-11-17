import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { para: "/", texto: "Início" },
  { para: "/sobre", texto: "Sobre" },
  { para: "/funcionalidades", texto: "Funcionalidades" },
  { para: "/torneios", texto: "Torneios" },
  { para: "/tecnologias", texto: "Tecnologias" },
  { para: "/equipe", texto: "Equipe" },
];

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-conteudo">
        <Link to="/" className="marca" onClick={() => setAberto(false)}>
          <span className="marca-logo">R</span>
          <span className="marca-texto">
            <strong>ROBONET</strong>
            <small>TCC · UMC</small>
          </span>
        </Link>

        <button
          className="menu-botao"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span /><span /><span />
        </button>

        <nav className={`menu ${aberto ? "menu-aberto" : ""}`} aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === "/"}
              className={({ isActive }) => `menu-link ${isActive ? "ativo" : ""}`}
              onClick={() => setAberto(false)}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
