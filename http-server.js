const http = require('http')
const server = http.createServer()
server.addListener('connection', function(socket) {
    console.log('Client connected')
})
server.listen(3000)
console.log('Listening form port 3000')