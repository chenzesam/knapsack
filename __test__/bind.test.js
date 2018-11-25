import bind from '../src/bind'

describe('bind', function () {
  it('bind', () => {
    function say (first, last) {
      return `${this.name} ${first} ${last}`
    }

    const binded = bind(say, { name: 'test' }, 'first')

    expect(binded('last')).toBe('test first last')
  })
})
