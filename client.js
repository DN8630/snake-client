
const net = require('net');
const server = require('./constants');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: server.IP,
    port: server.PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf-8');
  conn.on('connect', () => {
    console.log(`Successfully connected to the game server`);
    conn.write("Name: DAY");
    
  });

  conn.on('data',(data) => {
    console.log(`${data}`);
  });
  
 


  return conn;
};

module.exports = { connect };
// setTimeout(() => {
// conn.write("Move: up");
// },50);
// setTimeout(() => {
//   conn.write("Move: left");
// },300);
// setTimeout(() => {
//   conn.write("Move: down");
// },500);  setTimeout(() => {
//   conn.write("Move: right");
// },700);
// setInterval(() => {
//   conn.write("Move: up");
// },50);
 