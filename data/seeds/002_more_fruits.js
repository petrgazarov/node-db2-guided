
exports.seed = function(knex) {
  return knex('fruits').insert([
    { name: 'banana 2', avgWeightOz: 5, delicious: true, color: 'yellow' },
    { name: 'organge 2', avgWeightOz: 8, delicious: true, color: 'orange' },
    { name: 'melon 2', avgWeightOz: 32, delicious: false, color: 'green' },
    { name: 'blueberry 2', avgWeightOz: 0.1, delicious: true, color: 'blue' },
  ]);
};