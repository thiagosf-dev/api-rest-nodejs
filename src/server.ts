import crypto from 'crypto'
import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/infoapi', async () => {
  return 'API Running successfully'
})

app.get('/infodb', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app.get('/insert', async () => {
  const transaction = await knex('transactions')
    .insert({
      amount: 1000,
      id: crypto.randomUUID(),
      title: 'Transação de teste',
    })
    .returning('*')

  return transaction
})

app.get('/selectAll', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app.listen({ port: Number(env.PORT) }).then(() => {
  console.log(`HTTP Server Running: http://localhost:${env.PORT}`)
})
