import "./Conteudo.scss";

export default function Conteudo() {
  return (
    <>
    <h1 className="title">Home</h1>
      <section>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nulla architecto voluptate. Distinctio eos recusandae incidunt
            voluptates velit maxime qui necessitatibus voluptas id, sit dolorem
            officia dolore vel? Aspernatur, molestias?
          </p>
          <p>
            Quaerat dignissimos quasi, adipisci sed voluptates neque atque esse
            eius, at iure incidunt. Impedit corrupti non architecto nam odit
            maiores et molestiae, nemo, repellendus saepe quae iure laudantium,
            dolorem ex.
          </p>
        </div>
      </section>

      <div className="container-prateleira">
          <h1 className="legenda">PRODUTOS EM OFERTA</h1> 
          <img src="/img/supermercado_640.png" alt="Prateleira de Produtos." />
      </div>
       
    </>
  );
}
