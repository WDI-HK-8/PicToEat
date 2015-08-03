exports.register = function(server, option, next) {
  server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply){
      reply.view('index');
    }
  },
  {
    method: 'GET',
    path: '/public/{path*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  },
  {
    method: 'GET',
    path: '/home',
    handler: function(request,reply) {
      reply.view('home');
    }
  }
  ])
  next();
};

exports.register.attributes = {
  name: 'static-pages-route',
  version: '0.0.1'
};
