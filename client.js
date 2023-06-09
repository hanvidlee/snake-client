// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants")
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // conn.on('Successfully connected to the game server');
  conn.on('data', (data) => {
    console.log('server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: FDS");
    //setTimeout(() => conn.write("Move: left"), 50);
    //setInterval(() => conn.write("Move: up"), 50);
  });
  

  return conn;
};

module.exports = connect;