var Auth = require('./auth');

exports.register = function(server, option, next){
  server.route([
    {
      method: 'GET',
      path: '/photos',
      handler: function(request, reply){
        Auth.authenticated(request, function(session){
          if(!session.authenticated) {
            return reply(session);
          }
          var db = request.server.plugins['hapi-mongodb'].db;

          db.collection('photos').find().toArray(function(err, photos){
            if (err) { return reply("Internal MongoDB error"); }
            reply(photos);
          });
        })
      }
    },
    {
      method: 'POST',
      path: '/photos',
      handler: function(request, reply){
        Auth.authenticated(request, function(session){
          if(!session.authenticated) {
            return reply(session);
          }
          var db = request.server.plugins['hapi-mongodb'].db;
          //user info to link to photo..?
          db.collection('photos').insert(photo, function(err, writeResult) {
            if (err) { 
              return reply("Internal MongoDB error"); 
            }

            reply(writeResult);
          })
        });
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'photos-route',
  version: '0.0.1'
};