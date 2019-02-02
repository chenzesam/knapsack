import singleInstance from '../src/utils/single'

describe('single.js', () => {
  it('common', () => {
    function Obj (name) {
      this.name = name
    }
    const instance = singleInstance(Obj, 'test')
    expect(instance()).toBe(instance())
    expect(instance().name).toBe('test')
  })
})
