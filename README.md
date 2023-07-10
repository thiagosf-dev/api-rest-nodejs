# Projeto Nodejs + Typescript

Ignite Rocketseat

## Conceitos aplicados neste projeto

- Requisições HTTP
- Verbos HTTP
- HTTP Codes
- Tipagem dinâmica VS Tipagem estática
- Runtime Type Checking (Javascript vanilla)
- Static Type Checking (Typescript)
- Controle de versão Git e `.gitignore`
- Configuração do editor no arquivo `.vscode/settings.json`
- Configuração do arquivo `.editorconfig`
- Configuração de padrão de codificação usando o ESLint no arquivo `.eslintrc.json`
- Banco de dados relacional
- Query Builders (Knex.js)
- Migration
- Gerar hash para chave de campos como ID usando o uuid
- Environments Variables `.env`
- Validação do formato de dados com o Zod
- Requisitos Funcionais / Requisitos Não Funcionais / Regras de Negócio
- Plugins e Prefix no Fastify
- Criando types definition para as tabelas do Knex (@types e a extensão .d.ts)

## Bibliotecas e ferramentas utilizadas neste projeto

- NPM
- NodeJS
- Javascript
- Typescript
- Git
- EditorConfig
- ESLint
- Fastify
- Knex
- SQLite 3
- Crypto
- DotENV
- Zod

## RF (Requisitos Funcionais)

- [ ] o usuário deve poder criar uma nova transação
- [ ] o usuário deve poder obter o resumo da sua conta
- [ ] o usuário deve poder listar todas as transações que já ocorreram
- [ ] o usuário deve poder visualizar uma transação única

## RN (Regras de Negócio)

- [ ] a transação pode ser do tipo Crédito, que somará ao valor total, ou Débito, que diminuirá
- [ ] deve ser possível identificar o usuário entre as requisições
- [ ] o usuário só pode visualizar transações que ele criou

## RNF (Requisitos NãoFuncionais)

## Passo a passo de como esse projeto foi construído

1. iniciando aplicação _Node_ com o comando:

    ```shell
      npm init -y
    ```

1. criado na raíz do projeto o arquivo README.md

1. inciando projeto _git_ com o comando:

    ```shell
      git init
    ```

1. vinculado o projeto a um repositório do git:

    ```shell
      git remote add origin https://github.com/thiagosf-dev/api-rest-nodejs
    ```

    ```shell
      git branch -M main
    ```

    ```shell
      git add .
    ```

    ```shell
      git commit -m 'iniciando projeto'
    ```

    ```shell
      git push -u origin main
    ```

## Typescript

1. instalado o Typescript com o comando:

    ```shell
      npm i typescript
    ```

1. iniciado o projeto com o Typescript com o comando:

    ```shell
      npx tsc --init
    ```

1. alterado o arquivo `tsconfig.json` na propriedade: `"target": "ES2020"`

1. convertendo o arquivo `.ts` para `.js` com o comando:

    ```shell
      npx tsc src/index.ts
    ```

## Fastify

1. instalado o Fastify com o comando:

    ```shell
      npm i fastify
    ```

1. instalado pacotes de tiapgem do `Nodejs` com o comando:

    ```shell
      npm i -D @types/node
    ```

1. executando a aplicação com o comando:

    ```shell
      node src/server.ts
    ```

1. instalado lib para automatizar o processo de conversão typescript/javascript com o comando:

    ```shell
      npm i -D tsx
    ```

1. executando a aplicação com o comando:

    ```shell
      npx tsx src/server.ts
    ```

1. criado no `package.json` script para executar a aplicação em modo `watch`: `"dev": "tsx watch ."`

## Eslint

1. instalado o ESLint com o comando:

    ```shell
      npm i -D eslint @rocketseat/eslint-config
    ```

1. criado na raíz do projeto o arquivo de configuração do ESLint: `.eslintrc.json`

1. configurado o `.eslintrc.json`: `{
  "extends": [
    "@rocketseat/eslint-config/node"
  ]
}`

1. criado script para rodar o ESlint e fazer o fix: `"eslint:fix": "eslint --ext .js,.ts src --fix"`

## Banco de dados SQLite e Knex ORM

1. instalado o Knex.js com o comando:

    ```shell
      npm install knex --save
    ```

1. instalado o driver do SQLite3 com o comando:

    ```shell
      npm install sqlite3
    ```

1. criado na raíz do projeto os arquivos de configuração do knex: `database.ts` e o `knexfile.ts`

1. configurado o arquivo `.editorconfig`

1. configurado o arquivo de configuração de usuário do VSCode `.vscode/settings.json`

1. ajuste no arquivo `.gitignore`

1. adicionado no `package.json` o script para executar comandos da cli do Knex: `"knex": "node --no-warnings --loader tsx ./node_modules/knex/bin/cli.js"`

1. criação de migration com o comando:

    ```shell
      npm run knex -- migrate:make create-transactions
    ```

1. executando uma migration com o comando:

    ```shell
      npm run knex -- migrate:latest
    ```

1. fazendo rollback de uma migration com o comando:

    ```shel
      npm run knex -- migrate:rollback
    ```

## Environments

1. criado na raíz do projeto o arquivo `.env`

1. instalado o DotENV com o comando:

    ```shell
      npm i dotenv
    ```

## Validação de dados

1. instalação do Zod com o comando:

    ```shell
      npm i zod
    ```
