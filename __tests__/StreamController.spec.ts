import StreamController from '../src/controllers/StreamController'

describe('Stream', () => {
  it('should generate data', () => {
    const wrapper = StreamController.readableStream(
      'https://s3.amazonaws.com/uux-itaas-static/minha-cdn-logs/input-01.txt'
    )
    expect(wrapper).toBeDefined()
  })
})
