
exports.seed = function(knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'dragon fruit', avgWeightOz: 16, delicious: true, color: 'red' },
        { name: 'blueberry', avgWeightOz: 0.5, delicious: true, color: 'blue' },
        { name: 'banana', avgWeightOz: 8, delicious: true, color: 'yellow' },
      ]);
    });
};