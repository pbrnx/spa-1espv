import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.module.css";


//BLOCO DAS ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Produtos from "./routes/Produtos.jsx";
import EditarProdutos from "./routes/EditarProdutos.jsx";
import Error404 from "./routes/Error404.jsx";
import Cadastro from './routes/Cadastro.jsx';
import Login from './routes/Login.jsx';
const router = createBrowserRouter([
  {path: "/", element:<App/>,errorElement:<Error404/>, 
    children:[
      {path:"/" , element:<Home/>},
      {path:"/produtos" , element:<Produtos/>},
      {path:"/editar/produtos/:id" , element:<EditarProdutos/>},
      {path:"/cadastro" , element:<Cadastro/>},
      {path:"/login" , element:<Login/>}
    ]}
]);

//BLOCO DAS ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>
)
