var net = require('net');

var server = net.createServer(conn => {
    console.log('connected._server');

    conn.on('data', data => {
        console.log('server-> ' + data);
    });

    conn.on('close', () => {
        console.log('closed_server');
    });

    process.stdin.resume()
    process.stdin.on('data', data => {
        conn.write(data)
    });

}).listen(3000);

console.log('listening on port 3000');
