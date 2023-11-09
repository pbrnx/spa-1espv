import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../routes/Form.scss';

function Login() {
  // Define o título do documento para a página de login
  document.title = "Smart Grid | Login";

  // Estados para armazenar o email e a senha inseridos pelo usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Hook para navegação
  const history = useNavigate();

  // Verifica se o usuário já está logado
  const checkPreviousLogin = () => {
    // Obtém o status de login do armazenamento da sessão
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    // Se já estiver logado, alerta o usuário e redireciona
    if (isLoggedIn) {
      alert('Você já está logado.');
      history('/produtos'); 
      return true; 
    }
    // Retorna falso se não estiver logado
    return false; 
  };

  // Atualiza o estado do email conforme o usuário digita
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Atualiza o estado da senha conforme o usuário digita
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  // Lida com o processo de login
  const handleLogin = async () => {
    // Se já estiver logado, interrompe a função
    if (checkPreviousLogin()) {
      return; 
    }

    // Tenta buscar os usuários do servidor
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.');
      }
      // Converte a resposta para JSON
      const users = await response.json();
      // Encontra o usuário com o email e senha correspondentes
      const user = users.find(u => u.email === email.trim() && u.senha === senha);

      // Se o usuário for encontrado, define o status de login e alerta o sucesso
      if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        alert(`Login bem sucedido! Bem-vindo(a) ${user.nome}!`);
        history('/produtos'); 
      } else {
        // Se não encontrar o usuário, alerta que as credenciais não foram encontradas
        alert("Credenciais de Login não encontradas.");
      }
    } catch (error) {
      // Alerta em caso de erro na requisição
      alert(error.message);
    }
  };

  // Hook para navegação usado no logout
  const navigate = useNavigate();

  // Lida com o processo de logout
  const handleLogout = () => {  
    // Remove o status de login do armazenamento da sessão
    sessionStorage.removeItem('isLoggedIn');
    // Alerta o usuário que ele foi desconectado e redireciona para a página inicial
    alert('Você foi desconectado.');
    navigate('/');
  };

  return (
    <>
      <h1>Faça Login!</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="loginEmail">Email:</label>
        <input type="text" id="loginEmail" placeholder="Digite seu email" required value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange} />
        <br />
        <div className='containerLoginButton'>
          <button type="submit" onClick={handleLogin}>Login</button>
          <button type="submit" onClick={handleLogout}>Logout</button>
        </div>  
      </form>
    </>
  );
}

export default Login;
