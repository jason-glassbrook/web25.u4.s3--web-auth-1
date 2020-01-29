/**************************************/

module.exports = loginUser

/**************************************/

const bcrypt = require ('bcryptjs')

const { models : { users } } = require ('./__needs')

/**************************************/

function loginUser (ri, ro) {

  const { username, password } = ri.body

  users.getFirst ({ username }, [ '*' ])
  .then ((_user) => {

    if (_user && bcrypt.compareSync (password, _user.hash)) {

      const user = {
        _id : _user._id,
        username : _user.username,
      }

      ri.session.loggedIn = true
      ri.session.user = user

      ro
      .status (201)
      .json ({
        'message' : `Welcome back, ${user.username}!`,
        user,
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
