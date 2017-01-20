
export const step = (value) => ({
  state: { value },
  process (vm) {
    var value = vm.state('value')
    vm.inc(value)
    vm.return(value)
  }
})
