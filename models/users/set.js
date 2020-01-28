const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_value, _where, ...rest) => {
    await (
      data ('users')
      .where (_where)
      .update (user_value)
    )

    let user_records = await get (_where, ...rest)

    return user_records
  }
