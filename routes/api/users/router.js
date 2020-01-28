/***********************************************************
  ~/users - router
***********************************************************/


const bcrypt = require ('bcryptjs')

const {
  Router,
  models : { users },
} = require ('./__needs')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/users')
.all ((ri, ro, next) => {

  const { authorization } = ri.headers

  if (authorization === undefined) {
    ro
    .status (400)
    .json ({
      'error' : {
        'message' : `request needs headers.authorization`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })
  }

  const { username, password } = authorization

  if (username === undefined) {
    ro
    .status (400)
    .json ({
      'error' : {
        'message' : `request needs headers.authorization.username`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })
  }

  if (password === undefined) {
    ro
    .status (400)
    .json ({
      'error' : {
        'message' : `request needs headers.authorization.password`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })
  }

  users.getBy ('username', username)
  .then ((user) => {

    if (user && bcrypt.compareSync (password, user.hash)) {

      next ()

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
        'message' : `internal server error when authenticating user`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})
.get ((ri, ro) => {

  models.users.getAll ()
  .then ((users) => {

    ro
    .status (200)
    .json (users)

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `internal server error when getting all users`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

router.route ('/users/:user_id')
.get ((ri, ro) => {

  const { user_id } = ri.params

  api.users.getBy ({ _id : user_id })
  .then ((user) => {

    if (user !== undefined && user !== null) {

      ro
      .status (200)
      .json (user)

    }
    else {

      ro
      .status (404)
      .json ({
        'error' : {
          'message' : `could not find user with id ${user_id}`,
          'method' : ri.method,
          'route' : ri.originalUrl,
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
        'message' : `internal server error when getting user with id ${user_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
