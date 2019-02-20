import { truncateTables } from '@gqlapp/database-server-ts';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['product']);

  await Promise.all(
    await [...Array(5).keys()].map(async i => {
      await knex('category').insert({
        name: `Category ${i + 1}`
      });
    }),
    await Promise.all(
      [...Array(5).keys()].map(async i => {
        await knex('brand').insert({
          name: `Brand ${i + 1}`
        });
      })
    ),
    await Promise.all(
      [...Array(20).keys()].map(async i => {
        await knex('product').insert({
          name: `Product ${i + 1}`,
          type: `Type ${i % 5}`,
          size: `${i % 3}`,
          price: `${(i % 10) * 100}`,
          imageSource: 'http://www.seedtech.eu/wp-content/uploads/2016/04/The-Seed.jpg',
          rating: 0,
          categoryId: (i % 5) + 1,
          brandId: (i % 5) + 1
        });
      })
    )
  );
}
