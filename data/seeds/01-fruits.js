exports.seed = async function (knex) {
  // Truncates table - wipes it, resets primary key to 1
  await knex('fruits').truncate()

  // Inserts seed entries
  await knex('fruits').insert([
    { fruit_name: 'pear', fruit_avg_weight: 12, is_delicious: true },
    { fruit_name: 'apple', fruit_avg_weight: 4.6, is_delicious: 0 },
    { fruit_name: 'orange', fruit_avg_weight: 1.4 }
  ])
}
