# Aplicação de Produtos

Uma aplicação simples para listar, adicionar e editar produtos.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [json-server](https://www.npmjs.com/package/json-server) (para simular uma API RESTful)

## Passo a Passo para Configuração

1. **Instalação de Dependências**
   No diretório raiz do projeto, execute:
npm install

2. **Instalação do json-server**
npm install -g json-server

3. **Iniciar a Simulação da API**
No diretório raiz do projeto, execute:
json-server --watch dados.json --port 3000
Isso inicia o `json-server` na porta 3000, usando `dados.json` como seu banco de dados.

4. **Executar a Aplicação**
Em um novo terminal (sem fechar o json-server), navegue até o diretório raiz do projeto e execute:
npm start

A aplicação deve ser iniciada em `http://localhost:3001` ou a próxima porta disponível (se a porta 3001 estiver ocupada).

5. **Uso da Aplicação**
- Para visualizar todos os produtos, navegue até a página de produtos.
- Para adicionar um produto, utilize o formulário na página de produtos.
- Para editar um produto, clique no link "Editar" ao lado do produto desejado.

## Informações Adicionais

Lembre-se de que esta aplicação usa o `json-server` para simular uma API, o que significa que qualquer dado adicionado ou modificado será resetado caso o servidor seja reiniciado.

## Suporte

Se você encontrar algum problema ou tiver uma sugestão, sinta-se à vontade para criar um issue ou pull request no GitHub.
