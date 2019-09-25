const { expect } = require('chai');
const loginAction = require('../../../../actions/loginAction')
const {loginUrl} = require('./../../../../constants');

const elements = {
  h1: {
    selector: '//h1',
    text: 'User Login'
  },
};

describe ( 'User - Login Form - Func', () => {
  before( () => {
    browser.url(loginUrl);

  });

  it('should have correct h1', () => {
    const actualH1Text =  $(elements.h1.selector).getText();
    expect(actualH1Text).to.eq(elements.h1.text);
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
 
