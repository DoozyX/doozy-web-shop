import { returnId, truncateTables } from '@gqlapp/database-server-ts';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['post', 'comment']);

  await Promise.all(
    [...Array(20).keys()].map(async ii => {
      const post = await returnId(knex('post')).insert({
        title: `Post title ${ii + 1}`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat viverra ligula et commodo. Curabitur pulvinar vitae leo vel molestie. Curabitur in tortor ex. Maecenas commodo velit mi, vitae eleifend erat viverra sed. Cras ultricies vehicula ipsum id dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur orci felis, hendrerit vel vulputate vel, sagittis elementum ipsum. Donec non diam sed diam facilisis sodales. Sed non ex fringilla, volutpat ipsum eget, fermentum nisl.

Nam porttitor lorem sed lectus ullamcorper, sit amet efficitur nunc feugiat. Proin posuere turpis nec ante placerat euismod. Nunc gravida metus elementum, ultrices tortor ac, fringilla est. Pellentesque ut libero ante. Aliquam non ex id erat auctor facilisis non in augue. Etiam et tellus ut lorem sagittis luctus id et enim. In tempor metus leo, vitae sagittis purus condimentum in. Ut sed felis mi. Praesent mattis hendrerit porta. Nulla molestie tempor massa, in elementum nulla. Curabitur tincidunt facilisis ante et rhoncus. In volutpat faucibus lectus. Sed a imperdiet lacus. Proin vel sagittis risus.

Suspendisse ultrices dui et libero vehicula, nec malesuada ex commodo. Pellentesque dapibus accumsan dolor, sit amet volutpat lectus pulvinar at. Suspendisse ac sem at libero porttitor fermentum. Aenean id congue magna. Nam ac porttitor nisi. Nulla sollicitudin eget arcu vitae malesuada. Aliquam eu felis nec lectus pellentesque semper eu sit amet quam.

Nulla vitae mauris a massa lacinia fringilla. Duis feugiat justo sed neque elementum, vel blandit arcu tristique. Mauris vitae ultricies magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus metus justo, mattis nec dignissim vel, feugiat sed nibh. Integer vulputate scelerisque quam, maximus commodo libero suscipit ultricies. Morbi venenatis purus eget enim congue, quis sagittis nulla maximus. Ut facilisis lectus ut sem accumsan aliquam. Cras efficitur fringilla metus, eu tempus libero consequat non. Mauris lacinia est ligula, sit amet venenatis enim consequat eu. Integer pellentesque eros eu turpis porttitor, tincidunt posuere massa vestibulum. Nam faucibus dui dui, ac egestas felis elementum quis. Nunc dapibus suscipit tincidunt. Praesent posuere, ex quis rutrum tempus, justo lorem porta sapien, eget molestie massa libero eu augue.

Cras volutpat odio ac eleifend interdum. Praesent ut tristique turpis, sed imperdiet nulla. Curabitur vestibulum dui in augue euismod feugiat. Donec vel orci nisl. Cras pretium nulla vestibulum nisi posuere, sed convallis risus tincidunt. Integer posuere, dui in placerat vulputate, elit velit laoreet lacus, et mollis mauris eros id orci. Cras auctor tristique sagittis. Suspendisse quis tempus erat, ac faucibus sapien. Sed sodales magna mattis semper luctus. Sed vel nibh pretium, viverra nibh id, condimentum risus.`,
        imageSource:
          'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        user_id: '1'
      });

      await Promise.all(
        [...Array(2).keys()].map(async jj => {
          return returnId(knex('comment')).insert({
            post_id: post[0],
            content: `Comment title ${jj + 1} for post ${post[0]}`
          });
        })
      );
    })
  );
}
