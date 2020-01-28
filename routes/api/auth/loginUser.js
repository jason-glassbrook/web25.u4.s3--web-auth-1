/**************************************/

module.exports = loginUser

/**************************************/

const bcrypt = require ('bcryptjs')

const { models : { users } } = require ('./__needs')

/**************************************/

function loginUser (ri, ro) {

  const { username, password } = ri.body

  users.getBy ('username', username, [ 'username', 'hash' ])
  .then ((user) => {

    if (user && bcrypt.compareSync (password, user.hash)) {

      ro
      .status (201)
      .json ({
        'message' : `Welcome, ${user.username}`,
      })

    } else {

      ro
      .status (401)
      .json ({
        'error' : {
          'message' : `invalid user credentials`,
        }
      })

    }

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `internal server error when logging in as user`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })
}
