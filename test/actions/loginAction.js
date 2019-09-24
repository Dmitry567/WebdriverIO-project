
function loginAction(browser){
  browser.url('https://stage.pasv.us/user/login');

  const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const button = $('//button[@type="submit"]')

    const EMAIL = 'admin@test.com';
    const PASSWORD = '11111';

    emailField.setValue(EMAIL);
    passwordField.setValue(PASSWORD);


    button.click();
    browser.pause(10000);

}

module.exports = loginAction;
  
