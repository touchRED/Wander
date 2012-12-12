/*var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , path = require('path')
  , fs = require('fs')
  , stat = require('node-static')*/

var express = require('express')
  , app = express.createServer()
  , http = require('http')
  , io = require('socket.io').listen(app)
  , path = require('path')
  , fs = require('fs')
  , stat = require('node-static')
  , port = process.env.PORT || 8080

/*var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , path = require('path')
  , fs = require('fs')
  , stat = require('node-static')*/

app.listen(port);

app.get('/', function(req, res){
  res.sendfile('../index.html');
});



/*var fileServer = new stat.Server('./');

app.listen(8080);

function handler (request, response) {

  request.addListener('end', function () {
    fileServer.serve(request, response); // this will return the correct file
    //console.log(request);

  });

}*/

io.configure(function (){

  io.set('log level', 0);

  /*io.set('authorization', function (handshakeData, callback) {
    callback(null, true); // error first callback style 
  });*/
});

io.sockets.on('connection', function (socket) {

  socket.on('chat', function (data) {
        
    var id = Math.floor(Math.random()*10+1);

    socket.broadcast.emit('message', {'data':data, 'id':id});
    
  });
    
  socket.on('move', function (data) {
        
    socket.broadcast.emit('moving', data);
    
  });
});
