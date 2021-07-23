exports.seed = function(knex) {
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
