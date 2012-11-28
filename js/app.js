var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , path = require('path')
  , fs = require('fs')
  , stat = require('node-static')

var fileServer = new stat.Server('./');

app.listen(8080);

function handler (request, response) {

  request.addListener('end', function () {
    fileServer.serve(request, response); // this will return the correct file
    //console.log(request);

  });

}


/*function handler (req, res) {

  var filePath = '.' + req.url;
  if (filePath == './'){
    filePath = '../index.html';
  }

  var extname = path.extname(filePath);
  var contentType = 'text/html'
  switch(extname){

    case '.js':

      contentType = 'txt/javascript';
      break;

    case '.css':

      contentType = 'txt/css';
      break;

  }

  fs.readFile(filePath,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200,{ 'Content-Type':contentType});
    res.end(data);
  }); 
}*/

io.set('log level', 2);

io.sockets.on('connection', function (socket) {

  socket.on('chat', function (data) {
        
    socket.broadcast.emit('message', data);
    
  });
    
  socket.on('move', function (data) {

    //setInterval(function(){console.log(data);},5000);
        
    socket.broadcast.emit('moving', data);
    
  });
});
