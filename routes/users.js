// var Bcrypt = require('bcrypt');
// var Joi = require('joi');

exports.register = function(server, options, next){
  server.route([
    {
      method: 'GET',
      path: '/users',
      handler: function(request,reply){
        Auth.authenticated(request, function(session){
          if(!session.authenticated) {
            return reply(session);
          }
          var db = request.server.plugins['hapi-mongodb'].db;

          db.collection('users').find().toArray(function(err, users){
          if (err) { return reply("Internal MongoDB error", err); }

          reply(users);
          });
        });
      }
    }  
  ]);

  next();
}

exports.register.attributes = {
  name: 'users-routes',
  version: '0.0.1'
};