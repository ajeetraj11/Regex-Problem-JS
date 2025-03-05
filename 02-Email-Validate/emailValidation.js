function validateEmail(email) {
  // UC5 - Final regex with optional TLD of exactly two characters
  const pattern =
    /^abc([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;
  return pattern.test(email);
}

// Test cases
const emails = [
  "abc@bridgelabz.co",
  "abc@bridgelabz.in",
  "abc.xyz@bridgelabz.co.in",
  "xyz@bridgelabz.co",
  "abc@co",
  "abc@bridgelabz",
  "abc@company",
  "abc.xyz@domain",
  "abc-xyz@domain123",
  "abc@123domain",
  "abc@",
  "abc@.com",
];

emails.forEach((email) => {
  if (validateEmail(email)) {
    console.log(`${email}: Valid Email`);
  } else {
    console.log(`${email}: Invalid Email`);
  }
});