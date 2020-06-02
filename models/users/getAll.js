const { data } = require ('./__needs')
const _public = require ('./_public')

module.exports =
  async (_select = _public) => {
    let user_records = await (
      data ('users')
      .select (_select)
    )

    return user_records
  }
