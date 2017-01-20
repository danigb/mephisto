import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'

export default {
  entry: 'index.js',
  format: 'cjs',
  // plugins: [ babel(), cleanup({ maxEmptyLines: 1 }) ],
  dest: 'build/index.js'
}
