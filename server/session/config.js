/**************************************/

module.exports = config

/**************************************/

function config (store) {
  return ({
    name : 'cookie-monster',
    // secret is used for cookie encryption
    secret : process.env.SESSION_SECRET || 'keep it secret, keep it safe!',
    cookie : {
        maxAge : 1000 * 60 * 10, // 10 minutes in ms
        secure : process.env.PRODUCTION || false, // set to true in production, only send cookies over HTTPS
        httpOnly : true, // JS cannot access the cookies on the browser
    },
    resave : false,
    saveUninitialized : true, // read about it for GDPR compliance
    store,
  })
}
