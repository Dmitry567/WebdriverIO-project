const { expect } = require('chai');
const {baseUrl} = require('./../../../../constants');


const url = `${baseUrl}/user/login`;

describe ( 'User - Login Form - Desing', () => {
  before( () => {
    browser.url(url);

  });

  it('should validate h1 is displayed', () => {
    const element = $('//h1');
    const isDisplayed = element.isDisplayed();
    expect(isDisplayed).to.be.true;

  });

  it('should validate h1 has a correct color', () => {
    const element = $('//h1');
    const actualColor = element.getCSSProperty('color').parsed.hex;
    const expectedColor = '#333333';

    expect(actualColor).to.be.eq(expectedColor);


    console.log(actualColor)

  });
  
});