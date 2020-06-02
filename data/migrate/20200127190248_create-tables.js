
exports.up = (knex) => (
  knex.schema
    .createTable ('users', (t) => {
      t
        .increments ('_id')
        .primary ()
      t
        .string ('username', 128)
        .unique ()
        .notNullable ()
      t
        .string ('hash', 128)
        .notNullable ()
    })
)

exports.down = (knex) => (
  knex.schema
    .dropTableIfExists ('users')
)
