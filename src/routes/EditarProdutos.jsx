import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos() {
  
    const {id} = useParams();

    const[produto, setProduto] = useState({
      id:id,
      nome:"",
      desc:"",
      valor:""
    });

    useEffect(() => {
      
      //http://localhost:5000/produtos/2
  
      //Realizando uma requisição para a API-JSON utilizando
      // o id como parâmetro, para receber um único produto/objeto
      //Para edição.
      fetch(`http://localhost:5000/produtos/${id}`)
      .then((response)=> response.json())
      .then((response)=> setProduto(response))
      .catch((error)=> console.error(error));
    }, [id])
    


  return (
    <div>
      <h1>Editar Produtos</h1>

      <div>
        <form>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="">Nome</label>
              <input type="text" name="nome" value={produto.nome} onChange={(e)=>setProduto(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="">Desc</label>
              <input type="text" name="desc" value={produto.desc} onChange={(e)=>setProduto(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="">Valor</label>
              <input type="number" name="valor" value={produto.valor} onChange={(e)=>setProduto(e.target.value)}/>
            </div>
            <div>
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>

    </div>
  )
}
