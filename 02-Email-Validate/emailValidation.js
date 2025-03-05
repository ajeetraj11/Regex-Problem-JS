function validateEmail(email) {
  // UC3 - Ensure “.” after bridgelabz and validate the mandatory 3rd part 
  const pattern =
     /^abc([._+-][a-z]+)?@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;;
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