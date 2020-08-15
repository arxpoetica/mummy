import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
// import { terser } from 'rollup-plugin-terser'
// import { builtinModules } from 'module'
// import { dependencies } from './package.json'

// const { NODE_ENV } = process.env
// const prod = NODE_ENV === 'production'

export default {
	input: 'src/index.js',
	output: {
		file: 'index.js',
		format: 'umd',
		name: 'svelte'
	},
	// external: [...builtinModules, ...Object.keys(dependencies)],
	plugins: [
		replace({
			'self.performance.now()': '0',
			delimiters: ['', ''],
		}),
		resolve(),
		commonjs(),
		// terser(),
	],
}
