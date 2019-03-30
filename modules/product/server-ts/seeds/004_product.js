import { returnId, truncateTables } from '@gqlapp/database-server-ts';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['product', 'brand', 'category', 'review', 'product_image']);

  {
    const fruitsInsert = await returnId(knex('category')).insert({
      name: 'Fruits',
      image: 'http://a.webpurr.com/v2q1.webp'
    });
    const fruitsId = fruitsInsert[0];

    const fruits = [
      {
        name: `Apple`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/Qn1e.webp',
        rating: 4,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`,
        images: [
          'http://a.webpurr.com/JGZG.webp',
          'http://a.webpurr.com/v2dY.webp',
          'http://a.webpurr.com/wyom.webp',
          'http://a.webpurr.com/WjPZ.webp'
        ]
      },
      {
        name: `Blueberries`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/EP24.webp',
        rating: 4,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Cherries`,
        type: '0',
        size: '1',
        price: 60,
        imageSource: 'http://a.webpurr.com/K1Pk.webp',
        rating: 5,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Grape`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/YLp1.webp',
        rating: 4,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Pear`,
        type: '0',
        size: '1',
        price: 50,
        imageSource: 'http://a.webpurr.com/nroK.webp',
        rating: 5,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Plums`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/eDpW.webp',
        rating: 3,
        categoryId: fruitsId,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      fruits.map(async fruit => {
        let images;
        if (fruit.images) {
          images = [...fruit.images];
        }
        delete fruit.images;
        let fruitInsert = await returnId(knex('product')).insert(fruit);
        let fruitID = fruitInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: fruitID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: fruitID
            });
          })
        );
      })
    );
  }

  {
    const vegetableInsert = await returnId(knex('category')).insert({
      name: 'Vegetables',
      image: 'http://a.webpurr.com/7orR.webp'
    });
    const vegetableID = vegetableInsert[0];

    const vegetables = [
      {
        name: `Broccoli`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/AK1p.webp',
        rating: 4,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Cabbage`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/PNkB.webp',
        rating: 4,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Corn`,
        type: '0',
        size: '1',
        price: 60,
        imageSource: 'http://a.webpurr.com/0JD4.webp',
        rating: 5,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Cucamber`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/Z9nE.webp',
        rating: 4,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`,
        images: ['Image', '<IMAGE>', '<IMAGE>', '<IMAGE>', '<IMAGE>', '<IMAGE>', '<IMAGE>', '<IMAGE>']
      },
      {
        name: `Mushrooms`,
        type: '0',
        size: '1',
        price: 50,
        imageSource: 'http://a.webpurr.com/x2ee.webp',
        rating: 5,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Potato`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/j2pZ.webp',
        rating: 3,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Tomato`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/lRoE.webp',
        rating: 3,
        categoryId: vegetableID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      vegetables.map(async vegetable => {
        let images;
        if (vegetable.images) {
          images = [...vegetable.images];
        }
        delete vegetable.images;
        let fruitInsert = await returnId(knex('product')).insert(vegetable);
        let fruitID = fruitInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: fruitID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: fruitID
            });
          })
        );
      })
    );
  }

  {
    const toolsInsert = await returnId(knex('category')).insert({
      name: 'Tools',
      image: 'http://a.webpurr.com/Qn7B.webp'
    });
    const toolsID = toolsInsert[0];

    const tools = [
      {
        name: `Tools set`,
        type: '1',
        size: '4',
        price: 200,
        imageSource: 'http://a.webpurr.com/27qe.webp',
        rating: 4,
        categoryId: toolsID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Shovel`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/VANV.webp',
        rating: 4,
        categoryId: toolsID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Sprayer`,
        type: '0',
        size: '1',
        price: 60,
        imageSource: 'http://a.webpurr.com/y90x.webp',
        rating: 5,
        categoryId: toolsID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Sprayer`,
        type: '0',
        size: '1',
        price: 20,
        imageSource: 'http://a.webpurr.com/rjo0.webp',
        rating: 4,
        categoryId: toolsID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`,
      }
    ];

    await Promise.all(
      tools.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }

  {
    const diaryCategoryInsert = await returnId(knex('category')).insert({
      name: 'Diary Products',
      image: 'http://a.webpurr.com/JGp7.webp'
    });

    let diaryCategoryID = diaryCategoryInsert[0];

    const diaryProducts = [
      {
        name: `Milk`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/x2ex.webp',
        rating: 4,
        categoryId: diaryCategoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `White Cheese`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/AK1k.webp',
        rating: 4,
        categoryId: diaryCategoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      diaryProducts.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }

  {
    const categoryInsert = await returnId(knex('category')).insert({
      name: 'Seeds',
      image: 'http://a.webpurr.com/EP77.webp'
    });
    let categoryID = categoryInsert[0];

    const brandInsert = await returnId(knex('brand')).insert({
      name: 'DHEVAL',
      image: 'http://a.webpurr.com/6Myn.webp'
    });
    let brandID = brandInsert[0];

    const brand1Insert = await returnId(knex('brand')).insert({
      name: 'Pionir',
      image: 'http://a.webpurr.com/BMpK.webp'
    });
    let brand1ID = brand1Insert[0];

    const brand2Insert = await returnId(knex('brand')).insert({
      name: 'Syngenta',
      image: 'http://a.webpurr.com/5zV9.webp'
    });
    let brand2ID = brand2Insert[0];

    const brand3Insert = await returnId(knex('brand')).insert({
      name: 'Seminis',
      image: 'http://a.webpurr.com/LnM2.webp'
    });
    let brand3ID = brand3Insert[0];

    const products = [
      {
        name: `CAULIFLOWER`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/Nqj4.webp',
        rating: 4,
        categoryId: categoryID,
        brandId: brandID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Corn seed`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/9J0k.webp',
        rating: 4,
        brandId: brand1ID,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Paper seed`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/9J0k.webp',
        rating: 4,
        brandId: brand2ID,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Cucamber seed`,
        type: '0',
        size: '1',
        price: 40,
        imageSource: 'http://a.webpurr.com/9J0k.webp',
        rating: 4,
        brandId: brand3ID,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      products.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }

  {
    const categoryInsert = await returnId(knex('category')).insert({
      name: 'Bactericides',
      image: 'http://a.webpurr.com/y90l.webp'
    });
    let categoryID = categoryInsert[0];

    const products = [
      {
        name: `bactericide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/gv6d.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      products.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }

  {
    const categoryInsert = await returnId(knex('category')).insert({
      name: 'Herbicides',
      image: 'http://a.webpurr.com/y90l.webp'
    });
    let categoryID = categoryInsert[0];

    const brandInsert = await returnId(knex('brand')).insert({
      name: 'DHEVAL',
      image: 'http://a.webpurr.com/wyq5.webp'
    });
    let brandID = brandInsert[0];

    const products = [
      {
        name: `Herbicide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/p8qR.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Growth Enhancer`,
        type: '0',
        size: '1 l',
        price: 20,
        brandId: brandID,
        imageSource: 'http://a.webpurr.com/4z17.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Herbicide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/GlpV.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Herbicide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/Wj7l.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      products.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }
  {
    const categoryInsert = await returnId(knex('category')).insert({
      name: 'Insecticide',
      image: 'http://a.webpurr.com/y90l.webp'
    });
    let categoryID = categoryInsert[0];

    const products = [
      {
        name: `Insecticide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/av6W.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Insecticide`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/dV57.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      },
      {
        name: `Isecticede`,
        type: '0',
        size: '1 l',
        price: 20,
        imageSource: 'http://a.webpurr.com/nr42.webp',
        rating: 4,
        categoryId: categoryID,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium diam nec est sagittis rutrum. Nullam sed felis quis urna sodales placerat ut posuere tortor. Sed consectetur fringilla mi nec aliquam. In venenatis porta lorem, mollis rutrum felis accumsan semper. Duis condimentum metus id laoreet lacinia. Curabitur pulvinar condimentum libero vel luctus. Aenean lobortis nisl ut risus consequat, at blandit mauris molestie.

Proin id volutpat nulla. Nullam bibendum convallis enim, et consequat magna tempus in. Proin tempor quam a velit ornare ultrices. Nam ex quam, hendrerit ut neque at, mollis tempus massa. Nulla vehicula vestibulum mauris eget varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur a elit sit amet ultrices. Maecenas sit amet velit gravida, aliquet ex eget, bibendum dolor. Vivamus vel ipsum lorem. Phasellus sit amet quam accumsan, venenatis nibh eu, volutpat ante. Praesent aliquam mi vel diam tempor condimentum. In commodo ex vel diam malesuada consequat. Fusce tempus, nibh at hendrerit lacinia, purus tellus mattis arcu, et efficitur eros nibh sit amet metus. Phasellus fermentum orci sit amet metus ultricies dictum. Nullam cursus nunc at lacus bibendum accumsan. Quisque venenatis est ac justo semper, ullamcorper mollis magna laoreet.

Sed non accumsan dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula at libero fringilla cursus. Mauris volutpat vel erat viverra tristique. Integer porta tellus eu metus congue, vitae laoreet velit dapibus. Cras et massa imperdiet, lobortis quam vel, hendrerit nisl. Nam sed aliquet diam, et accumsan leo. Aliquam pulvinar vitae dolor at volutpat. Quisque non dolor vestibulum augue molestie placerat. Nulla sit amet tristique nisi. Maecenas vulputate orci dui, vel sollicitudin mauris scelerisque a. Ut eget risus ut lorem ornare laoreet nec vitae enim. Etiam pellentesque porttitor lobortis. Etiam maximus eros elit, vel ornare nisl egestas sed. Pellentesque sed neque lacus.`
      }
    ];

    await Promise.all(
      products.map(async product => {
        let images;
        if (product.images) {
          images = [...product.images];
        }
        delete product.images;
        let productInsert = await returnId(knex('product')).insert(product);
        let productID = productInsert[0];
        if (images) {
          images.map(async productImage => {
            await knex('product_image').insert({
              image: productImage,
              productId: productID
            });
          });
        }

        await Promise.all(
          [...Array(3).keys()].map(async i => {
            await knex('review').insert({
              content: `Review content ${i}`,
              userId: 1,
              productId: productID
            });
          })
        );
      })
    );
  }
}
