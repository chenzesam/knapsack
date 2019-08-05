import toCamel from '../src/utils/toCamel'

describe('toCamel', function () {
  it('common test', () => {
    expect(toCamel('a_b_c_d')).toBe('ABCD')
  })
})
