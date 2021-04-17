const validLogin = require('./services.js');

test('login validation on username and password', () => {
  username = "abcd"
  password = "43tWrFeE$"
  expect(validLogin(username, password)).toEqual(true);
})

// negative test: prevent invalid login
test('prevent invalid login', () => {
  expect(validLogin('','')).toEqual(false);
})


