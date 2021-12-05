/**
 * @param {string[]} strs
 * @return {string}
 * @todo trie 树, 第一个分叉口就是最大公前缀
 */
function longestCommonPrefix (strs) {
  let result = ''
  if (strs.length === 0) {
    return result
  }
  for (let i = 0; i < strs[0].length; i++) {
    let nextResult = result + strs[0][i]
    let nextResultLength = nextResult.length
    if (strs.every(str => str.slice(0, nextResultLength) === nextResult)) {
      result = nextResult
    } else {
      break
    }
  }
  return result
}

export default longestCommonPrefix
