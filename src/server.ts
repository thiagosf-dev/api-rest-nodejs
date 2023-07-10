import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
import { transactionsRoute } from './routes/transactions'

const app = fastify()

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

app.listen({ port: Number(env.PORT) }).then(() => {
  console.log(`HTTP Server Running: http://localhost:${env.PORT}`)
})
