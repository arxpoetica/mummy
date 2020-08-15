// const { compile, preprocess } = require('svelte/compiler.js')
const { compile } = require('svelte/compiler.js')

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
	const compiled = compile('<h1>Hello World!</h1>', { generate: 'dom' })
	// console.log(compiled.js.code)
	return new Response(compiled.js.code, { headers: { 'content-type': 'text/javascript' } })
	// return new Response('Hello worker!', { headers: { 'content-type': 'text/plain' } })

}
