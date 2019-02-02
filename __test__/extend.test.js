import Child from '../src/utils/extend'

describe('extend', () => {
  let child = new Child('test')

  it('common', () => {
    expect(child.say()).toBe('test')
  })
})
