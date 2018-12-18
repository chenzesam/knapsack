import paramsify from '../src/paramsify'

describe('paramsify', function () {
  it('common test', () => {
    const encode = encodeURIComponent('xxja*^%@')
    const url = 'http://test.com?ids=123&name=test&ids=321&encode=' + encode

    expect(paramsify(url)).toEqual({
      ids: [123, 321],
      name: 'test',
      encode: 'xxja*^%@'
    })
  })
})
