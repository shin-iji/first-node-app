const http = require('http');
const server = http.createServer(function(req, res) {
    var obj = {
        name: 'Siradanai', 
        age: 20, 
        city: 'Bangkok'
    };
    if (req.url === '/') {
        res.write('You are at home page');
        res.end();
    }
    if (req.url === '/contact') {
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.addListener('connection', function(socket) {
    console.log('Client connected');
});
server.listen(3000);
console.log('Listening form port 3000');