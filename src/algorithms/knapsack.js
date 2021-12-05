/** thingValues = [1, 2, 3, 4]
 *       | capacity | 0 | 1 | 2 | 3 | 4 | 5
 * thing | 0        | 0 | 0 | 0 | 0 | 0 | 0
 *       | 1        |   |   |   |   |   |
 *       | 2        |   |   |   |   |   |
 *       | 3        |   |   |   |   |   |
 *       | 4        |   |   |   |   |   |
 */
function knapsackDP (capacity, things) {
  const table = []
  const n = things.length

  for (let thingIndex = 0; thingIndex < things.length; thingIndex++) {
    table[thingIndex] = []
  }

  for (let thingIndex = 0; thingIndex < things.length; thingIndex++) {
    const thing = things[thingIndex]
    for (let c = 0; c < capacity; c++) {
      if (thingIndex === 0 && c === 0) {
        table[thingIndex][c] = 0
      } else if (thing.weight <= c) {
        const mayMaxValue = thing.value + table[thingIndex - 1][c - thing.weight]
        const prevValue = table[thingIndex - 1][c]
        table[thingIndex][c] = Math.max(mayMaxValue, prevValue)
      } else {
        table[thingIndex][c] = table[thingIndex - 1][c]
      }
    }
  }
  return table[n][capacity]
}

function knapsackGreed (capacity, things) {
  const n = things.length
  let load = 0
  let val = 0
  for (let i = 0; i < n && load < capacity; i++) {
    const thing = things[i]
    if (thing.weight <= (capacity - load)) {
      val += thing.value
      load += thing.weight
    } else {
      // 分数
      const restCapacity = capacity - load
      const restThingWeight = restCapacity / thing.weight
      val += restThingWeight * thing.value
      load += restThingWeight
    }
  }
  return val
}

export { knapsackDP, knapsackGreed }
