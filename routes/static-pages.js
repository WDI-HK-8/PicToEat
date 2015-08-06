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
  },
  {
    method: 'GET',
    path: '/sign-up',
    handler: function(request,reply) {
      reply.view('sign-up');
    }
  },
  {
    method: 'GET',
    path: '/profile',
    handler: function(request,reply) {
      reply.view('profile');
    }
  }
  ]);
  next();
};

exports.register.attributes = {
  name: 'static-pages-route',
  version: '0.0.1'
};
