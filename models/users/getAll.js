const { data } = require ('./__needs')

module.exports =
  async () => {
    let user_records = await (
      data ('users')
    )

    return user_records
  }
