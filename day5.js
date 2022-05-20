const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/product' && req.method === 'POST') {
        res.writeHead(201, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify({
            msg :'Product added!'
      }));

    } else if (req.url === '/product' && req.method === 'GET') {
        res.writeHead(201, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify({
            msg :  'list~~~~~'
        }));
    }

    res.writeHead(404, {'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        msg :'Route not found'
    }));
});
server.listen(PORT, () => {
    console.log('Server Listening on Port :', PORT);
    console.log('Hello world')
});
