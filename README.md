# mephisto

> Code generation for fast digital signal processing and generation

This is an ongoing experiment to explore ideas that potentially could improve the awesome [genish.js](https://github.com/charlieroberts) library from @charlieroberts.

In the spirit of dsp languages like [faust](http://faust.grame.fr/about/) the idea is to generate high performant code from a description of how the dsp unit behaves.

The goals are:

- Like `genish.js`, the processor should work at sample level
- The process description should be readable, easy to understand and to reason about.
- The generated code should be, at least, as good as the original `genish.js`

What I want to explore is:

- Intercambiable backends (Javascript output, asm.js in midterm, WebAssembly in the future)
- Different architecture, where the optimizer is not attached to the generator (a three stage level compiler-type architecture)
- More explicit state, pure functions

#### asm.js resources

- The official repository: https://github.com/dherman/asm.js
- https://github.com/zbjornson/human-asmjs
- Handwriten Scheme interpreter in asm.js: https://github.com/noahvanes/slip.js
- Informative Documentations and Articles about asm.js: https://github.com/illussiontech/ASM.JS
- Handwriten Mandelbrot fractals in asm.js: https://github.com/AdamColton/asmJsMandelbrot
