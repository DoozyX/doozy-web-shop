export async function up(knex) {
  return knex.schema.createTable('product', table => {
    table.increments();
    table.string('name').notNull();
    table.string('type').notNull();
    table.string('size').notNull();
    table.integer('rating').notNull();
    table.timestamps(false, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable('product');
}
