
exports.seed = function(knex) {
  return knex('vegetables').truncate()
    .then(() => {
      return knex('vegetables').insert([
        { name: 'cucumber', avgWeightOz: 3, delicious: true, color: 'green', source: 'Ralphs' },
      ]);
    });
};
