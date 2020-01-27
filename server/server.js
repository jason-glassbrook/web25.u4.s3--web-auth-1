/***********************************************************
  server
***********************************************************/

const {
  Server,
  middleware,
  routes
} = require ('./__needs')

/**************************************/

const server = Server ()

server.use (middleware)

server.use ('/', routes)

/**************************************/

module.exports = server
