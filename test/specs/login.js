const {expect} = require('chai');
const loginAction = require('../actions/loginAction');


describe('Login form', () =>{
  before( () => {
    browser.url('https://stage.pasv.us/user/login');

    it('should have correct h1', () => {
      const selector = '//h1';
      const element = $(selector);
      const actual = element.getText();
      const expected = 'User Login';
      
      expect(actual).to.eq(expected);
    });

  });

  it('should login', () =>{
    loginAction(browser);

  });

  it('should have success message', () => {

    const userName = 'Ruslan Admin';
    const h1 = $('//h1').getText();

    expect(h1).to.eq(userName);

  });
   
});
  