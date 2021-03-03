let limit = (limitN, promises) => {
  let isPause = false;
  // 全部数量
  let allN = promises.length - 1;
  // 运行结束的数量，用于判断是否要返回结果了。
  let overN = -1;
  // 正在跑的数量，限制并发使用。
  let activeN = 0;
  // 当前跑了多少个，用于判断是否全部跑完了，不需要继续任务。
  let startedN = 0;
  let res = [];
  let resolve = () => {};

  const handlePromise = () => {
    // 如果暂停了，就不执行了。
    if (isPause) return;
    if (activeN >= limitN) return;
    if (startedN > allN) return;
    const fn = promises[startedN];
    const position = startedN;
    startedN++;
    activeN++;
    fn().then(val => {
      overN++;
      activeN--;
      res[position] = val;
      if (overN === allN) {
        resolve(res);
      } else {
        handlePromise();
      }
    })
  }

  const start = () => {
    isPause = false;
    let resN = limitN - activeN;
    while (resN-- && promises[startedN]) {
      handlePromise();
    }
  }

  const pause = () => {
    isPause = true;
  }

  return {
    push: newPs => {
      promises.push(...newPs);
      allN += newPs.length;
      start();
    }, 
    pause,
    start,
    then: fn => resolve = fn
  }
}

/*
let ps = [
  () => new Promise(rs => {
    setTimeout(() => {
      rs(1000)
    }, 1000)
  }),
  () => new Promise(rs => {
    setTimeout(() => {
      rs(5000)
    }, 5000)
  }),
  () => new Promise(rs => {
    setTimeout(() => {
      rs(3000)
    }, 3000)
  }),
  () => new Promise(rs => {
    setTimeout(() => {
      rs(2000)
    }, 2000)
  }),
]

let controller = limit(2, ps);
controller.then(v => console.log(v));
controller.start();

controller.push([
  () => new Promise(rs => {
    setTimeout(() => {
      rs(1000)
    }, 1000)
  }),
  () => new Promise(rs => {
    setTimeout(() => {
      rs(5000)
    }, 5000)
  }),
])
*/
