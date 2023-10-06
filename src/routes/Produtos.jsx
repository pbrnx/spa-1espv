import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Produtos() {
  document.title = "PRODUTOS";
  
  const [listaProdutosAPI, setListaProdutosAPI] = useState([]);

  useEffect(() => {
    console.log("EXECUTA APENAS UMA VEZ!");
    fetch("http://localhost:5000/produtos",{
      method:"GET",
      headers:{
        "Acepted":"application/json"
      }
    })
    .then((response)=> response.json())
    .then((response)=> setListaProdutosAPI(response))
    .catch((error) => console.log(error));
  }, [])

  return (

    <div>
      <h1>Produtos</h1>

        <div className="tblProdutos">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>VALOR</th>
                <th>EDITAR/EXCLUIR</th>
              </tr>
            </thead>
            <tbody>

                {listaProdutosAPI.map((item,indice)=>(
                  <tr key={indice}>
                      <td>{item.id}</td>
                      <td>{item.nome}</td>
                      <td>{item.desc}</td>
                      <td>{item.valor}</td>
                      <td>
                        <Link to={`/editar/produtos/${item.id}`}>Editar</Link>
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
  )
}


  // const [open, setOpen] = useState(false);s
        {/* {open ? <Modal open={true} setOpen={setOpen}/> : ""}

        <button onClick={()=> setOpen(true)}>OPEN-MODAL</button> */}

        // const [counter, setCounter] = useState(0);
        // document.title = "PRODUTOS - " + counter;
      
        // const [produto,setProduto] = useState({
        //    id:1,
        //    nome:"TESTE",
        //    desc:"TESTANDO",
        //    valor:230
        // });
      