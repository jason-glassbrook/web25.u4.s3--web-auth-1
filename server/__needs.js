const {
  Server,
  routes,
} = require ('../__needs')

module.exports = {

  /*/ common /*/

  Server,
  routes,

  /*/ local /*/

  middleware : require ('./_middleware'),

}
