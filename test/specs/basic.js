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

    it ('should have current year in the footer copywrite line', () => {
        const element = $('//small[@class="d-block mb-3 text-muted"]');
        const text = element.getText();
        const currentYear = '2019';

        const isIncludes = text.includes(currentYear);

        assert.strictEqual(isIncludes, true);
            
        });
});