import request from 'supertest'

import server from '../src/server'

describe('Logs', () => {
  // closing the server
  afterEach(async () => {
    await server.close()
  })

  it('Should get list of logs', async () => {
    const response = await request(server).get('/logs')
    expect(response.statusCode).toEqual(200)
  })
})
