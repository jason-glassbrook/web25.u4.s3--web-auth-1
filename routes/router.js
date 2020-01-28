/***********************************************************
  ~/ - router
***********************************************************/

const { Router } = require ('./__needs')
const routes = require ('./_routes')

/**************************************/

const router = Router ()

router.use ('/', routes)

/**************************************/

module.exports = router
