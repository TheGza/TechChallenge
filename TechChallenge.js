var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
	withCapabilities(webdriver.Capabilities.chrome()).build();
var fn = 'John';
var ln = 'Kelley';
var email = 'johncharleskelley@gmail.com';
var userName = 'jkelley91';
var password = 'Password1234';
var searchString = 'Great Britain 1841 SG8 PL.127 Mint';

driver.get('https://www.stanleygibbons.com');
driver.sleep(2000);

driver.findElement(webdriver.By.xpath('/html/body/div[7]/div/div/div/div/div[4]/div[2]/a/div')).click();
driver.sleep(2000);
driver.findElement(webdriver.By.xpath('//*[@id="header-top-icons"]/ul/li[6]/a')).click();
driver.sleep(2000);
driver.findElement(webdriver.By.id('sg_user_registration_firstName')).sendKeys(fn);
driver.findElement(webdriver.By.id('sg_user_registration_lastName')).sendKeys(ln);
driver.findElement(webdriver.By.id('sg_user_registration_email')).sendKeys(email);
driver.findElement(webdriver.By.id('sg_user_registration_username')).sendKeys(userName);
driver.findElement(webdriver.By.id('sg_user_registration_plainPassword')).sendKeys(password);
driver.findElement(webdriver.By.id('registration-submit')).click();
driver.sleep(5000);

driver.get('https://www.stanleygibbons.com');
driver.findElement(webdriver.By.id('main-search')).sendKeys(searchString);
driver.findElement(webdriver.By.id('header-search-icon')).click();


