net = require("net");

net
  .createServer((socket) => {
    //just added
    socket.on("error", (err) => {
      console.log("Caught flash policy server socket error: ");
      console.log(err.stack);
    }),
      socket.write('<?xml version="1.0"?>\n');
    socket.write(
      '<!DOCTYPE cross-domain-policy SYSTEM "http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd">\n'
    );
    socket.write("<cross-domain-policy>\n");
    socket.write('<allow-access-from domain="*" to-ports="*"/>\n');
    socket.write("</cross-domain-policy>\n");
    socket.end();
  })
  .listen(843);
