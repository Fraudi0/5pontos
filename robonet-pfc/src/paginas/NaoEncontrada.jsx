import { Link } from "react-router-dom";
import Icone from "../componentes/Icone";

export default function NaoEncontrada() {
  return (
    <section className="secao nao-encontrada">
      <div className="container centro">
        <Icone nome="robo" tamanho={64} />
        <h1>Página não encontrada</h1>
        <p>O robô procurou, mas esta página não existe.</p>
        <Link to="/" className="botao botao-primario">Voltar ao início</Link>
      </div>
    </section>
  );
}
