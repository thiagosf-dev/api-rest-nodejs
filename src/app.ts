import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { knex } from './database'

import { transactionsRoute } from './routes/transactions'

export const app = fastify()

app.register(fastifyCookie)

app.addHook('preHandler', async (request) => {
  console.info(
    `⚡ ${request.protocol}://${request.hostname} from ${request.ip} accessing ➡ [${request.method}] ${request.url}`,
  )
})

app.get('/infoapi', async () => {
  return 'API Running successfully'
})

app.get('/infodb', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app.register(transactionsRoute, { prefix: 'transactions' })
