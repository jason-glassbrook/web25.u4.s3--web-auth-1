const helmet = require ('helmet')
const cors = require ('cors')
const morgan = require ('morgan')

module.exports = [

  helmet (),
  cors (),
  morgan ('dev'),

]
