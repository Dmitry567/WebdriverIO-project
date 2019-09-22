const expect = require('chai').expect;

describe('Login form', () =>{
  before( () => {
    browser.url('https://stage.pasv.us/user/login');
  });

  it('should login', () =>{
    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const loginButton = $('//button[@type="submit"]')

    const EMAIL = 'admin@test.com';
    const PASSWORD = '11111';

    emailField.setValue(EMAIL);
    passwordField.setValue(PASSWORD);


    loginButton.click();


    browser.pause(10000);

  });

  it('should have success message', () => {

    const userName = 'Ruslan Admin';
    const h1 = $('//h1').getText();

    expect(h1).to.eq(userName);

  });
   
});
  