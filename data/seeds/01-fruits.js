exports.seed = async function (knex) {
  // Truncates table - wipes it, resets primary key to 1
  await knex('fruits').truncate()

  // Inserts seed entries
  await knex('fruits').insert([
    { fruit_name: 'pear' },
    { fruit_name: 'apple' },
    { fruit_name: 'pear' }
  ])
}
