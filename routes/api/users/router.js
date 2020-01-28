/***********************************************************
  ~/users - router
***********************************************************/

const {
  Router,
  models,
} = require ('./__needs')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/users')
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
        'message' : `failed to get all users`,
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
        'message' : `failed to get user with id ${user_id}`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

/**************************************/

module.exports = router
