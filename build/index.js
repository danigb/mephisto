'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function gen (graph, { debug = false } = {}) {
  const { inputs = [], process } = graph;
  var vm = new JavaScript(graph);
  Object.keys(inputs).forEach((k, i) => { vm.setInput(i, inputs[k]); });
  process(vm);
  return debug ? vm.toString() : vm.generate()
}

class JavaScript {
  constructor (root) {
    this.root = root;
    this.ctx = { inputs: [], ops: [], output: null };
    this.id = 0;
    this.inputs = {};
  }
  setInput (i, value) {
    var label = 'v' + this.id++;
    this.inputs[label] = value;
    this.ctx.inputs.push(label);
  }
  input (id) {
    const key = this.ctx.inputs[id];
    return this.inputs[key]
  }
  output (value) {
    this.ctx.output = value;
  }
  toString () {
    return `return ${this.ctx.output};`
  }
}

const mul = (a, b) => ({
  inputs: [a, b],
  process (vm) {
    var a = vm.input(0);
    var b = vm.input(1);
    if (isNaN(a) || isNaN(b)) vm.output(vm.operation('mul', [a, b].map(vm.process)));
    else vm.output(a * b);
  }
});

const sum = (...args) => ({
  process (vm) {
    var value = 0;
    var signals = [];
    args.forEach(v => { isNaN(value) ? signals.push(v) : value += v; });
    if (!signals.length) vm.output(value);
    else {
      if (value) signals.push(value);
      vm.output(vm.add(signals));
    }
  }
});

function param ({ value = 0 } = {}) {
  return {
    state: { value },
    generate: (state) => state.value
  }
}

exports.gen = gen;
exports.mul = mul;
exports.sum = sum;
exports.param = param;
