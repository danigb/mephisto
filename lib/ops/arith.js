
export const mul = (a, b) => ({
  inputs: [a, b],
  process (vm) {
    var a = vm.input(0)
    var b = vm.input(1)
    if (isNaN(a) || isNaN(b)) vm.output(vm.operation('mul', [a, b].map(vm.process)))
    else vm.output(a * b)
  }
})

export const sum = (...args) => ({
  process (vm) {
    var value = 0
    var signals = []
    args.forEach(v => { isNaN(value) ? signals.push(v) : value += v })
    if (!signals.length) vm.output(value)
    else {
      if (value) signals.push(value)
      vm.output(vm.add(signals))
    }
  }
})
