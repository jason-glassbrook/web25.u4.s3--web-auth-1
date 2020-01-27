/***********************************************************
  ~/auth - router
***********************************************************/

const {
  Router,
  models,
} = require ('./__needs')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/auth/register')
.post ((ri, ro) => {

  const data = ri.body

  models.auth.register.push (data)
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
        'message' : `failed to register new user`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

})

router.route ('/auth/login')
.post ((ri, ro) => {

  const data = ri.body

  models.auth.login.push (data)
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
        'message' : `failed to login as user with those credentials`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })
})

/**************************************/

module.exports = router
