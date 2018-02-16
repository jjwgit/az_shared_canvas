let express = require('express');
let app = express();
let server = app.listen(8000, "localhost");
let io = require('socket.io')(server);



app.use("/",express.static('public'));

io.sockets.on('connection',

  function (socket) {
  
    console.log("We have a new client: " + socket.id);
    socket.on('mouse',
      function(data) {
        console.log("Received: 'mouse' " + data.x + " " + data.y);
        socket.broadcast.emit('mouse', data);
        // io.sockets.emit('mouse', data);

      }
    );
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);