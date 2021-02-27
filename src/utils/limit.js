function limit(n, promisesFn) {
  let res = [];
  let fnN = promisesFn.length;
  let isError = false;
  let resolve = null;
  let reject = null;

  const defer = new Promise((r, rj) => {
    resolve = r;
    reject = rj;
  });

  const handlePromiseFn = (fn) => {
    if (!fn) return;
    fn().then(val => {
      res.push(val);
    }).catch(error => {
      isError = true;
      reject(error);
    }).finally(() => {
      // 如果已经出错了，就不再执行了。
      if (isError) return;
      // 如果是最后一个结束的，那么就代表所有任务执行完毕。
      fnN--;
      if (fnN === 0) {
        resolve(res);
        return;
      }

      // 如果不是最后一个结束的，并且池子里面还有东西，那么就继续执行。例如：并发 4 个，第二个结束了就会来到这里，并出现没有东西了。
      const promiseFn = promisesFn.shift();
      if (promiseFn) {
        handlePromiseFn(promiseFn);
        return;
      }
    })
  }
  while (n--) {
    handlePromiseFn(promisesFn.shift())
  }

  return defer;
}

export default limit;
