/***********************************************************
  ~/api - router
***********************************************************/

const { Router } = require ('./__needs')
const middleware = require ('./_middleware')
const routes = require ('./_routes')

const unimplemented = require ('./unimplemented')

/**************************************/

const router = Router ()

router.use ('/api',
  middleware,
  routes,
)

router.route ('*')
.all (unimplemented)

/**************************************/

module.exports = router
