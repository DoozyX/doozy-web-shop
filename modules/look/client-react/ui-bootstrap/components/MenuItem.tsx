import React from 'react';

import { Menu } from 'semantic-ui-react';

const MenuItem = ({ children, ...props }: any) => {
  return <Menu.Item {...props}>{children}</Menu.Item>;
};

export default MenuItem;
