import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
	// Browser bundle
	{
		input: 'src/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'public/bundle.js'
		},
		plugins: [
			svelte({
				// enable run-time checks when not in production
				dev: !production,
				hydratable: true,
				// we'll extract any component CSS out into
				// a separate file — better for performance
				css: css => {
					css.write('public/bundle.css');
				}
			}),
			resolve(),
			commonjs(),
			!production && livereload({
				watch: "public/App.js",
				delay: 200
			}),
			production && terser()
		]
	},
	// Server Bundle
	{
		input: 'src/App.svelte',
		output: {
			sourcemap: false,
			format: 'cjs',
			name: 'app',
			file: 'public/App.js'
		},
		plugins: [
			svelte({
				generate: 'ssr'
			}),
			resolve(),
			commonjs(),
			production && terser()
		]
	}
];
