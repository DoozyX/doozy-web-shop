import { step } from 'mocha-steps';

import { Renderer } from '@gqlapp/testing-client-react';

describe('Article UI works', () => {
  const renderer = new Renderer({});
  renderer.history.push('/articles');

  step('Article page renders on mount', () => {});

  step('Article page has title', async () => {});
});
