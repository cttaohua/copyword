// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/main.js',
  output: {
    name: 'copywordJS',
    file: 'dist/copywordJS.min.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    uglify()
  ]
}
