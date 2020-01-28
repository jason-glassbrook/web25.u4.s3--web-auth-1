const set = require ('./set')

module.exports =
  async (key, value, ...rest) => {
    let [ user_record ] = await set ({ [key] : value }, ...rest)

    return user_record
  }
