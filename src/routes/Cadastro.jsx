import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../routes/Form.scss';

function Cadastro() {
  // Declaração dos estados para armazenar as informações do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // Hook para navegação
  const history = useNavigate();

  // Função para atualizar o estado do nome conforme o usuário digita
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  // Função para atualizar o estado do email conforme o usuário digita
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Função para atualizar o estado da senha conforme o usuário digita
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  // Função para atualizar o estado do checkbox conforme o usuário interage
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Remove espaços em branco do começo e fim da string de email
    const checkMail = email.trim();

    // Verifica se todos os campos foram preenchidos e se o email contém '@'
    if (nome.length === 0 || email.length === 0 || senha.length === 0 || !checkMail.includes('@')) {
      alert("Verifique se preencheu todos os campos corretamente!");
      return;
    }

    // Cria um novo objeto de usuário com os dados do formulário
    const newUser = {
      nome,
      email,
      senha,
    };

    try {
      // Faz uma requisição POST para o servidor com os dados do novo usuário
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      // Se a resposta não for ok, lança um erro
      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Tente novamente.');
      }

      // Converte a resposta para JSON
      const result = await response.json();

      // Verifica se o usuário já existe
      if (result.userExists) {
        alert("Este email já está cadastrado!");
        history('/login');
        return;
      }

      // Alerta de sucesso e redirecionamento para a página de login
      alert('Cadastro realizado com sucesso! \nObrigado por fazer parte do Smart Grid');
      history('/login'); 
    } catch (error) {
      // Alerta em caso de erro na requisição
      alert(error.message);
    }
  }

  // Component return
  return (
    <>
 <h1>Cadastre-se e faça parte do nosso projeto!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginUsername">Nome:</label>
        <input type="text" placeholder='Digite seu nome completo' required value={nome} onChange={handleNomeChange} />
        <br />

        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder='Digite seu Email' required value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange} />
        <br />


        <button type="submit" id="loginButton">Cadastrar</button>
      </form>
    </>
  );
}

export default Cadastro;
