exports.register = function(server, option, next) {
  server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply){
      reply.view('index', {layout: 'layout'});
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
      reply.view('home', {layout: 'layout'});
    }
  },
  {
    method: 'GET',
    path: '/sign-up',
    handler: function(request,reply) {
      reply.view('sign-up', {layout: 'layout'});
    }
  },
  {
    method: 'GET',
    path: '/profile',
    handler: function(request,reply) {
      reply.view('profile', {layout: 'layout'});
    }
  }
  ]);
  next();
};

exports.register.attributes = {
  name: 'static-pages-route',
  version: '0.0.1'
};
