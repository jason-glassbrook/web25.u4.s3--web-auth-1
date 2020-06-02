/**************************************/

module.exports = authenticateUser

/**************************************/

// const bcrypt = require ('bcryptjs')
// const { models : { users } } = require ('./__needs')

/**************************************/

function authenticateUser (ri, ro, next) {

  /***************************************
    USING SESSIONS
  ***************************************/

  if (ri.session && ri.session.loggedIn) {

    next ()

  } else {

    ro
    .status (401)
    .json ({
      'error' : {
        'message' : `session not authorized`,
      }
    })

  }

  /***************************************
    USING AUTHORIZATION HEADER
  ***************************************/

  // let { authorization } = ri.headers

  // if (authorization === undefined) {
  //   ro
  //   .status (400)
  //   .json ({
  //     'error' : {
  //       'message' : `request needs headers.authorization`,
  //       'method' : ri.method,
  //       'route' : ri.originalUrl,
  //     }
  //   })

  //   return
  // }

  // try {
  //   authorization = JSON.parse (authorization)
  // }
  // catch (error)  {
  //   ro
  //   .status (400)
  //   .json ({
  //     'error' : {
  //       'message' : `request needs headers.authorization to be in JSON format`,
  //       'method' : ri.method,
  //       'route' : ri.originalUrl,
  //     }
  //   })

  //   return
  // }

  // const { username, password } = authorization

  // if (username === undefined) {
  //   ro
  //   .status (400)
  //   .json ({
  //     'error' : {
  //       'message' : `request needs headers.authorization.username`,
  //       'method' : ri.method,
  //       'route' : ri.originalUrl,
  //     }
  //   })

  //   return
  // }

  // if (password === undefined) {
  //   ro
  //   .status (400)
  //   .json ({
  //     'error' : {
  //       'message' : `request needs headers.authorization.password`,
  //       'method' : ri.method,
  //       'route' : ri.originalUrl,
  //     }
  //   })

  //   return
  // }

  // users.getFirst ({ username }, [ 'hash' ])
  // .then ((user) => {

  //   if (user && bcrypt.compareSync (password, user.hash)) {

  //     next ()

  //   } else {

  //     ro
  //     .status (401)
  //     .json ({
  //       'error' : {
  //         'message' : `invalid user credentials`,
  //       }
  //     })

  //   }

  // })
  // .catch ((error) => {

  //   console.log (error)

  //   ro
  //   .status (500)
  //   .json ({
  //     'error' : {
  //       'message' : `internal server error when authenticating user`,
  //       'method' : ri.method,
  //       'route' : ri.originalUrl,
  //     }
  //   })

  // })

}
