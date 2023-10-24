import Conteudo from "../components/Conteudo";

export default function Home() {

  document.title = "HOME";

  return (
    <div>
      <h1>Home</h1> <br />
      <Conteudo /> 
      <div>
        <figure>
          <figcaption>PRODUTOS EM OFERTA</figcaption>
          <img src="/img/supermercado_640.png" alt="Prateleira de Produtos." />
        </figure>
       
      </div>
    </div>
  )
}

