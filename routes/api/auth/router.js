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

  models.users.push (data)
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
