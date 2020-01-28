const {
  models : { users },
} = require ('./__needs')

module.exports = (ri, ro) => {

  const { user_id } = ri.params

  users.getBy ({ _id : user_id })
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

}
