
export function param ({ value = 0 } = {}) {
  return {
    state: { value },
    generate: (state) => state.value
  }
}
