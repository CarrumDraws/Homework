const path = require("path");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
// Load .env variables from "../.env"

async function run() {
  const password = "password";
  const wrongPassword = "wrongPassword";
  const hashed = await bcrypt.hash(password, Number(process.env.SALT));
  console.log("hashed =", hashed);

  // Don't need to pass in salt- salt is embedded into the hash itself
  const comparedCorrect = await bcrypt.compare(password, hashed);
  console.log("bcrypt.compare(password, hashed) =", comparedCorrect);

  const comparedWrong = await bcrypt.compare(wrongPassword, hashed);
  console.log("bcrypt.compare(wrongPassword, hashed) =", comparedWrong);
}

run().catch(console.dir);
