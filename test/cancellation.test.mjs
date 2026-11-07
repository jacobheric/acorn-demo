import { test } from 'node:test';

test('leave time to demonstrate stopping a live runner', async () => {
  await new Promise(resolve => setTimeout(resolve, 60000));
});
