const net = require('net'); 
const { IP, PORT } = require("./constants");
const stdin = process.stdin;
console.log(IP , PORT);
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
     }, () => {
    console.log("Successfully connected!")
  });

const name = 'CHM';
// interpret incoming data as text
conn.setEncoding("utf8");
stdin.setEncoding('utf8');

conn.on('connect', () => {
  conn.write('Name : CHM');
});

conn.on('connect', () => {
  conn.write('Hello from client');
});

// stdin.on('data', (input) => {
//   conn.write(`Say : Hi`)
// })


conn.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
})

return conn;
};


module.exports = connect;