import { trim, trimStart, trimEnd } from '../src/utils/trim'

describe('trim', () => {
  it('trim start and end', () => {
    expect(trim(' name ')).toBe('name')
  })

  it('trim start', () => {
    expect(trimStart('  name ')).toBe('name ')
  })
  it('trim end', () => {
    expect(trimEnd(' name  ')).toBe(' name')
  })
})
