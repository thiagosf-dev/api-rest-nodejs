# Projeto Nodejs + Typescript

Ignite Rocketseat

## Conceitos

- Runtime Type Checking (Javascript vanilla)
- Static Type Checking (Typescript)

## Passo a passo de como esse projeto foi construído

1. iniciando aplicação _Node_ com o comando:

    `npm init -y`

1. criado na raíz do projeto o arquivo README.md

1. inciando projeto _git_ com o comando:
  
    `git init`

1. vinculado o projeto a um repositório do git:

    `git remote add origin https://github.com/thiagosf-dev/api-rest-nodejs`

    `git branch -M main`

    `git add .`

    `git commit -m 'iniciando projeto'`

    `git push -u origin main`

## Typescript

1. instalado o Typescript com o comando:

    `npm i typescript`

1. iniciado o projeto com o Typescript com o comando:

    `npx tsc --init`

1. alterado o arquivo `tsconfig.json` na propriedade: `"target": "ES2020"`

1. convertendo o arquivo `.ts` para `.js` com o comando:

    `npx tsc src/index.ts`

## Fastify

1. instalado o Typescript com o comando:

    `npm i fastify`

1. instalado pacotes de tiapgem do `Nodejs` com o comando:

    `npm i -D @types/node`

1. executando a aplicação com o comando:

    `node src/server.ts`

1. instalado lib para automatizar o processo de conversão typescript/javascript com o comando:

    `npm i -D tsx`

1. executando a aplicação com o comando:

    `npx tsx src/server.ts`

1. criado no `package.json` script para executar a aplicação em modo `watch`: `"dev": "tsx watch ."`
