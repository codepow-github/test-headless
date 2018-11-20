var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get('https://www.duckduckgo.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.id('search_button_homepage')).click();

driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if (title === 'webdriver') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    //driver.quit();
  });
});
