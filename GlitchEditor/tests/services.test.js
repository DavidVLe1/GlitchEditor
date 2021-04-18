const validLogin = require('./services.js');
const puppeteer = require('puppeteer');

test('login validation on username and password', () => {
  username = "abcd"
  password = "43tWrFeE$"
  expect(validLogin(username, password)).toEqual(true);
})

// negative test: prevent invalid login
test('prevent invalid login', () => {
  expect(validLogin('','')).toEqual(false);
})

test('should create an input element with text', async () => {
  const browser = await puppeteer.launch({
    dumpio: true, // output chrome logs to STDOUT
    headless: false,
    //slowMo: 80,
    args: ['--no-sandbox --disable-dev-shm-usage --disable-features=NetworkService --disable-gpu']
  }); 
  const page = await browser.newPage();
  await page.goto(
    'file://filepath/index.html'
    // replace 'filepath' with path to index.html
  );
  
  await page.click('button.button7');
  //await page.close();


}, 10000);
