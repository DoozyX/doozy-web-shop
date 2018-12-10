export async function up(knex) {
  return Promise.all([
    knex.schema
      .createTable('category', table => {
        table.increments();
        table.string('name');
        table.timestamps(false, true);
      })
      .createTable('brand', table => {
        table.increments();
        table.string('name');
        table.timestamps(false, true);
      })
      .createTable('product', table => {
        table.increments();
        table.string('name').notNull();
        table.string('type').notNull();
        table.string('size').notNull();
        table.integer('rating').notNull();
        table
          .integer('categoryId')
          .unsigned()
          .references('id')
          .inTable('category')
          .onDelete('CASCADE');
        table
          .integer('brandId')
          .unsigned()
          .references('id')
          .inTable('brand')
          .onDelete('CASCADE');
        table.timestamps(false, true);
      })
  ]);
}

export async function down(knex) {
  return Promise.all([
    knex.schema
      .dropTable('product')
      .dropTable('brand')
      .dropTable('category')
  ]);
}