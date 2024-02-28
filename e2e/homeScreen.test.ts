const {device, expect} = require('detox');

beforeAll(async () => {
  await device.launchApp();
});

afterAll(async () => {
  await device.terminateApp();
});

beforeEach(async () => {
  await device.reloadReactNative();
});

describe('HomeScreen', () => {
  test('renders section list crashing', async () => {
    await expect(element(by.id('TodoList'))).toBeVisible();
  });

  test('can refresh the list with a pull to refresh gesture', async () => {
    await element(by.id('TodoList')).swipe('down', 'fast', 0.5);
    await expect(element(by.id('TodoList'))).toBeVisible();
  });
});
