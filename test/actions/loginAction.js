const { loginUrl, user} = require('../constants')

function loginAction(browser){
  browser.url(loginUrl);

  const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const button = $('//button[@type="submit"]')

    emailField.setValue(user.admin.login);
    passwordField.setValue(user.admin.password);


    button.click();
    browser.pause(10000);

}

module.exports = loginAction;
  
