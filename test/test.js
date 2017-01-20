const test = require('tst')
const assert = require('assert')

const { gen, mul, input } = require('..')

test.only('mul', () => {
  test('code', () => {
    console.log(gen(mul(3, mul(2, 2)), { debug: true }))
  })
})

test('gen', () => {
  var signal = gen(mul(3, 2))
  assert.equal(signal(), 6)
  assert.equal(signal(), 6)
})

test('input', () => {
  var signal = gen(input({ value: 3 }))
})
