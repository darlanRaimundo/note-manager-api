# Note Manager API

![GitHub repo size](https://img.shields.io/github/repo-size/darlanRaimundo/note-manager-api)
![GitHub last commit](https://img.shields.io/github/last-commit/darlanRaimundo/note-manager-api)
![GitHub license](https://img.shields.io/github/license/darlanRaimundo/note-manager-api)

Note Manager API é uma API desenvolvida com Node.js e NestJS para gerenciamento de notas, permitindo login, cadastro de usuários e organização de anotações.

## 🚀 Tecnologias Utilizadas

- 🟢 **Node.js**
- 🚀 **NestJS**
- 🗄️ **MongoDB**
- 📦 **Mongoose**

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/darlanRaimundo/note-manager-api.git
```

Acesse o diretório do projeto:

```bash
cd note-manager-api
```

Instale as dependências:

```bash
npm install
```

## ⚙️ Configuração

Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias, como a URL do banco MongoDB.

Exemplo:

```env
MONGO_URI=mongodb://localhost:27017/note-manager
JWT_SECRET=sua_chave_secreta
PORT=3000
```

## ▶️ Execução

Para iniciar o servidor em modo desenvolvimento:

```bash
npm run start
```

Para iniciar o servidor em modo observação:

```bash
npm run start:dev
```

Para rodar em modo de produção:

```bash
npm run start:prod
```

## 🔗 Rotas Principais

## 🛡 Autenticação
- POST /auth/signup - Cadastro de usuário
- POST /auth/login - Login do usuário

## 📝 Notas
- GET /notes - Listar todas as notas do usuário
- POST /notes - Criar uma nova nota
- PUT /notes/:id - Atualizar uma nota existente
- DELETE /notes/:id - Excluir uma nota

## 📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

### Feito com ❤ por Darlan Raimundo 🚀


