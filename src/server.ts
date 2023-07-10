const fastify = require("fastify")

const app = fastify()

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({ port: 3333 })
  .then(() => { console.log(`HTTP Server Running: http://localhost:3333`) })