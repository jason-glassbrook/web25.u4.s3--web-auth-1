const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (_where) => {
    let user_record = await get (_where)

    await (
      data ('users')
      .where (_where)
      .delete ()
    )

    return user_record
  }
