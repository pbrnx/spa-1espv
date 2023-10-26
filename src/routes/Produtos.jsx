// Importando as bibliotecas e estilos necessários
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Produtos.scss";

export default function Produtos() {
 { /* Configurando o título da página*/}
  document.title = "PRODUTOS";
  
  // Inicializando o estado para armazenar a lista de produtos obtidos da API
  const [listaProdutosAPI, setListaProdutosAPI] = useState([]);

  // Hook para buscar a lista de produtos da API quando o componente é montado
  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => response.json())
      .then(data => setListaProdutosAPI(data));
  }, []);

  // Função para adicionar um novo produto na API
  const addProduct = (product) => {
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(newProduct => {
      // Atualizando o estado com o novo produto adicionado
      setListaProdutosAPI([...listaProdutosAPI, newProduct]);
    });
  };

  // Função para deletar um produto da API
  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'DELETE',
    })

    
    .then(() => {
      // Atualizando o estado removendo o produto deletado
      const newProducts = listaProdutosAPI.filter(product => product.id !== id);
      setListaProdutosAPI(newProducts);
    });
  };

  // Renderização do componente
  return (
    <div>
      <h1>Produtos</h1>
      {/* Componente para adicionar um novo produto*/} 
      <AddProduct onAdd={addProduct} />

      {/* Tabela para mostrar a lista de produtos*/}
      <div className="tblProdutos">
        <table>
          <thead>
            {/*Cabeçalho da tabela*/}
            <tr>            
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>VALOR</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeamento dos produtos para exibir cada um em uma linha da tabela*/}
            {listaProdutosAPI.map((item) => (
              <tr key={item.id}>               
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {/* Link para editar o produto e botão para deletá-lo*/}
                  <Link to={`/editar/produtos/${item.id}`}>Editar</Link>
                  <button onClick={() => deleteProduct(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* Rodapé da tabela*/}
          <tfoot>
            <tr>
              <td colSpan={4}>PRODUTOS / Qtd = {listaProdutosAPI.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// Componente para adicionar um novo produto
function AddProduct({ onAdd }) {

// Estado para armazenar o novo produto a ser adicionado
  const [product, setProduct] = useState({
    nome: "",
    desc: "",
    valor: ""
  });

// Função chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
// Verificando se todos os campos do produto estão preenchidos
    if (product.nome && product.desc && product.valor) {
      onAdd(product);
// Resetando o estado do produto após a adição
      setProduct({
        nome: "",
        desc: "",
        valor: ""
      });
    }
  };

// Renderização do componente de adição de produto
  return (
    <div>
      <form onSubmit={handleSubmit}>
      { /* Campos de input para nome, descrição e valor do produto*/} 
        <input 
          type="text" 
          placeholder="Nome" 
          value={product.nome}
          onChange={(e) => setProduct({ ...product, nome: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Desc" 
          value={product.desc}
          onChange={(e) => setProduct({ ...product, desc: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Valor" 
          value={product.valor}
          onChange={(e) => setProduct({ ...product, valor: e.target.value })}
        />
        { /*Botão para submeter o formulário e adicionar o produto*/}
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}
