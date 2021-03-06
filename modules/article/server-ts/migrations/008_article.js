exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('post', table => {
        table.increments();
        table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE');
        table.string('title');
        table.text('content');
        table.string('imageSource');
        table.timestamps(false, true);
      })
      .createTable('comment', table => {
        table.increments();
        table
          .integer('post_id')
          .unsigned()
          .references('id')
          .inTable('post')
          .onDelete('CASCADE');
        table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE');
        table.string('content');
        table.timestamps(false, true);
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('comment'), knex.schema.dropTable('post')]);
};
