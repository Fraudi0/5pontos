// Faixa de título usada no topo de cada página interna
export default function CabecalhoPagina({ etiqueta, titulo, descricao }) {
  return (
    <section className="cabecalho-pagina">
      <div className="container">
        <span className="etiqueta">{etiqueta}</span>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </section>
  );
}
