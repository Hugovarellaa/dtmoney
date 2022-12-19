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

      this.get('/transaction')

      this.namespace = ''
    },
  })

  return server
}
