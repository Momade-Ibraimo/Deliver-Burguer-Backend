
# Deliver Burguer — Back-End 🍔

API REST completa para aplicação de delivery de hamburguer.
Construída com Node.js e Express, com autenticação JWT, upload de imagens,
integração com PostgreSQL e MongoDB e arquitetura MVC.

## 🔗 Repositórios do Projeto

| | Link |
|---|---|
| **Back-End** | [github.com/Momade-Ibraimo/Deliver-Burguer-Backend](https://github.com/Momade-Ibraimo/Deliver-Burguer-Backend) |
| **Front-End** | [momade-ibraimo.github.io/Deliver-Burguer](https://github.com/Momade-Ibraimo/Deliver-Burguer) |

## Funcionalidades

- Autenticação e autorização de usuários com JWT
- Criptografia de senhas com Bcrypt
- Cadastro, listagem, edição e remoção de produtos
- Upload de imagens de produtos com Multer
- Gestão de categorias
- Criação e listagem de pedidos
- Controle de sessão de usuários
- Dados relacionais no PostgreSQL via Sequelize
- Dados de pedidos no MongoDB via Mongoose
- Validação de dados com Yup
- Suporte a CORS para integração com o Front-End

## Tecnologias

- Node.js
- Express 5
- JWT (jsonwebtoken)
- Bcrypt
- Sequelize ORM + PostgreSQL
- Mongoose + MongoDB
- Multer
- Yup
- UUID
- Nodemon + Sucrase
- ESLint + Prettier

## Arquitetura

```
src/
├── app/
│   ├── controllers/
│   │   ├── CategoryController.js
│   │   ├── OrderController.js
│   │   ├── ProductController.js
│   │   ├── SessionController.js
│   │   └── UserController.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   ├── category.js
│   │   ├── product.js
│   │   └── User.js
│   └── schemas/
│       └── Order.js
├── config/
├── database/
├── uploads/
├── app.js
├── routes.js
└── server.js
```

## Decisão de banco de dados

- **PostgreSQL + Sequelize** — dados relacionais: usuários, produtos e categorias
- **MongoDB + Mongoose** — pedidos, por serem documentos flexíveis com
  itens variáveis e histórico de status

## Endpoints

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | /users | Cadastro de usuário | ❌ |
| POST | /sessions | Login e geração de token | ❌ |
| GET | /products | Listagem de produtos | ✅ |
| POST | /products | Cadastro de produto | ✅ Admin |
| PUT | /products/:id | Edição de produto | ✅ Admin |
| DELETE | /products/:id | Remoção de produto | ✅ Admin |
| GET | /categories | Listagem de categorias | ✅ |
| POST | /categories | Cadastro de categoria | ✅ Admin |
| GET | /orders | Listagem de pedidos | ✅ |
| POST | /orders | Criação de pedido | ✅ |

## Como rodar

Clone o repositório e instale as dependências:

```bash
yarn install
```

Configure as variáveis de ambiente criando um arquivo `.env`:

```env
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=codeburguer
MONGO_URL=mongodb://localhost:27017/codeburguer
```

Rode as migrations do banco:

```bash
yarn sequelize db:migrate
```

Inicie o servidor:

```bash
yarn dev
```

A API estará disponível em `http://localhost:3000`.
```

---

##  Commits do Back-End

```
commit inicial - setup do projeto com express e nodemon
```
```
configura sucrase e eslint com prettier
```
```
configura cors e estrutura base do servidor
```
```
conecta banco de dados postgresql com sequelize
```
```
conecta banco de dados mongodb com mongoose
```
```
cria model e migration de usuários
```
```
cria controller de usuários com cadastro e validação com yup
```
```
implementa autenticação com jwt e bcrypt
```
```
cria middleware de autenticação para rotas privadas
```
```
cria controller de sessão para login e geração de token
```
```
cria model e migration de categorias
```
```
cria controller de categorias com crud completo
```
```
cria model e migration de produtos
```
```
configura multer para upload de imagens de produtos
```
```
cria controller de produtos com crud e upload de imagem
```
```
cria schema de pedidos no mongodb com mongoose
```
```
cria controller de pedidos com criação e listagem
```
```
organiza rotas e aplica middlewares de autenticação
```
```
adiciona validações com yup nos controllers
```
```
adiciona suporte a admin nas rotas protegidas
