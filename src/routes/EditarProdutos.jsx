import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from '../dados.json';

export default function EditarProdutos() {
  
  const { id } = useParams();
  const productFromData = data.produtos.find(p => p.id === Number(id));

  const [produto, setProduto] = useState(productFromData || {
    id: "",
    nome: "",
    desc: "",
    valor: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto(prevState => ({ ...prevState, [name]: value }));
  };

  // You'd normally make an API call to save the edits
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Produto atualizado.');
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
