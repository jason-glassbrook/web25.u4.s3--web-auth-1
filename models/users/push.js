const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_value) => {
    const _ids = await (
      data ('users')
      .insert (user_value, '_id')
    )

    let user_records = _ids.map (
      async (_id) => await get ({ _id })
    )

    return user_records
  }
