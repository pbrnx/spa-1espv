// Importando as bibliotecas e funções necessárias
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos() {
  
  // Obtendo o ID do produto da URL para saber qual produto editar
  const { id } = useParams();

  // Inicializando o estado para armazenar os detalhes do produto que será editado
  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    desc: "",
    valor: ""
  });

  // Hook para buscar os detalhes do produto quando o componente é montado
  useEffect(() => {
    fetch(`http://localhost:3000/produtos/${id}`)
      .then(response => response.json())
      .then(data => setProduto(data));
  }, [id]);

  // Função chamada sempre que um input muda de valor
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto(prevState => ({ ...prevState, [name]: value }));
  };

  // Função chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fazendo uma chamada de API para atualizar o produto
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

  // Renderização do componente
  return (
    <div>
      <h1>Editar Produtos</h1>

      <div>
        <form onSubmit={handleSubmit}>
          {/* Grupo de campos para editar o produto */}
          <fieldset>
            <legend>Produto Selecionado</legend>
            {/* Campo para editar o nome do produto */}
            <div>
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                name="nome" 
                value={produto.nome} 
                onChange={handleInputChange}
              />
            </div>
            {/* Campo para editar a descrição do produto */}
            <div>
              <label htmlFor="desc">Desc</label>
              <input 
                type="text" 
                name="desc" 
                value={produto.desc} 
                onChange={handleInputChange}
              />
            </div>
            {/* Campo para editar o valor do produto */}
            <div>
              <label htmlFor="valor">Valor</label>
              <input 
                type="number" 
                name="valor" 
                value={produto.valor} 
                onChange={handleInputChange}
              />
            </div>
            {/* Botão para enviar as mudanças */}
            <div>
              <button type="submit">EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
