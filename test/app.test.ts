import App from '../src/app';

let app: App;

beforeEach(() => {
  global.SOME_FEATURE_FLAG = false;
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
