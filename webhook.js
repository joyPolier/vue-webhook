let http = require('http')

let server = http.createServer(function(req, res) {
	let {
		method,
		url
	} = req
	if (method === 'POST' && url === 'webhook') {
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify({
			ok: true
		}))
	} else {
		res.end('Not found')
	}
})

server.listen(4000, () => {
	console.log('webhook服务已经在4000窗口上启动...')
})