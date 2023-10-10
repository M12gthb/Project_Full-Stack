# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Projeto de gerenciamento de anúncios e usuários de uma loja de catálogos de automóveis.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nest](https://docs.nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](../Back-end/src/modules/database/DER.png)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
npm install
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
npx run migrate dev
```

---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

Bearer Token

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Login](#1-login)
- [Users](#2-users)
  - [POST - /users](#21-criação-de-usuário)
  - [GET - /users](#22-listando-usuários)
  - [GET - /users/:userId](#23-listar-usuário-por-id)
  - [PATCH - /users/:userId](#24-edita-usuário-por-id)
  - [DELETE - /users/:userId](#25-deleta-usuário-por-id)
- [Anouncements](#3-anouncements)
- [Comments](#4-comments)

---

## 1. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método | Rota   | Descrição                      |
| ------ | ------ | ------------------------------ |
| POST   | /login | Registra o login de um usuário |

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "teste@mail.com",
  "password": "12345678"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjk2OTc2MDc0LCJleHAiOjE2OTY5ODY4NzQsInN1YiI6IjllMmRmZTc1LTRiNDYtNDgwMi04OGZjLTQxMzNjNjEwOGU5YSJ9.ucQGKjvDFyqplHL_hHujLB1imD4w-lxEttEvpUnjZ5s"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                 |
| ---------------- | ------------------------- |
| 401 Unauthorized | Invalid email or password |

## 2. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo       | Tipo                        | Descrição                      |
| ----------- | --------------------------- | ------------------------------ |
| id          | string                      | Identificador único do usuário |
| name        | string                      | O nome do usuário.             |
| email       | string                      | O e-mail do usuário.           |
| password    | string                      | A senha de acesso do usuário   |
| cpf         | string                      | Cpf único do usuário           |
| cell        | string                      | Numero de telefone do usuáro   |
| birthdate   | string                      | Data de aniversário do usuário |
| birthdate   | string                      | Data de aniversário do usuário |
| description | string                      | Descrição do usuário           |
| description | string                      | Descrição do usuário           |
| type        | ["comprador", "anunciante"] | Tipo de usuário                |
| address     | array                       | Endereço do usuário            |

### Endpoints

| Método | Rota            | Descrição                                      |
| ------ | --------------- | ---------------------------------------------- |
| POST   | /users          | Criação de um usuário.                         |
| GET    | /users          | Lista todos os usuários                        |
| GET    | /users/:user_id | Lista um usuário usando seu ID como parâmetro  |
| PATCH  | /users/:user_id | Edita um usuário usando seu ID como parâmetro  |
| DELETE | /users/:user_id | Deleta um usuário usando seu ID como parâmetro |

---

### 2.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "teste",
  "email": "teste@mail.com",
  "password": "12345678",
  "cpf": "000.000.000-00",
  "cell": "23456789",
  "birthdate": "21/20/2015",
  "description": "text",
  "type": "comprador",
  "address": {
    "cep": "00000-000",
    "state": "Ceará",
    "city": "arranguera",
    "street": "rua euclides pereira",
    "number": 15,
    "complement": "varchar"
  }
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "bbf64df3-3c77-42bb-9490-60342a27afbd",
  "name": "teste",
  "email": "teste@mail.com",
  "cpf": "000.000.000-00",
  "cell": "23456789",
  "birthdate": "21/20/2015",
  "description": "text",
  "type": "comprador",
  "address": [
    {
      "id": "7c7f4459-3a70-45d7-a2c0-bed94b7e8963",
      "cep": "00000-000",
      "state": "Ceará",
      "city": "arranguera",
      "street": "Ceará",
      "number": 15,
      "complement": "varchar",
      "userId": "bbf64df3-3c77-42bb-9490-60342a27afbd"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro | Descrição           |
| -------------- | ------------------- |
| 409 Conflict   | User already exists |

| Código do Erro  | Descrição              |
| --------------- | ---------------------- |
| 400 Bad Request | "error": "Bad Request" |

| Código do Erro  | Descrição              |
| --------------- | ---------------------- |
| 400 Bad Request | email must be an email |

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 409 Conflict   | Cpf alredy exist ! |

| Código do Erro | Descrição            |
| -------------- | -------------------- |
| 409 Conflict   | Email alredy exist ! |

---

### 2.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json

```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "bbf64df3-3c77-42bb-9490-60342a27afbd",
    "name": "teste",
    "email": "teste@mail.com",
    "cpf": "000.000.000-00",
    "cell": "23456789",
    "birthdate": "21/20/2015",
    "description": "text",
    "type": "comprador",
    "address": [
      {
        "id": "7c7f4459-3a70-45d7-a2c0-bed94b7e8963",
        "cep": "00000-000",
        "state": "Ceará",
        "city": "arranguera",
        "street": "Ceará",
        "number": 15,
        "complement": "varchar",
        "userId": "bbf64df3-3c77-42bb-9490-60342a27afbd"
      }
    ]
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:

