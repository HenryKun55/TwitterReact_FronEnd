const io = require('socket.io')();
const moment = require('moment');
const port = 8000;

moment.locale('pt-BR');

io.on('connection', (client) => {

  client.on('subscribeToTimer', (interval) => {
    setInterval(() => {
      client.emit('timer', moment().format('LLL'));
    }, interval);
  });

  client.on('posts', posts => {
    io.emit('allPosts', posts)
  });

});

io.listen(port);
console.log('listening on port ', port);