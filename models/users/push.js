const { data } = require ('./__needs')
const get = require ('./get')

module.exports =
  async (user_values, ...rest) => {
    const _ids = await (
      data ('users')
      .insert (user_values, [ '_id' ])
    )

    let user_records = _ids.map (
      async (_id) => await get ({ _id }, ...rest)
    )

    return user_records
  }
