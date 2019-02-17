import { expect } from 'chai';
import { step } from 'mocha-steps';

import { updateContent, Renderer } from '@gqlapp/testing-client-react';

describe('Article UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/Article');
  const content = updateContent(app.container);

  step('Article page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  step('Article page has title', async () => {
    expect(content.textContent).to.include('doozy');
  });
});
