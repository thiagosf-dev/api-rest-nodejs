import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function transactionsRoute(app: FastifyInstance) {
  app.get('/', async (request, response) => {
    const transactions = await knex('transactions').select('*')

    return response.status(200).send({ transactions })
  })

  app.get('/:id', async (request, response) => {
    const getTransactionParamSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamSchema.parse(request.params)

    const transaction = await knex('transactions').where('id', id)

    return response.status(200).send({ transaction })
  })

  app.get('/summary', async (request, response) => {
    const summary = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    return response.status(200).send({ summary })
  })

  app.post('/', async (request, response) => {
    const createTransactionBodySchema = z.object({
      amount: z.number(),
      title: z.string(),
      type: z.enum(['credit', 'debit']),
    })

    const { amount, title, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
      response.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
      title,
    })

    return response.status(201).send()
  })
}
