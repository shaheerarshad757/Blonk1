describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render "Control your online presence" section', async () => {
    await expect(
      element(by.text('Control your online presence')),
    ).toBeVisible();
  });
  it('should render "Login" and have a Button to navigate HomeNavigator', async () => {
    const email = element(by.id('email'));
    const password = element(by.id('password'));
    await expect(email).toBeVisible();
    await expect(password).toBeVisible();
    await email.typeText('Email@email.com');
    await password.typeText('123_321_P4-SSA');
    await element(by.text('Login')).tap();
    await expect(element(by.text('Roxberry Juice'))).toBeVisible();
    await element(by.id('button')).tap();
    await element(by.id('upload')).tap();
    

    // await expect(element(by.id('button'))).tap();
  });
});
