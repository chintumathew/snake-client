const stdin = process.stdin;


let connection ;
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;
  
  //handling user inputs
  
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
        process.exit();
      }
      if (key === 'w') {
        connection.write("Move : up");
      }

      if (key === 65) {
          connection.write("Move : left"); 
      }

      if (key === 's') {
          connection.write("Move : down"); 
      }
      if (key === 'd') {
          connection.write("Move : right"); 
      }
  };
  
  
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};