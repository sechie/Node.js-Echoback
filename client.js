var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('3000', 'localhost', () => {
    console.log('connected_client');
});

client.on('data', data => {
    console.log('client-> ' + data);
    client.write(data);
});

client.on('close', () => {
    console.log('closed_client');
});
