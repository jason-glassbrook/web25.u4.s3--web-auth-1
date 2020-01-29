module.exports = [

  require ('helmet') (),

  require ('./session') (),

  require ('cors') (),

  require ('morgan') ('dev'),

]
