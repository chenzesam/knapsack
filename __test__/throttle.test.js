import throttle from '../src/throttle'

jest.useFakeTimers()

describe('throttle', () => {
  it('throttle not immediate', () => {
    const callback = jest.fn()
    const throttled = throttle(callback, 2000)

    throttled()

    expect(callback).not.toBeCalled()

    jest.runAllTimers()

    expect(callback).toBeCalled()
  })

  it('throttle with immediate', () => {
    const callback = jest.fn()
    const throttled = throttle(callback, 2000, true)

    throttled()

    expect(callback).toBeCalled()

    throttled()

    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(2)

    throttled()

    setTimeout(() => {
      throttle()
    }, 1000)

    jest.advanceTimersByTime(2000)

    expect(callback).toHaveBeenCalledTimes(3)
  })
})
