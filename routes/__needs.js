const {

  Router,
  models,
  tools,

} = require ('../__needs')

/**************************************/

module.exports = {

  /*/ common /*/

  Router,
  models,
  tools,

  /*/ local /*/

  // middleware : require ('./_middleware'),
  routes : require ('./_routes'),

}
