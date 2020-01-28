const { data } = require ('./__needs')
const _public = require ('./_public')

module.exports =
  async (_where, _select = _public) => {
    let user_records = await (
      data ('users')
      .select (_select)
      .where (_where)
    )

    return user_records
  }
