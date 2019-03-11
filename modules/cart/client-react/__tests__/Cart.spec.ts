import { step } from 'mocha-steps';

import { Renderer } from '@gqlapp/testing-client-react';

describe('Cart UI works', () => {
  const renderer = new Renderer({});
  renderer.history.push('/articles');

  step('Cart page renders on mount', () => {});

  step('Cart page has title', async () => {});
});
