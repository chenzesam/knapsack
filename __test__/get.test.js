import get from '../src/utils/get'

describe('get', () => {
  it('get', () => {
    let obj = {
      family: {
        mom: {
          name: 'good mom',
          age: 58
        }
      }
    }
    expect(get(obj, 'family')).toEqual({
      mom: {
        name: 'good mom',
        age: 58
      }
    })

    expect(get(obj, 'family.mom.age')).toBe(58)
  })
})
