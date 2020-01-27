const {
  Router,
  models,
} = require ('../__needs')

module.exports = {

  /*/ common /*/

  Router,
  models,

  /*/ local /*/

  // middleware : require ('./router-middleware'),
  routes : require ('./_routes'),

}
