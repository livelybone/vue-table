export function getSlotText(slot) {
  return slot.reduce((pre, vNode) => pre + vNode.elm.textContent, '')
}

export function assign(...args) {
  return args.reduce((pre, o) => ({ ...pre, ...o }), {})
}
