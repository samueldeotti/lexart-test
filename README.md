# Projeto de Gerenciamento de Produtos

Este projeto é um aplicativo web desenvolvido para gerenciar produtos, utilizando Node.js para o backend e React para o frontend. Ele oferece recursos de autenticação de usuário, operações CRUD (Create, Read, Update, Delete) de produtos e integração com APIs externas para consumo e inserção de produtos. O backend é hospedado em Vercel Functions e o frontend é hospedado na plataforma Vercel.

## Deploy

O projeto está disponível para acesso no seguinte link: [Link do Deploy](https://lexart-test-xi.vercel.app/)

## Tecnologias Utilizadas

### Frontend
- HTML
- CSS
- Javascript
- React
- React Router
- Styled-components
- Formulários com validação
- Responsividade e adaptação de aplicação web para front.

### Backend
- Node.js
- Typescript
- Express.js
- PostgreSQL
- Sequelize
- Dotenv
- Bcryptjs
- Jsonwebtoken

### Infraestrutura
Ambos hospedados nos Serviços da Vercel

## Requisitos do Projeto

### Backend (Node.js em Vercel functions):

- API de registro e login.
- API RESTful para operações CRUD de produtos.
- Utilização de Express.js para roteamento.
- Utilização de Sequelize para interagir com o banco de dados.
- Banco de dados PostgreSQL do Vercel.
- Rotas exclusivas para consumo e inserção de produtos com autorização.

### Frontend (React no Vercel):

- Formulário para registro e login.
- Interface de usuário para mostrar os produtos e permitir operações CRUD disponíveis apenas para usuários logados.
- Rotas para navegar entre diferentes visualizações.
- Consumo de serviços para interação com a API RESTful do backend.

## Funcionalidades

- Página para login e registro.
- Página principal para mostrar todos os produtos disponíveis e seus detalhes, acessível apenas após login.
- Adição, edição e exclusão de produtos.
- Pesquisa e filtragem de produtos.
- Listagem e inserção de produtos de APIs externas.



