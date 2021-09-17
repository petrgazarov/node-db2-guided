exports.seed = function(knex) {
  // ".truncate()" deletes all existing entries. It is similar to del(), but also
  // resets the autoincrementing identifier field.
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'banana', avgWeightOz: 5, delicious: true, color: 'yellow' },
        { name: 'organge', avgWeightOz: 8, delicious: true, color: 'orange' },
        { name: 'melon', avgWeightOz: 32, delicious: false, color: 'green' },
        { name: 'blueberry', avgWeightOz: 0.1, delicious: true, color: 'blue' },
      ]);
    });
};
