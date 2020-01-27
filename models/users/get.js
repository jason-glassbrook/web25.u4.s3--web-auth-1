const { data } = require ('./__needs')

module.exports =
  async (user_id) => {
    let [ user_record ] = await (
      data ('users')
      .where ({ _id : user_id })
    )

    return user_record
  }
