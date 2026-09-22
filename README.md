# 🛠️ DioShopping - API

Back-end da aplicação **DioShopping**, projeto final do Bootcamp de Desenvolvimento FrontEnd do Banco Inter, oferecido pela [DIO (Digital Innovation One)](https://www.dio.me/).

Esta API é responsável pela autenticação de usuários e pelo gerenciamento das mensagens de contato enviadas pela aplicação front-end.

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **TypeORM** - ORM para modelagem das entidades e acesso ao banco de dados
- **SQLite** - banco de dados relacional leve, usado no ambiente de desenvolvimento
- **bcryptjs** - hash e verificação de senhas
- **jsonwebtoken (JWT)** - autenticação via token
- **uuid** - geração de identificadores únicos para as entidades

---

## 🧩 Funcionalidades

### Usuários
- Cadastro de novo usuário, com validação de campos obrigatórios e verificação de email já existente
- Senha armazenada com hash (bcrypt), nunca em texto puro
- Login com verificação de credenciais e emissão de token JWT (válido por 1 dia)
- Retorno de dados do usuário sempre sem o campo de senha

### Mensagens de contato
- Criação de mensagem, com validação de email e conteúdo obrigatórios
- Listagem de todas as mensagens registradas
- Exclusão de mensagem por `id`

---

O projeto segue o padrão **Repository + Service + Controller**:
- **Entities** definem o formato das tabelas no banco de dados.
- **Repositories** estendem o `Repository` do TypeORM, encapsulando o acesso à entidade.
- **Services** concentram as regras de negócio e validações.
- **Controllers** recebem a requisição HTTP, chamam o service correspondente e devolvem a resposta.

---

## 📡 Rotas da API

### Usuários

**Cadastro - `POST /users`**

```json
// body
{
  "nome": "João da Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

```json
// resposta (201)
{
  "id": "uuid-gerado",
  "nome": "João da Silva",
  "email": "joao@email.com",
  "created_at": "2026-01-01T00:00:00.000Z"
}
```

**Login - `POST /login`**

```json
// body
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

```json
// resposta (200)
{
  "user": {
    "id": "uuid-gerado",
    "nome": "João da Silva",
    "email": "joao@email.com"
  },
  "token": "jwt-gerado"
}
```

### Mensagens

**Criar mensagem - `POST /message`**

```json
// body
{
  "email": "joao@email.com",
  "message": "Olá, gostaria de mais informações!"
}
```

**Remover mensagem - `DELETE /message`**

```json
// body
{
  "id": "uuid-da-mensagem"
}
```

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado

### Passo a passo

```bash
# instalar dependências
npm install
npx ts-node ./node_modules/typeorm/cli.js migration:run
npm run dev
```

O servidor sobe por padrão em `http://localhost:5000`.

## 🔒 Segurança

- Senhas nunca são armazenadas em texto puro, são processadas com `bcryptjs` (hash + salt) antes de serem salvas.
- O login retorna a mesma mensagem de erro ("Email ou senha incorretos!") tanto para email inexistente quanto para senha incorreta, evitando que se descubra quais emails estão cadastrados no sistema.
- Os dados do usuário retornados pela API nunca incluem o campo de senha, mesmo com hash.

---

## 🎓 Motivação

Chego ao fim do Bootcamp de Desenvolvimento FrontEnd do Banco Inter entregando não só um projeto, mas um pedaço de tudo que aprendi nessa jornada sobre React, TypeORM, autenticação, resolução de bugs de JavaScript às 2 da manhã, e a satisfação de ver cada peça se encaixar até se tornar algo funcional.

Não foi por acaso que escolhi o laranja para vestir esse projeto do início ao fim. Cada tom de laranja espalhado pela interface carrega um significado que vai além da estética: é a forma que encontrei de dizer onde eu quero chegar. Trabalhei duro para simplificar ao máximo a vida dos usuários nesse sistema. Fiz isso com sangue laranja, porque o Banco Inter não é só a empresa que propôs esse desafio: é o lugar onde eu sonho em construir minha carreira.

Esse projeto é a prova de que aprendizado e propósito podem caminhar juntos. Que ele seja o primeiro de muitos passos nessa direção, e que o laranja continue me guiando. 🧡