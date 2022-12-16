import { createServer } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {},
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/transactions')

      this.namespace = ''
    },
  })
  return server
}
