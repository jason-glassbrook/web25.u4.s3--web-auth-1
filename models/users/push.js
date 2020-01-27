const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_value) => {
    const [ user_id ] = await (
      data ('users')
      .insert (user_value)
    )

    let user_record = await get (user_id)

    return user_record
  }
