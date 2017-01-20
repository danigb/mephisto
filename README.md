# mephisto

> Code generation for fast digital signal processing and generation

This is an ongoing experiment to explore ideas that potentially could improve the awesome [genish.js](https://github.com/charlieroberts) library from @charlieroberts.

In the spirit of dsp languages like [faust](http://faust.grame.fr/about/) the idea is to generate high performant code from a description of how the dsp unit behaves.

My constrains are:

- Like `genish.js`, the processor should work at sample level
- The process description should be readable, easy to understand and to reason about.
- The generated code should be, at least, as good as the original `genish.js`

What I want to explore is:

- Intercambiable backends (Javascript output, WebAssembly in the future)
- Different architecture, where the optimizer is not attached to the generator
- More explicit state, pure functions
