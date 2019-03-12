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
        table.string('name');
        table.string('type');
        table.string('size');
        table.integer('price');
        table.string('imageSource');
        table.text('description');
        table.integer('rating');
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
      .createTable('review', table => {
        table.increments();
        table.string('content');
        table
          .integer('productId')
          .unsigned()
          .references('id')
          .inTable('product')
          .onDelete('CASCADE');
        table
          .integer('userId')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE');
        table.timestamps(false, true);
      })
  ]);
}

export async function down(knex) {
  return Promise.all([
    knex.schema
      .dropTable('review')
      .dropTable('product')
      .dropTable('brand')
      .dropTable('category')
  ]);
}
