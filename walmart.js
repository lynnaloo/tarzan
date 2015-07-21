var Hapi = require('hapi');

// Create the Walmart Labs Hapi Server
var PORT = process.env.PORT || 8000;
var server = new Hapi.Server();
server.connection({ port: PORT });

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: './public',
      listing: false,
      index: true
    }
  }
});

// Start your Tarzan Server
server.start(function () {
  console.log('Tarzan is running on port:', PORT);
});
