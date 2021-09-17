exports.seed = function(knex) {
  return knex('vegetables').truncate()
    .then(function () {
      return knex('vegetables').insert([
        { name: 'cucumber', avgWeightOz: 5, delicious: true, source: 'Ralphs' },
        { name: 'tomato', avgWeightOz: 8, delicious: true },
      ]);
    });
};