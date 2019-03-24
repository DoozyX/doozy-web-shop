import { expect } from 'chai';
import { step } from 'mocha-steps';

import Renderer from '../../../../packages/client/src/testHelpers/Renderer';
import { updateContent } from '../../../../packages/client/src/testHelpers/testUtils';

describe('SplashScreen UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/SplashScreen');
  const content = updateContent(app.container);

  step('SplashScreen page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  step('SplashScreen page has title', async () => {
    expect(content.textContent).to.include('Hello, This is the SplashScreen module');
  });
});
