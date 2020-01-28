const get = require ('./get')

module.exports =
  async (n, ...rest) => {
    let user_records = await get (...rest)

    return user_records[n]
  }
