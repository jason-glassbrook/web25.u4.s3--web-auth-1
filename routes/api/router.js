/***********************************************************
  ~/api - router
***********************************************************/

const {
  Router,
  middleware,
  routes,
} = require ('./__needs')

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
