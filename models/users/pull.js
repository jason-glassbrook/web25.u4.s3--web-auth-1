const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_id) => {
    let user_record = await get (user_id)

    await (
      data ('users')
      .where ({ _id : user_id })
      .delete ()
    )

    return user_record
  }
