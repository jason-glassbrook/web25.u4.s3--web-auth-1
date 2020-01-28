const { data } = require ('./__needs')
const getFirst = require ('./getFirst')

module.exports =
  async (user_values, ...rest) => {
    const _ids = await (
      data ('users')
      .insert (user_values, [ '_id' ])
    )

    let user_records = Promise.all (
      _ids.map (
        async (_id) => await getFirst ({ _id }, ...rest)
      )
    )

    return user_records
  }
