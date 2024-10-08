import { test } from 'node:test';
import assert from 'node:assert/strict';

import { hello } from './index.ts';


test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test('asynchronous passing test', async (t) => {
  // This test passes because the Promise returned by the async
  // function is settled and not rejected.
  assert.strictEqual(1, 1);
});


test('helloTest', () => {
  assert.equal(hello(), 'Hello world');
});

test('equal', () => {
  assert.equal(1 + 2, 3);
});
