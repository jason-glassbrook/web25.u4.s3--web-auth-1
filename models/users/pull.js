const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (_where) => {
    let user_records = await get (_where)

    await (
      data ('users')
      .where (_where)
      .delete ()
    )

    return user_records
  }
