#!/usr/bin/env node // this is a 'shebang or hashbang'- not used in Windows, so just use Node
// node main.js --ships 4 --distance 50
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

if (argv.username !== "admin" || argv.password !== "admin") {
  console.log("Wrong Username or Password");
  return;
} else {
  console.log("Retreat from the xupptumblers!");
}

// Implement a to-do app. The app should include following requirements. (Hints: some library
// might be helpful: yargs, fs).

// 1) User should be able to login with fixed username(admin) and password(admin) using
// command node app.js login --username=‘admin’ --password=‘admin’.If the username or
// the password is not correct, display “Wrong Username or Password”

// 2) User can read from a file that includes all the to-do item and display them in console. If
// the file not exist, throw an error says ‘file not exists’. Assume there is only one file.
// node app.js read

// 3) User can add a to-do item, including title, description, status(NOT FINISH, FINISH),
// time(current timestamp). Every data field should be required except for the description.
// Assume the note title is unique
// node app.js add --title=‘XXX’ --desc=‘XXX’ --status=‘XXX’ --time=‘XXX’

// 4) User can finish an to-do item by changing the status from ‘NOT FINISH’ to ‘FINISH’
// node app.js finish --title=‘XXX’

// 5) User can delete a to-do item by providing the item title
// node app.js delete --title=‘XXX’
