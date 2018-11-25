const bind = (fn, ctx, ...rest) => (...innerRest) => {
  return fn.apply(ctx, [...rest, ...innerRest])
}

export default bind
