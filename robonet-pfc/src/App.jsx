import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Rodape from "./componentes/Rodape";
import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";
import Funcionalidades from "./paginas/Funcionalidades";
import Torneios from "./paginas/Torneios";
import Tecnologias from "./paginas/Tecnologias";
import Equipe from "./paginas/Equipe";
import NaoEncontrada from "./paginas/NaoEncontrada";

// Volta ao topo sempre que a página muda
function RolarParaTopo() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RolarParaTopo />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/torneios" element={<Torneios />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
    </>
  );
}
