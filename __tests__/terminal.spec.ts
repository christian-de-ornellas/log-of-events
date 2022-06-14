import terminal from '../src/util/terminal'

describe('Terminal', () => {
  it('should write on terminal', () => {
    expect(terminal.write('Teste')).toBe(true)
  })
  it('should write on terminal', () => {
    expect(terminal.input((input) => input)).toBeDefined()
  })
})
