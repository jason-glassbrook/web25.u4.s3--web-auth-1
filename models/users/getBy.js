const get = require ('./get')

module.exports =
  async (key, value, ...rest) => {
    let [ user_record ] = await get ({ [key] : value }, ...rest)

    return user_record
  }
