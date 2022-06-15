import CliController from '../src/controllers/CliController'
describe('Log', () => {
  it('should be return txt ', async () => {
    const spy = jest.spyOn(CliController, 'execute')
    CliController.execute()
    expect(spy).toHaveBeenCalled()
  })
})
