exports.up = function(knex) {
  return knex.schema.createTable('cart_items', table => {
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE');
    table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('product')
      .onDelete('CASCADE');
    table.string('quantity');
    table.timestamps(false, true);
    table.primary(['user_id', 'product_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cart_items');
};
