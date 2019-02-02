import '../src/utils/bind'

describe('bind.js', function () {
  it('bind', () => {
    function say (first, last) {
      return `${this.name} ${first} ${last}`
    }
    const obj = {
      name: 'test'
    }
    expect(say.bindPolyfill(obj, 'first')('last')).toBe('test first last')
  })
})
