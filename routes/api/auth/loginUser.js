/**************************************/

module.exports = loginUser

/**************************************/

const bcrypt = require ('bcryptjs')

const { models : { users } } = require ('./__needs')

/**************************************/

function loginUser (ri, ro) {

  const { username, password } = ri.body

  users.getFirst ({ username }, [ '*' ])
  .then ((user) => {

    if (user && bcrypt.compareSync (password, user.hash)) {

      const { _id, username } = user

      ri.session.loggedIn = true
      ri.session.userId = _id

      ro
      .status (201)
      .json ({
        'message' : `Welcome back, ${user.username}!`,
        user : { _id, username },
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
