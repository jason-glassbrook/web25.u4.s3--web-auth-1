const { data } = require ('./__needs')

module.exports =
  async (_select = [ '_id', 'username' ]) => {
    let user_records = await (
      data ('users')
      .select (_select)
    )

    return user_records
  }
