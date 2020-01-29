/**************************************/

module.exports = logoutUser

/**************************************/

function logoutUser (ri, ro) {

  if (ri.session && ri.session.user) {

    const { user } = ri.session

    ri.session.destroy((error) => {
      if (error) {
        console.log (error)

        ro
        .status (500)
        .json ({
          'error' : {
            'message' : `internal server error when logging out as user`,
            'method' : ri.method,
            'route' : ri.originalUrl,
          }
        })

      } else {

        ro
        .status (201)
        .json ({
          'message' : `Farewell, ${user.username}!`,
          user,
        })

      }
    })

  } else {

      ro
      .status (201)
      .json ({
        'message' : `Farewell!`,
      })

  }

}
