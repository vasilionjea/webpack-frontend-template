import { beforeEach, expect, test } from '@jest/globals';
import App from '../src/app';

let app;

beforeEach(() => {
  app = new App();
  app.start();
});

test('it adds numbers', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

test('it contains string', () => {
  const value = 'hello';
  expect(value).toContain('he');
});
