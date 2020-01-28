const set = require ('./set')

module.exports =
  async (key, value) => {
    let [ user_record ] = await set ({ [key] : value })

    return user_record
  }
