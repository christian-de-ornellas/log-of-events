import supertest from 'supertest'

import server from '../src/server'
import dateNow from '../src/util/dateNow'

describe('Log', () => {
  beforeAll(async () => {
    await server.close()
  })

  it('should be return txt ', async () => {
    const response = await supertest(server).get(`/log/${dateNow.day}${dateNow.month}${dateNow.year}.txt`)
    expect(response.statusCode).toEqual(200)
  })
})
