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
  - [POST - /anouncements](#31-criação-de-um-anúncio)
  - [GET - /anouncements](#32-lista-todos-os-anúncio)
  - [GET - /anouncements/:anouncementId](#33-lista-um-anúncio-usando-seu-id-como-parâmetro)
  - [PATCH - /anouncements/:anouncementId](#34-edita-um-anúncio-usando-seu-id-como-parâmetro)
  - [DELETE - /anouncements/:anouncementId](#35-deleta-um-anúncio-usando-seu-id-como-parâmetro)
  - [GET - /anouncements/user/:userId](#36-lista-todos-od-anúncios-do-usuário-usando-seu-id-como-parâmetro)
- [Comments](#4-comments)
  - [POST - /comments/:/anouncementId](#41-criação-de-um-comentário)
  - [GET - /comments/:anouncementId](#42-lista-todos-os-comentários-de-um-anúncio)
  - [PATCH - /comments/:comentId](#43-edita-um-comentário)
  - [DELETE - /comments/:comentId](#44-deleta-um-comentário)

---

## 1. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método | Rota   | Descrição                      |
| ------ | ------ | ------------------------------ |
| POST   | /login | Registra o login de um usuário |

### Exemplo de Request:

```
POST /login

Host: http://localhost:3000
```

Authorization: None

```
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
  {
	"id": "aaef0eb0-adec-47a9-be49-86c398e87573",
	"type": "anunciante",
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
```

Host: http://localhost:3000

```
Authorization: None
```

Content-type: application/json

````

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
````

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

obs: É necessário que todos os campos sejam passados corretamente.

---

### 2.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
```

Host: http://localhost:3000

```
Authorization: None
```

Content-type: application/json

````

### Corpo da Requisição:

```json
Vazio
````

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
```

Host: http://localhost:3000

```
Authorization: None
```

Content-type: application/json

````

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| userId    | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
````

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
```

Host: http://localhost:3000

```
Authorization: Bearer Token do usuário a ser editado.
```

Content-type: application/json

````

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
````

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
```

Host: http://localhost:3000

```
Authorization: Bearer Token do usuário a ser deletado.
```

Content-type: application/json

````

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| userId    | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
vazio
````

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

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Anouncements é definido como:

| Campo       | Tipo                   | Descrição                              |
| ----------- | ---------------------- | -------------------------------------- |
| id          | string                 | Identificador único do anúncio         |
| brand       | string                 | marca do anúncio                       |
| model       | string                 | Modelo do anúncio                      |
| year        | int                    | Ano do anúncio                         |
| fuel        | ["gasolina", "etanol"] | Tipo de combustíves                    |
| mileage     | int                    | Numero milhas rodadas                  |
| color       | string                 | Cor do veículo                         |
| priceTabel  | int                    | Preço por tabela                       |
| price       | int                    | Preço do veículo                       |
| description | string                 | Descrição do anúncio                   |
| publish     | boolean                | Estado de publicação                   |
| cover_img   | string                 | url da imagem                          |
| userId      | string                 | ID do usuário vinculado aquele anúncio |
| images      | array                  | imagens do anúncio                     |
| coments     | array                  | comentários do anúncio                 |

### Endpoints

| Método | Rota                         | Descrição                                                       |
| ------ | ---------------------------- | --------------------------------------------------------------- |
| POST   | /anouncements                | Criação de um anúncio                                           |
| GET    | /anouncements                | Lista todos os anúncio                                          |
| GET    | /anouncements/user/:userId   | Lista todos od anúncios do usuário usando seu ID como parâmetro |
| GET    | /anouncements/:anouncementId | Lista um anúncio usando seu ID como parâmetro                   |
| PATCH  | /anouncements/:anouncementId | Edita um anúncio usando seu ID como parâmetro                   |
| DELETE | /anouncements/:anouncementId | Deleta um anúncio usando seu ID como parâmetro                  |

### 3.1. **Criação de um anúncio**

### `/anouncements`

```
POST /anouncements
```

Host: http://localhost:3000

```
Authorization: Bearer token do tipo anunciante
```

Content-type: application/json

````
### Corpo da Requisição:

```json
{
  "brand": "data.brand",
  "model": "data.model",
  "year": 2000,
  "fuel": "gasolina",
  "mileage": 30000,
  "color": "data.color",
  "priceTabel": 40000,
  "description": "data.description",
  "publish": false,
  "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
  "price": 28000,
  "images": [
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    },
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    }
  ]
}
````

### Exemplo de Response:

```
201 Created
```

```json
{
  "brand": "data.brand",
  "model": "data.model",
  "year": 2000,
  "fuel": "gasolina",
  "mileage": 30000,
  "color": "data.color",
  "priceTabel": 40000,
  "description": "data.description",
  "publish": false,
  "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
  "price": 28000,
  "images": [
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    },
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    }
  ],
  "coments": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                 |
| ---------------- | ------------------------- |
| 401 Unauthorized | Invalid email or password |

| Código do Erro  | Descrição             |
| --------------- | --------------------- |
| 400 Bad Request | "error":"Bad Request" |

obs: É necessário que todos os campos sejam passados corretamente.

### 3.2. **Lista todos os anúncio**

### `/anouncements`

### Exemplo de Request:

```
GET /anouncements
```

Host: http://localhost:3000

```
Authorization: None
```

Content-type: application/json

````

### Corpo da Requisição:

```json

````

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "1f4c8680-56af-4272-b5c1-c571315e5c50",
    "brand": "data.brand",
    "model": "data.model",
    "year": 2000,
    "fuel": "gasolina",
    "mileage": 30000,
    "color": "data.color",
    "priceTabel": 40000,
    "price": 28000,
    "description": "data.description",
    "publish": false,
    "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
    "userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
    "images": [
      {
        "id": "384113fd-67b2-48f5-bb53-af41e176e817",
        "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
        "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
      }
    ],
    "coments": [
      {
        "id": "4a737c04-2aa5-4774-a597-b2cf1edff5b8",
        "comment": "Este é um comentário teste.",
        "commentDate": "2023-10-09T20:39:26.847Z",
        "userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
        "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
      }
    ]
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.3. **Lista um anúncio usando seu ID como parâmetro**

### `/anouncements/:anouncementId`

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                    |
| ------------- | ------ | -------------------------------------------- |
| anouncementId | string | Identificador único do anúncio (anouncement) |

### Exemplo de Request:

```
GET /anouncements/:anouncementId
```

Host: http://localhost:3000

```
Authorization: None
```

Content-type: application/json

````

### Corpo da Requisição:

```json
Vazio
````

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "1f4c8680-56af-4272-b5c1-c571315e5c50",
    "brand": "data.brand",
    "model": "data.model",
    "year": 2000,
    "fuel": "gasolina",
    "mileage": 30000,
    "color": "data.color",
    "priceTabel": 40000,
    "price": 28000,
    "description": "data.description",
    "publish": false,
    "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
    "userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
    "images": [
      {
        "id": "384113fd-67b2-48f5-bb53-af41e176e817",
        "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
        "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
      }
    ],
    "coments": [
      {
        "id": "4a737c04-2aa5-4774-a597-b2cf1edff5b8",
        "comment": "Este é um comentário teste.",
        "commentDate": "2023-10-09T20:39:26.847Z",
        "userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
        "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
      }
    ]
  }
]
```

### Possíveis Erros:

| Código do Erro | Descrição              |
| -------------- | ---------------------- |
| 404 Not Found  | Anouncement not found! |

---

### 3.4. **Edita um anúncio usando seu ID como parâmetro**

### `/anouncements/:anouncementId`

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                    |
| ------------- | ------ | -------------------------------------------- |
| anouncementId | string | Identificador único do anúncio (anouncement) |

### Exemplo de Request:

```
PATCH /anouncements/:anouncementId
```

Host: http://localhost:3000

```
Authorization: Bearer token do dono do anúncio
```

Content-type: application/json

````

### Corpo da Requisição:

```json
{
  "year": 2011,
  "fuel": "gasolina",
  "mileage": 30000,
  "color": "data.color",
  "priceTabel": 50000,
  "images": [
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    },
    {
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp"
    }
  ]
}

obs: É necessário passar todas as imagens no corpo da requisição
````

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "0f87ca88-7698-4d16-977f-31569f7b8f97",
  "brand": "data.brand",
  "model": "data.model",
  "year": 2011,
  "fuel": "gasolina",
  "mileage": 30000,
  "color": "data.color",
  "priceTabel": 50000,
  "price": 28000,
  "description": "data.description",
  "publish": false,
  "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
  "userId": "53c6b9f5-eba5-4317-aabf-b70d06452b9f",
  "images": [
    {
      "id": "a80cc303-422f-44b8-b89d-eb36eeb7fc38",
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
      "anouncementId": "0f87ca88-7698-4d16-977f-31569f7b8f97"
    },
    {
      "id": "0de77c04-328d-4adb-b6c5-2a19d18d1cad",
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
      "anouncementId": "0f87ca88-7698-4d16-977f-31569f7b8f97"
    }
  ],
  "coments": [
    {
      "id": "4a737c04-2aa5-4774-a597-b2cf1edff5b8",
      "comment": "Este é um comentário teste.",
      "commentDate": "2023-10-09T20:39:26.847Z",
      "userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
      "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro | Descrição              |
| -------------- | ---------------------- |
| 404 Not Found  | Anouncement not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | You dont have permitions |

---

### 3.5. **Deleta um anúncio usando seu ID como parâmetro**

### `/anouncements/:anouncementId`

### Exemplo de Request:

```

DELETE /anouncements/:anouncementId

```

Host: http://localhost:3000

```
Authorization: Bearer token do dono do anúncio
```

Content-type: application/json

````

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                    |
| ------------- | ------ | -------------------------------------------- |
| anouncementId | string | Identificador único do anúncio (anouncement) |

### Corpo da Requisição:

```json
Vazio
````

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro | Descrição              |
| -------------- | ---------------------- |
| 404 Not Found  | Anouncement not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | You dont have permitions |

---

### 3.6. **Lista todos od anúncios do usuário usando seu ID como parâmetro**

### `/anouncements/user/:userId`

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                    |
| ------------- | ------ | -------------------------------------------- |
| anouncementId | string | Identificador único do anúncio (anouncement) |

### Exemplo de Request:

```
GET /anouncements/user/:userId
```

Host: http://localhost:3000

```
Authorization: none
```

Content-type: application/json

````

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                    |
| --------- | ------ | ---------------------------- |
| userId    | string | Identificador usuário (User) |

### Corpo da Requisição:

```json
Vazio
````

### Exemplo de Response:

```

```

200 OK

```
[
 {
  "id": "0f87ca88-7698-4d16-977f-31569f7b8f97",
  "brand": "data.brand",
  "model": "data.model",
  "year": 2011,
  "fuel": "gasolina",
  "mileage": 30000,
  "color": "data.color",
  "priceTabel": 50000,
  "price": 28000,
  "description": "data.description",
  "publish": false,
  "cover_img": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
  "userId": "53c6b9f5-eba5-4317-aabf-b70d06452b9f",
  "images": [
    {
      "id": "a80cc303-422f-44b8-b89d-eb36eeb7fc38",
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
      "anouncementId": "0f87ca88-7698-4d16-977f-31569f7b8f97"
    },
    {
      "id": "0de77c04-328d-4adb-b6c5-2a19d18d1cad",
      "image_url": "https://olhardigital.com.br/wp-content/uploads/2022/04/tesla-roadster.webp",
      "anouncementId": "0f87ca88-7698-4d16-977f-31569f7b8f97"
    }
  ],
  "coments": [
			{
				"id": "4a737c04-2aa5-4774-a597-b2cf1edff5b8",
				"comment": "Este é um comentário teste.",
				"commentDate": "2023-10-09T20:39:26.847Z",
				"userId": "9e2dfe75-4b46-4802-88fc-4133c6108e9a",
				"anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
			}
		]
}
]
```

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not Found  | User not found! |

---

## 4. **Comments**

O objeto Comments é definido como:

| Campo         | Tipo   | Descrição                                        |
| ------------- | ------ | ------------------------------------------------ |
| id            | string | Identificador único do comentário                |
| comment       | string | Conteúdo do comentário                           |
| commentDate   | date   | Data em que o comentário foi publicado           |
| userId        | string | Id do usuário do qual pretence aquele comentário |
| anouncementId | string | Id do anúncio do qual pretence aquele comentário |

### Endpoints

| Método | Rota                    | Descrição                                |
| ------ | ----------------------- | ---------------------------------------- |
| POST   | /comments/anouncementId | Criação de um comentário                 |
| GET    | /comments/anouncementId | Lista todos os comentários de um anúncio |
| PATCH  | /comments/comentId      | Edita um comentário                      |
| DELETE | /comments/comentId      | Deleta um comentário                     |

### 4.1. **Criação de um comentário**

### `/comments`

```
POST /comments/anouncementId
```

Host: http://localhost:3000

```
Authorization: Bearer token
```

Content-type: application/json

````

### Corpo da Requisição:

```json
{
  "comment": "Este é um comentário teste."
}
````

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "51f606e6-c3df-42bb-836e-9a58bbe0d413",
  "comment": "Este é um comentário teste.",
  "commentDate": "2023-10-09T21:19:32.519Z",
  "userId": "a61837bf-35a6-4cce-a03c-8f2b0309c210",
  "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
}
```

### Possíveis Erros:

| Código do Erro | Descrição              |
| -------------- | ---------------------- |
| 404 Not Found  | Anouncement not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

### 4.2. **Lista todos os comentários de um anúncio**

### `/comments/:anouncementId`

```
POST /comments/anouncementId

```

Host: http://localhost:3000

```
Authorization: Bearer token

```

Content-type: application/json

````

### Corpo da Requisição:

```json
Vazio
````

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "51f606e6-c3df-42bb-836e-9a58bbe0d413",
    "comment": "Este é um comentário teste.",
    "commentDate": "2023-10-09T21:19:32.519Z",
    "userId": "a61837bf-35a6-4cce-a03c-8f2b0309c210",
    "anouncementId": "1f4c8680-56af-4272-b5c1-c571315e5c50"
  }
]
```

### Possíveis Erros:

| Código do Erro | Descrição              |
| -------------- | ---------------------- |
| 404 Not Found  | Anouncement not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

### 4.3. **Edita um comentário**

### `/comments/:comentId`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                   |
| --------- | ------ | ------------------------------------------- |
| comentId  | string | Identificador único do comentário (comment) |

### Exemplo de Request:

```
PATCH /comments/comentId

```

Host: http://localhost:3000

```
Authorization: Bearer token do dono do comentário

```

Content-type: application/json

````

### Corpo da Requisição:

```json
{
  "comment": "Este é um comentário teste de update."
}
````

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "16e0491f-3a56-4b30-b7d0-884178fdef6f",
  "comment": "Este é um comentário teste de update.",
  "commentDate": "2023-10-11T01:45:56.679Z",
  "userId": "aaef0eb0-adec-47a9-be49-86c398e87573",
  "anouncementId": "b0b272fd-388e-42d9-9bfa-214223e06100"
}
```

### Possíveis Erros:

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 404 Not Found  | Comment not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | You dont have permitions |

---

### 4.4. **Deleta um comentário**

### `/comments/:comentId`

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                   |
| --------- | ------ | ------------------------------------------- |
| comentId  | string | Identificador único do comentário (comment) |

### Exemplo de Request:

```
DELETE /comments/comentId

```

Host: http://localhost:3000

```
Authorization: Bearer token do dono do comentário ou dono do anúncio

```

Content-type: application/json

````

### Corpo da Requisição:

```json
vazio
````

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro | Descrição          |
| -------------- | ------------------ |
| 404 Not Found  | Comment not found! |

| Código do Erro   | Descrição    |
| ---------------- | ------------ |
| 401 Unauthorized | Unauthorized |

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | You dont have permitions |
