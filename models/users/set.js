const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_id, user_value) => {
    await (
      data ('users')
      .where ({ _id : user_id })
      .update (user_value)
    )

    let user_record = await get (user_id)

    return user_record
  }
