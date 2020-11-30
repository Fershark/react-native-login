import {by, element, expect} from 'detox';

const grantAccessToUserWithValidCredentials = async () => {
  await element(by.id('email')).typeText('test@gmail.com');
  await element(by.id('password')).typeText('123456');
  await element(by.id('submit')).multiTap(2);
};

describe('Login Logout Tests', () => {
  afterEach(async () => {
    await device.launchApp({delete: true});
  });

  it('should log in and persist log in after restart', async () => {
    await expect(element(by.id('loginScreen'))).toBeVisible();
    await grantAccessToUserWithValidCredentials();
    await expect(element(by.id('homeScreen'))).toBeVisible();

    await device.launchApp({newInstance: true});
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });

  it("shouldn't log in and show error", async () => {
    await element(by.id('email')).typeText('wrong@gmail.com');
    await element(by.id('password')).typeText('123456');
    await element(by.id('submit')).multiTap(2);
    await expect(element(by.text('Authentication error'))).toBeVisible();
  });

  it('should log out and persist log out after restart', async () => {
    await grantAccessToUserWithValidCredentials();
    await element(by.id('logout')).multiTap(2);
    await expect(element(by.id('loginScreen'))).toBeVisible();

    await device.launchApp({newInstance: true});
    await expect(element(by.id('loginScreen'))).toBeVisible();
  });
});
