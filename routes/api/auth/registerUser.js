/**************************************/

module.exports = registerUser

/**************************************/

const bcrypt = require ('bcryptjs')

const { models : { users } } = require ('./__needs')

/**************************************/

function registerUser (ri, ro) {

  const { username, password } = ri.body

  const data = {
    username,
    hash : bcrypt.hashSync (password, 10),
  }

  users.push (data)
  .then (([ user ]) => {

    const { _id, username } = user

    ro
    .status (201)
    .json ({
      'message' : `Welcome to the family, ${username}!`,
      user : { _id, username },
    })

  })
  .catch ((error) => {

    console.log (error)

    ro
    .status (500)
    .json ({
      'error' : {
        'message' : `internal server error when registering new user`,
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })

  })

}
