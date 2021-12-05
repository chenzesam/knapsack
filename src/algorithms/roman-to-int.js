const romanToIntMap = {
  'I': 1,
  // 'IV': 4,
  'V': 5,
  // 'IX': 9,
  'X': 10,
  // 'XL': 40,
  'L': 50,
  // 'XC': 90,
  'C': 100,
  // 'CD': 400,
  'D': 500,
  // 'CM': 900,
  'M': 1000
}

/**
 * @param {string} s
 * @return {number}
 */
function badRomanToInt (s) {
  let result = 0
  let step = 1
  for (let i = 0; i < s.length; i += step) {
    const roman = s[i]
    let nextRoman = s[i + 1]
    switch (roman) {
      case 'I':
        if (nextRoman === 'V' || nextRoman === 'X') {
          result = result + romanToIntMap[nextRoman] - romanToIntMap[roman]
          step = 2
        } else {
          result = result + romanToIntMap[roman]
          step = 1
        }
        break
      case 'X':
        if (nextRoman === 'L' || nextRoman === 'C') {
          result = result + romanToIntMap[nextRoman] - romanToIntMap[roman]
          step = 2
        } else {
          result = result + romanToIntMap[roman]
          step = 1
        }
        break
      case 'C':
        if (nextRoman === 'D' || nextRoman === 'M') {
          result = result + romanToIntMap[nextRoman] - romanToIntMap[roman]
          step = 2
        } else {
          result = result + romanToIntMap[roman]
          step = 1
        }
        break
      default:
        result = result + romanToIntMap[roman]
        step = 1
    }
  }
  return result
}

/**
 * @param {string} s
 * @return {number}
 * @description 罗马数字值符合一个规律, 如果前面的比后面的值小, 那么就要减前面的加后面的, 像 VX 这样的是不会出现的
 */
function goodRomanToInt (s) {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    const int = romanToIntMap[s[i]]
    const nextInt = romanToIntMap[s[i + 1]] || 0
    if (int >= nextInt) {
      result += int
    } else {
      result -= int
    }
  }
  return result
}

export { badRomanToInt, goodRomanToInt }
