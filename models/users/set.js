const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (_where, user_value) => {
    await (
      data ('users')
      .where (_where)
      .update (user_value)
    )

    let user_records = await get (_where)

    return user_records
  }
