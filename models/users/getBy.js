const get = require ('./get')

module.exports =
  async (key, value) => {
    let [ user_record ] = await get ({ [key] : value })

    return user_record
  }
