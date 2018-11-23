import debounce from '../src/debounce'

jest.useFakeTimers()

describe('debounce', () => {

  it('debounce not immediate', () => {
    const callback = jest.fn()
    const debounced = debounce(callback, 2000)

    debounced()

    expect(callback).not.toBeCalled()

    // 执行所有定时器
    jest.runAllTimers()

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('debounce with immediate', () => {
    const callback = jest.fn()
    const debounced = debounce(callback, 2000, true)

    debounced()

    expect(callback).toBeCalled()

    debounced()

    setTimeout(() => {
      debounced()
    }, 1000)

    // 暂停时间 2000ms
    jest.advanceTimersByTime(2000)

    expect(callback).toHaveBeenCalledTimes(1)

    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(2)
  })

})
