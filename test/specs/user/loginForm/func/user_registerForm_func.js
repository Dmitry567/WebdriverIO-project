const { expect } = require('chai');
const { url, user} = require('./../../../../constants');

const elements = {
  registerButton:{
    selector: '//div[@id="user-section"]/ul/li/a[text(), "Register"]'
  }
};

describe ( 'User -- Register Form -- Func', () => {
  before( () => {
    browser.url(url.baseUrl)
  });

  it('should validate Register button is displayed on the top', () => {
    const element = $(elements.registerButton.selector)
    expect(element.isDisplayed()).true;

  });

  it('should redirect to Register form after click to Register button', () => {
    const element = $(elements.registerButton.selector);
    element.click();
    
  })
  
});