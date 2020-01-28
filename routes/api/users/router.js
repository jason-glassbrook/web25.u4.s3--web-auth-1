/***********************************************************
  ~/users - router
***********************************************************/

const {
  Router,
} = require ('./__needs')

const authenticateUser = require ('./authenticateUser')
const getAllUsers = require ('./getAllUsers')
const getUser = require ('./getUser')

/**************************************/

const router = Router ()

/// requests ///

router.route ('/users')
.all (authenticateUser)
.get (getAllUsers)

router.route ('/users/:user_id')
.all (authenticateUser)
.get (getUser)

/**************************************/

module.exports = router
