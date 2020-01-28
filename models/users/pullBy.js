const pull = require ('./pull')

module.exports =
  async (key, value) => {
    let [ user_record ] = await pull ({ [key] : value })

    return user_record
  }
