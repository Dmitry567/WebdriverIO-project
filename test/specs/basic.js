const assert = require('assert')

describe('Main page', () => {

 //   it('should have the right title', () => {
//      browser.url('https://webdriver.io')
 //       const title = browser.getTitle()
//     assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')

it ('should have correct site name', () => {
    browser.url('https://app.pasv.us/');
    const element = $('//span[@id="site-name"]');
    const text = element.getText();
    assert.strictEqual(text, 'Progress Monitor');
        
    });
});