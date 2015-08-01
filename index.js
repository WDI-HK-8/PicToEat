var Hapi = require('hapi');
var Path = require('path');


var server = new Hapi.Server();

var plugins = [
  { register: require('./routes/static-pages.js') },
  { register: require('./routes/sessions.js')}
  {
    register: require('yar'),
    options: {
  cookieOptions: {
    password: process.env.COOKIE_PASSWORD || 'ExcellentPassword',
    isSecure: false
    }
    }
  };
];

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply){
    reply('hello world!');
  }
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});

server.start();