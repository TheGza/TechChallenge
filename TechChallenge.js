function main(){

//define variables
var webdriver = require('selenium-webdriver');
	By = webdriver.By,
	until = webdriver.until;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var fn = 'John';
var ln = 'Kelley';
var email = 'johncharleskelley@gmail.com';
var userName = 'jkelley91';
var password = 'Password1234';
var searchString = 'Great Britain 1841 SG8 PL.127 Mint';

//access stanley gibbons website
driver.get('https://www.stanleygibbons.com');

//every time the page is opened via the webdriver a popup is displayed asking the user to specify a homepage. This selects the Market Place
driver.wait(until.elementLocated(By.xpath('/html/body/div[7]/div/div/div/div/div[4]/div[2]/a/div')), 10000, 'Could not locate element within time specifided');
driver.findElement(webdriver.By.xpath('/html/body/div[7]/div/div/div/div/div[4]/div[2]/a/div')).click();

//begin the process of registering a user
//waiting won't work here because the element will always be visible, even when the popup is in front of it
driver.sleep(2000);
driver.findElement(webdriver.By.xpath('//*[@id="header-top-icons"]/ul/li[6]/a')).click();

//fill in form with stored variables then submit the registration
driver.wait(until.elementLocated(By.id('sg_user_registration_firstName')), 10000, 'Could not locate element within time specifided');
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

