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
          size: `${(i % 3) + 1}`,
          price: `${(i % 10) * 100 + 1}`,
          imageSource: 'http://www.seedtech.eu/wp-content/uploads/2016/04/The-Seed.jpg',
          rating: i % 6,
          categoryId: (i % 5) + 1,
          brandId: (i % 5) + 1,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
        });
      })
    )
  );
}
