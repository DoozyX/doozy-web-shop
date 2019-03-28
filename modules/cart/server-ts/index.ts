import ServerModule from '@gqlapp/module-server-ts';

import schema from './schema.graphql';
import createResolvers from './resolvers';
import { Cart, Order, OrderItem } from './sql';

export default new ServerModule({
  schema: [schema],
  createResolversFunc: [createResolvers],
  createContextFunc: [() => ({ Cart: new Cart(), Order: new Order(), OrderItem: new OrderItem() })]
});
