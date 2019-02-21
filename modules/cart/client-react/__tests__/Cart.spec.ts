import { expect } from 'chai';
import { step } from 'mocha-steps';

import Renderer from '../../../../packages/client/src/testHelpers/Renderer';
import { updateContent } from '../../../../packages/client/src/testHelpers/testUtils';

describe('Cart UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/Cart');
  const content = updateContent(app.container);

  step('Cart page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  step('Cart page has title', async () => {
    expect(content.textContent).to.not.be.empty;
  });
});
