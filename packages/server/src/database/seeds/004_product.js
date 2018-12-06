import { truncateTables } from '../../sql/helpers';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['product']);

  await Promise.all(
    [...Array(20).keys()].map(async i => {
      await knex('product').insert({
        name: `Product ${i + 1}`,
        type: `Type ${i % 5}`,
        size: `${i % 3}`,
        rating: 0
      });
    })
  );
}
