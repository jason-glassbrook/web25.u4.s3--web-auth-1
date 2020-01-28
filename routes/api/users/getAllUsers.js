/**************************************/

module.exports = getAllUsers

/**************************************/

const {
  models : { users },
} = require ('./__needs')

/**************************************/

function getAllUsers (ri, ro) {

  users.getAll ()
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

}
