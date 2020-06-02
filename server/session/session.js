/**************************************/

module.exports = session

/**************************************/

const { Session } = require ('./__needs')
const Store = require ('./store')
const config = require ('./config')

function session () {
  const store = Store (Session)
  return Session (config (store))
}
