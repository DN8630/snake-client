// Stores the active TCP connection object.
let connection;
const keyValues = require('./constants');
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;

};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write(keyValues.MOVE_UP_KEY);
    
  } else if (key === 'a') {
    connection.write(keyValues.MOVE_LEFT_KEY);
  } else if (key === 's') {
    connection.write(keyValues.MOVE_DOWN_KEY);
  } else if (key === 'd') {
    connection.write(keyValues.MOVE_RIGHT_KEY);
  } else if (key === '\u0021') {
    connection.write("Say: Have fun!");
  }
};

module.exports = { setupInput };