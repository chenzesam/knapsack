import findLast from '../src/findLast'

describe('findLast.js', function () {
  const foo = [
    {
      name: 'sam',
      age: 18
    },
    {
      name: 'test'
    },
    {
      name: 'sam',
      age: 20
    }
  ]

  it('common', () => {
    expect(findLast(foo, (v) => v.name === 'sam')).toEqual({
      name: 'sam',
      age: 20
    })
  })
})
