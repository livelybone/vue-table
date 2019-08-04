export function assign(...args) {
  return args.reduce((pre, o) => ({ ...pre, ...o }), {})
}

/**
 * @param {String} value, 1px/1rem/1em/1pt/1%
 * */
export function parseSize(value) {
  const percent = /^((\d+\.)?\d+)%$/
  const arr = value.match(percent)

  if (arr) return { value: +arr[1], type: 'percent' }
  return { value, type: 'normal' }
}
