/***********************************************************
  ~/users - router
***********************************************************/

const {
  Router,
  models : { users },
} = require ('./__needs')

const authenticateUser = require ('./authenticateUser')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/users')
.all (authenticateUser)
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
