function main(){

//define variables
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var fn = 'John';
var ln = 'Kelley';
var email = 'johncharleskelley@gmail.com';
var userName = 'jkelley91';
var password = 'Password1234';
var searchString = 'Great Britain 1841 SG8 PL.127 Mint';

//access stanley gibbons website
driver.get('https://www.stanleygibbons.com');

//sleep for 2 seconds. Used several times because webdriver runs too quickly for a physical window
driver.sleep(2000);

//every time the page is opened via the webdriver a popup is displayed asking the user to specify a homepage. This selects the Market Place
driver.findElement(webdriver.By.xpath('/html/body/div[7]/div/div/div/div/div[4]/div[2]/a/div')).click();
driver.sleep(2000);

//begin the process of registering a user
driver.findElement(webdriver.By.xpath('//*[@id="header-top-icons"]/ul/li[6]/a')).click();
driver.sleep(2000);

//fill in form with stored variables then submit the registration
driver.findElement(webdriver.By.id('sg_user_registration_firstName')).sendKeys(fn);
driver.findElement(webdriver.By.id('sg_user_registration_lastName')).sendKeys(ln);
driver.findElement(webdriver.By.id('sg_user_registration_email')).sendKeys(email);
driver.findElement(webdriver.By.id('sg_user_registration_username')).sendKeys(userName);
driver.findElement(webdriver.By.id('sg_user_registration_plainPassword')).sendKeys(password);
driver.findElement(webdriver.By.id('registration-submit')).click();
//registration process takes some time, so the driver is held for 5 seconds
driver.sleep(5000);

//after registration is completed, a page with an error is displayed. This could be a bug with the site. The user is then brought back to the homepage
driver.get('https://www.stanleygibbons.com');

//search string is entered and search button is clicked
driver.findElement(webdriver.By.id('main-search')).sendKeys(searchString);
driver.findElement(webdriver.By.id('header-search-icon')).click();
}

main();

