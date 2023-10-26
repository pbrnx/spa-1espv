# Integrantes do Projeto:
  Pedro Augusto Carneiro Barone Bomfim RM: 99781 <br/>
  João Pedro de Albuquerque Oliveira RM: 551579 <br/>
  Mauricio Santos Rodrigues RM: 551076 <br/>
  Vitor Reyes Souza RM: 550766 <br/>
  Luis Serafin Bezagio Mendieta RM: 551588 <br/>


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
npm run dev

A aplicação deve ser iniciada em qualquer porta que **NÃO** seja a 3000, já que essa é a porta da base de dados json.

5. **Uso da Aplicação**
- Para visualizar todos os produtos, navegue até a página de produtos.
- Para adicionar um produto, utilize o formulário na página de produtos.
- Para editar um produto, clique no link "Editar" ao lado do produto desejado.

## Informações Adicionais

Lembre-se de que esta aplicação usa o `json-server` para simular uma API, o que significa que qualquer dado adicionado ou modificado será resetado caso o servidor seja reiniciado.
