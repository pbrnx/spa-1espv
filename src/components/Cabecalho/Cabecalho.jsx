import { Link } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {
  return (
    <>
      <header className="cabecalho">
        <h1>PRODUTOS</h1>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
