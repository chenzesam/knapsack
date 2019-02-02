import '../src/utils/assign'

describe('assign', function () {
  it('common', () => {
    let a = {}
    let b = { name: 'test', age: 19 }
    expect(Object.assignPolyfill(a, b)).toEqual({
      name: 'test',
      age: 19
    })

    expect(Object.assignPolyfill(a, b)).toBe(a)
  })

  it('complex test', () => {
    let a = {}
    let b = { name: 'test-b', age: 20, children: [{ name: 'test-b-children' }] }
    let c = { name: 'test-c' }
    expect(Object.assignPolyfill(a, b, c)).toEqual({
      name: 'test-c',
      age: 20,
      children: [{ name: 'test-b-children' }]
    })
  })
})
