var http = require('http');

http.createServer(function (req, res) {
  res.write("Estoy vivo");
  res.edn();
}).listen(8080);
