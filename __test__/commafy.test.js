import commafy from '../src/utils/commafy'

describe('commafy', () => {
  it('commafy', () => {
    expect(commafy(123456.789)).toBe('123,456.789')
    expect(commafy(1123456.789)).toBe('1,123,456.789')
  })
})
