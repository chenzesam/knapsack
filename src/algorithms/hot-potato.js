import Queue from '../data-structures/queue'

function hotPotato (nameList, num) {
  const queue = new Queue()
  nameList.forEach(name => {
    queue.enqueue(name)
  })
  while (queue.size() > 1) {
    let eliminated = null
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue)
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '被淘汰')
  }
  return queue.dequeue()
}

export default hotPotato
