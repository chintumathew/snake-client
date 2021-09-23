const net = require("net");
const  connect  = require("./client");
const { setupInput } = require("./input");
const stdin = process.stdin;
stdin.setRawMode(true);






//call connect
console.log("Connecting ...");
const conn = connect();

//call input
setupInput(conn);


