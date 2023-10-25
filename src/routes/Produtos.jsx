import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from '../dados.json';
import "./Produtos.scss";

export default function Produtos() {
  document.title = "PRODUTOS";
  
  const [listaProdutosAPI, setListaProdutosAPI] = useState([]);

  useEffect(() => {
    setListaProdutosAPI(data.produtos);
  }, []);

  const addProduct = (product) => {
    setListaProdutosAPI([...listaProdutosAPI, { ...product, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    const newProducts = listaProdutosAPI.filter(product => product.id !== id);
    setListaProdutosAPI(newProducts);
  };

  return (
    <div>
      <h1>Produtos</h1>
      <AddProduct onAdd={addProduct} />

      <div className="tblProdutos">
        <table>
          <thead>
            <tr>            
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>VALOR</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutosAPI.map((item) => (
              <tr key={item.id}>               
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  <Link to={`/editar/produtos/${item.id}`}>Editar</Link>
                  <button onClick={() => deleteProduct(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
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

function AddProduct({ onAdd }) {
  const [product, setProduct] = useState({
    nome: "",
    desc: "",
    valor: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.nome && product.desc && product.valor) {
      onAdd(product);
      setProduct({
        nome: "",
        desc: "",
        valor: ""
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}
