import Child from '../src/extend'

describe('extend', () => {
  let child = new Child('test')

  it('common', () => {
    expect(child.say()).toBe('test')
  })
})
