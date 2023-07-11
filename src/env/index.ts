import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test', override: true })
} else {
  config()
}

const envSchema = z.object({
  DATABASE_CLIENT: z.enum(['pg', 'sqlite']),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  PORT: z.string().default('3333'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  throw new Error(
    `⛔ Zod Validator for environment variables failed :>> ${_env.error.format()}`,
  )
}

export const env = _env.data
