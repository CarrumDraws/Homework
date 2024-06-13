const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const data = {
  id: "1",
  username: "username",
  role: "admin",
};
const signed_jwt = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "5m" });
console.log("jwt.sign(data, process.env.JWT_KEY) =", signed_jwt);

try {
  const decoded_real_jwt = jwt.verify(signed_jwt, process.env.JWT_KEY);
  console.log(
    "jwt.verify(signed_jwt, process.env.JWT_KEY) =",
    decoded_real_jwt
  );

  // const decode_fake_key = jwt.verify(signed_jwt, "fake key");
  // console.log("jwt.verify(signed_jwt, 'fake key') =", decode_fake_key);

  // const fake_jwt =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjY3MTg2MDEyfQ.IK_bcpi0yE0fD0gnCTm30rlGc3WWbHcQ9h7HiX10c4o";
  // const decoded_fake_jwt = jwt.verify(fake_jwt, process.env.JWT_KEY);
  // console.log("jwt.verify(fake_jwt, process.env.JWT_KEY) =", decoded_fake_jwt);
} catch (e) {
  console.log(e);
}
