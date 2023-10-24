import React, { useEffect, useState } from "react";


export default function Produtos() {
  document.title = "PRODUTOS";

  const [valorData, setValorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch valor data when the component mounts
    fetch("http://localhost:5174/produtos", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setValorData(response.map((item) => item.valor));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Produtos</h1>

      <div className="tblProdutos">
        <table>
          <thead>
            <tr>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {valorData.map((valor, indice) => (
              <tr key={indice}>
                <td>{valor}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>PRODUTOS / Qtd = {valorData.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
