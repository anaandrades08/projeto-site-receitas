Projeto Site de Receitas
Este projeto é um site de receitas que permite aos usuários cadastrar-se, fazer login, criar receitas e enviar feedback. O projeto é dividido em duas partes principais:

Backend (Server): Desenvolvido com Node.js, Express e Prisma.

Frontend (Client): Desenvolvido com Next.js (ou React).

Funcionalidades
Cadastro de Usuário: Os usuários podem se cadastrar fornecendo email, senha e nome.

Login de Usuário: Os usuários podem fazer login com email e senha.

Cadastro de Receitas: Os usuários podem criar receitas com título, descrição e ingredientes.

Listagem de Receitas: As receitas cadastradas são exibidas em uma lista.

Feedback: Os usuários podem enviar feedback sobre o site.

Tecnologias Utilizadas
Backend (Server)
Node.js: Ambiente de execução JavaScript.

Express: Framework para criar APIs.

Prisma: ORM para interagir com o banco de dados.

bcryptjs: Para criptografar senhas.
npm install bcryptjs

jsonwebtoken: Para autenticação via JWT.

npm install express cors body-parser @prisma/client bcryptjs jsonwebtoken

PostgreSQL: Banco de dados relacional.

Frontend (Client)
Next.js: Framework React para construção de interfaces.

Axios: Para fazer chamadas à API do backend.

CSS: Estilização básica com CSS inline.

Como Executar o Projeto
Pré-requisitos
Node.js (v18 ou superior)

PostgreSQL (ou outro banco de dados suportado pelo Prisma)

npm ou yarn