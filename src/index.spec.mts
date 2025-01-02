import { it, describe } from 'node:test';
import assert from 'node:assert/strict';

import { hello } from './index.ts';

describe('simple test', () => {
  it('synchronous passing test', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(1, 1);
  });

  it('asynchronous passing test', async (t) => {
    // This test passes because the Promise returned by the async
    // function is settled and not rejected.
    assert.strictEqual(1, 1);
  });


  it('helloTest', () => {
    assert.equal(hello(), 'Hello world');
  });

  it('equal', () => {
    assert.equal(1 + 2, 3);
  });
})

