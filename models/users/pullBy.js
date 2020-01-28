const pull = require ('./pull')

module.exports =
  async (key, value, ...rest) => {
    let [ user_record ] = await pull ({ [key] : value }, ...rest)

    return user_record
  }
