/**************************************/

module.exports = logoutUser

/**************************************/

function logoutUser (ri, ro) {

  if (ri.session) {

    const {
      userId : _id,
      userName : username,
    } = ri.session

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
          'message' : `Farewell, ${username}!`,
          user : { _id, username },
        })

      }
    })

  } else {

      ro
      .status (204)

  }

}
