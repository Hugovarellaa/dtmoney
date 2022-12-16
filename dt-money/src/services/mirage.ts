import { createServer } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {},
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transactions 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            created_at: new Date(),
          },
        ]
      })

      this.namespace = ''
    },
  })
  return server
}
