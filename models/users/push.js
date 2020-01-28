const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_value) => {
    const [ _id ] = await (
      data ('users')
      .insert (user_value, '_id')
    )

    let user_record = await get ({ _id })

    return user_record
  }
