
exports.seed = function(knex) {
  // ".truncate()" deletes all existing entries. It is similar to del(), but also
  // resets the autoincrementing identifier field.
  return knex('fruits').truncate()
    .then(() => {
      return knex('fruits').insert([
        { name: 'orange', avgWeightOz: 5, delicious: true, color: 'orange' },
        { name: 'banana', avgWeightOz: 4, delicious: true, color: 'yellow' },
        { name: 'melon', avgWeightOz: 32, delicious: false, color: 'yellow' },
        { name: 'blueberry', avgWeightOz: 0.05, delicious: true, color: 'blue' },
      ]);
    });
};
