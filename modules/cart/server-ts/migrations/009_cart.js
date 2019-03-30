exports.up = function(knex) {
  return Promise.all([
    knex.schema
      .createTable('cart_items', table => {
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
      })
      .createTable('order', table => {
        table.increments();
        table
          .integer('userId')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE');
        table.integer('price');
        table.timestamps(false, true);
      })
      .createTable('order_item', table => {
        table.increments();
        table
          .integer('orderId')
          .unsigned()
          .references('id')
          .inTable('order')
          .onDelete('CASCADE');
        table
          .integer('productId')
          .unsigned()
          .references('id')
          .inTable('product')
          .onDelete('CASCADE');
        table.string('quantity');
        table.timestamps(false, true);
      })
  ]);
};

exports.down = function(knex) {
  return knex.schema.dropTable('cart_items');
};
