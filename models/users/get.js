const { data } = require ('./__needs')

module.exports =
  async (_where) => {
    let user_records = await (
      data ('users')
      .select ('_id', 'username')
      .where (_where)
    )

    return user_records
  }
