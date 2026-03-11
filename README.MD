j# Projeto de Backend e Frontend

## Descrição
Este projeto é uma aplicação web composta por um backend e um frontend. O backend é responsável por gerenciar a lógica de negócios e fornecer uma API para o frontend, enquanto o frontend é responsável por exibir a interface do usuário.

## Estrutura do Projeto

### Backend
O backend foi desenvolvido utilizando Node.js e Express. Ele contém as seguintes pastas principais:

- **controllers/**: Contém os controladores que recebem e controlam as requisições HTTP. Exemplo: `userControllers.js`.
- **database/**: Contém a simulação de um banco de dados. Exemplo: `db.js`.
- **model/**: Define a estrutura dos dados. Exemplo: `userModel.js`.
- **router/**: Define as rotas da aplicação. Exemplo: `UserRouter.js`.
- **services/**: Contém a lógica de negócios da aplicação. Exemplo: `userServices.js`.

#### Principais Funcionalidades do Backend
- Criar usuários.
- Listar todos os usuários.
- Buscar usuário por ID.
- Atualizar informações de um usuário.
- Deletar um usuário.

O servidor é iniciado no arquivo `app.js` e escuta na porta 3000.

### Frontend
O frontend é composto por um arquivo HTML simples (`index.html`) que pode ser utilizado para interagir com o backend.

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado na máquina.

### Passos para executar o backend
1. Navegue até a pasta `backend`.
2. Instale as dependências com o comando:
   ```bash
   npm install
   ```
3. Inicie o servidor com o comando:
   ```bash
   node app.js
   ```
4. O servidor estará disponível em `http://localhost:3000`.

### Passos para executar o frontend
1. Abra o arquivo `index.html` no navegador.
2. Certifique-se de que o backend está em execução para que o frontend possa consumir a API.

## Estrutura de Rotas da API

- **GET /users**: Retorna todos os usuários.
- **GET /users/:id**: Retorna um usuário específico pelo ID.
- **POST /users**: Cria um novo usuário.
- **PUT /users/:id**: Atualiza um usuário existente.
- **DELETE /users/:id**: Deleta um usuário.

## Tecnologias Utilizadas
- **Backend**: Node.js, Express
- **Frontend**: HTML

## Autor
Este projeto foi desenvolvido por Paulo cardoso.