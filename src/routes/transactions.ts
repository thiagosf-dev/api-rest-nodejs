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

  app.post('/', async (request, response) => {
    const createTransactionBodySchema = z.object({
      amount: z.number(),
      title: z.string(),
      type: z.enum(['credit', 'debit']),
    })

    const { amount, title, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      amount: type === 'credit' ? amount : amount * -1,
      title,
    })

    return response.status(201).send()
  })
}