```
GET /users/userId
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| userId    | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "bbf64df3-3c77-42bb-9490-60342a27afbd",
  "name": "teste",
  "email": "teste@mail.com",
  "cpf": "000.000.000-00",
  "cell": "23456789",
  "birthdate": "21/20/2015",
  "description": "text",
  "type": "comprador",
  "address": [
    {
      "id": "7c7f4459-3a70-45d7-a2c0-bed94b7e8963",
      "cep": "00000-000",
      "state": "Ceará",
      "city": "arranguera",
      "street": "Ceará",
      "number": 15,
      "complement": "varchar",
      "userId": "bbf64df3-3c77-42bb-9490-60342a27afbd"
    }
  ]
```

### Possíveis Erros:

| Código do Erro | Descrição        |
| -------------- | ---------------- |
| 404 Not Found  | User not found ! |

### 2.4. **Edita Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:

```
PATCH /users/userId
Host: http://localhost:3000
Authorization: Bearer Token do usuário a ser editado.
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| userId    | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "name": "teste2",
  "email": "teste2@mail.com",
  "address": [
    {
      "cep": "00000-002",
      "state": "Rio de Janeiro",
      "city": "arranguera",
      "street": "Ceará",
      "number": 15,
      "complement": "varchar",
    }
  ]
}

Obs: Campo de address deve está completo com todas as informações exceto o complement que é opicional caso contrário irá estourar um erro.
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "bbf64df3-3c77-42bb-9490-60342a27afbd",
  "name": "teste2",
  "email": "teste2@mail.com",
  "cpf": "000.000.000-00",
  "cell": "23456789",
  "birthdate": "21/20/2015",
  "description": "text",
  "type": "comprador",
  "address": [
    {
      "cep": "00000-002",
      "state": "Rio de Janeiro",
      "city": "arranguera",
      "street": "Ceará",
      "number": 15,
      "complement": "varchar",
      "userId": "bbf64df3-3c77-42bb-9490-60342a27afbd"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro | Descrição        |
| -------------- | ---------------- |
| 404 Not Found  | User not found ! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

| Código do Erro  | Descrição              |
| --------------- | ---------------------- |
| 400 Bad Request | "error": "Bad Request" |

| Código do Erro  | Descrição              |
| --------------- | ---------------------- |
| 400 Bad Request | email must be an email |

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 409 Conflict   | Cpf alredy exist ! |

| Código do Erro | Descrição            |
| -------------- | -------------------- |
| 409 Conflict   | Email alredy exist ! |

### 2.5. **Deleta Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:

```
DELETE /users/userId
Host: http://localhost:3000
Authorization: Bearer Token do usuário a ser deletado.
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| userId    | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro | Descrição        |
| -------------- | ---------------- |
| 404 Not Found  | User not found ! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

## 3. **Anouncements**

## 4. **Comments**
