// Used for data validation + sanitization
// const validator = require("validator");

// console.log(validator.isEmail("fanfan.com"));
// console.log(validator.isMobilePhone("3472218399", "en-US"));

// console.log(
//   validator.isStrongPassword("ThisIsThe$pa55word", {
//     minLength: 10,
//     minLowercase: 1,
//     minUppercase: 1,
//     minNumbers: 1,
//     minSymbols: 1,
//     returnScore: true,
//   })
// );

// Sanitizer
console.log(validator.escape("<script>alert('from hacker')</script>")); // Protects from XSS attacks
// XSS Attack: Cross Site Scripting Attack: a malicious script written like JS can be injected into your website.
// validator.escape() character encodes characters with HTML meaning. '<' => '&lt;'
// Ensures that user-submitted content is treated as plaintext rather than executable code.
console.log(validator.normalizeEmail("asdf+123@gmail.com")); // Clean up email
// Note: asdf+123@gmail.com is an email that utilizes "plus addressing"
// Alter your own email when signing up for stuff so recieved emails can be tagged
// "123" is a "subaddress/tag", useful for email organization
console.log(validator.ltrim("   text"));
