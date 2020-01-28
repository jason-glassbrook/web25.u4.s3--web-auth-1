const { data } = require ('./__needs')

module.exports =
  async (_where, _select = [ '_id', 'username' ]) => {
    let user_records = await (
      data ('users')
      .select (_select)
      .where (_where)
    )

    return user_records
  }
