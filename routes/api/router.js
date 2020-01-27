/***********************************************************
  ~/api - router
***********************************************************/

const {
  Router,
  middleware,
  routes,
} = require ('./__needs')

/**************************************/

const router = Router ()

router.use ('/api',
  middleware,
  routes,
)

router.route ('*')
.all ((ri, ro) => {
  ro
  .status (501)
  .json ({
    'error' : {
      'message' : 'not implemented',
      'method' : ri.method,
      'route' : ri.originalUrl,
    }
  })
})

/**************************************/

module.exports = router
