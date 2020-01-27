const {

  Server,
  routes,
  tools,

} = require ('../__needs')

/**************************************/

module.exports = {

  /*/ common /*/

  Server,
  routes,
  tools,

  /*/ local /*/

  middleware : require ('./_middleware'),

}
