import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos() {
  
  const { id } = useParams();

  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    desc: "",
    valor: ""
  });

  useEffect(() => {
    // Fetch the product with the given id from the server
    fetch(`http://localhost:3000/produtos/${id}`)
      .then(response => response.json())
      .then(data => setProduto(data));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make an API call to update the product
    fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(updatedProduct => {
      setProduto(updatedProduct);
      alert('Produto atualizado.');
    });
  };

  return (
    <div>
      <h1>Editar Produtos</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                name="nome" 
                value={produto.nome} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="desc">Desc</label>
              <input 
                type="text" 
                name="desc" 
                value={produto.desc} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="valor">Valor</label>
              <input 
                type="number" 
                name="valor" 
                value={produto.valor} 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button type="submit">EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
