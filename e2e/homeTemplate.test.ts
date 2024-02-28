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

describe('HomeTemplate', () => {
  test('render template title', async () => {
    await expect(element(by.id('HomeTemplate'))).toBeVisible();
    await expect(element(by.id('HomeTemplatePageContainer'))).toBeVisible();

    await expect(element(by.id('HomeTitle'))).toBeVisible();
  });
});
