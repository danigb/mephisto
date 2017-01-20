const noop = () => {}

export function gen (graph, { debug = false } = {}) {
  const { inputs = [], process } = graph
  var vm = new JavaScript(graph)
  Object.keys(inputs).forEach((k, i) => { vm.setInput(i, inputs[k]) })
  process(vm)
  return debug ? vm.toString() : vm.generate()
}

class JavaScript {
  constructor (root) {
    this.root = root
    this.ctx = { inputs: [], ops: [], output: null }
    this.id = 0
    this.inputs = {}
  }
  setInput (i, value) {
    var label = 'v' + this.id++
    this.inputs[label] = value
    this.ctx.inputs.push(label)
  }
  input (id) {
    const key = this.ctx.inputs[id]
    return this.inputs[key]
  }
  output (value) {
    this.ctx.output = value
  }
  toString () {
    return `return ${this.ctx.output};`
  }
}
