Note Manager API

Note Manager API é uma API desenvolvida com Node.js e NestJS para gerenciamento de notas, permitindo login, cadastro de usuários e organização de anotações.

Tecnologias Utilizadas

Node.js

NestJS

MongoDB

Mongoose

Instalação

Clone o repositório:

git clone https://github.com/darlanRaimundo/note-manager-api.git

Acesse o diretório do projeto:

cd note-manager-api

Instale as dependências:

npm install

Configuração

Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias, como a URL do banco MongoDB.

Exemplo:

MONGO_URI=mongodb://localhost:27017/note-manager
JWT_SECRET=sua_chave_secreta

Execução

Para iniciar o servidor em modo desenvolvimento:

npm run start

Para iniciar o servidor em modo observação:

npm run start:dev

Para rodar em modo de produção:

npm run start:prod

Rotas Principais

Autenticação

POST /auth/signup - Cadastro de usuário

POST /auth/login - Login do usuário

Notas

GET /notes - Listar todas as notas do usuário

POST /notes - Criar uma nova nota

PUT /notes/:id - Atualizar uma nota existente

DELETE /notes/:id - Excluir uma nota

Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤ por Darlan Raimundo 🚀
