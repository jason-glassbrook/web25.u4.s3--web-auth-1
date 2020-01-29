/**************************************/

module.exports = store

/**************************************/

const { SessionProvider, data } = require ('./__needs')

function store (Session) {
  const SessionStore = SessionProvider (Session)
  return (
    new SessionStore ({
      knex : data,
      tablename : 'sessions',
      sidfieldname : 'sid',
      createtable : true,
      clearInterval : 60000,
  })
  )
}
