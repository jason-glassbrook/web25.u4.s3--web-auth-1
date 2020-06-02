/**************************************/

module.exports = unimplemented

/**************************************/

function unimplemented (ri, ro) {
  return (
    ro
    .status (501)
    .json ({
      'error' : {
        'message' : 'not implemented',
        'method' : ri.method,
        'route' : ri.originalUrl,
      }
    })
  )
}
