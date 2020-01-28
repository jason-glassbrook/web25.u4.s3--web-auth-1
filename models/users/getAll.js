const { data } = require ('./__needs')

module.exports =
  async () => {
    let user_records = await (
      data ('users')
      .select ('_id', 'username')
    )

    return user_records
  }
