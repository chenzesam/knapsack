import is from '../src/is'

test('测试 is(\'Object\'', () => {
  expect(is('Object')({ name: 'sam' })).toBe(true)
  expect(is('Object')(null)).not.toBe(true)
})

test('测试 is(\'String\')', () => {
  expect(is('String')('hello world!')).toBe(true)
  expect(is('String')(1123)).not.toBe(true)
})