import { createServer, Model } from 'miragejs'

export function makeServer() {
  const server = createServer({
    models: {
      transaction: Model,
    },
    // seeds(server) {
    //   server.db.loadData({
    //     transactions: [
    //       {
    //         id: 1,
    //         title: 'Salario',
    //         amount: 3500,
    //         type: 'deposit',
    //         category: 'Dev',
    //         created_at: new Date('2022-12-16'),
    //       },
    //       {
    //         id: 2,
    //         title: 'Aluguel',
    //         amount: 1500,
    //         type: 'withdraw',
    //         category: 'Casa',
    //         created_at: new Date('2022-12-20'),
    //       },
    //     ],
    //   })
    // },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('transaction', data)
      })

      this.namespace = ''
    },
  })
  return server
}
