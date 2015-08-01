exports.register = function(server, option, next) {
  server.route([
      {
        method: 'GET',
        path: "/",
        handler: function(request, reply){
          reply.view('index');
        }
      }
    ])
  next();
};

exports.register.attributes = {
  name: 'static-pages-route',
  version: 0.0.1
};
