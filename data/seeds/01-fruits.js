exports.seed = async function (knex) {
  // Truncates table - wipes it, resets primary key to 1
  await knex('table_name').truncate()

  // Inserts seed entries
  await knex('table_name').insert([
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' }
  ])
}
