/***********************************************************
  ~/auth - router
***********************************************************/

const bcrypt = require ('bcryptjs')

const {
  Router,
  models : { users },
} = require ('./__needs')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/auth/register')
.post ((ri, ro) => {

  const { username, password } = ri.body

  const data = {
    username,
    hash : bcrypt.hashSync (password, 10),
  }

  users.push (data)
  .then ((something) => {

    ro
    .status (201)
    .json (something)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `internal server error when registering new user`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

router.route ('/auth/login')
.post ((ri, ro) => {

  const { username, password } = ri.body

  users.getBy ('username', username)
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
})

/**************************************/

module.exports = router
