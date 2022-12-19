import { createServer, Model } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {},
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/transactions')
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return data
      })

      this.namespace = ''
    },
  })

  return server
}
