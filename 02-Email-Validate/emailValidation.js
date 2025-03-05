function validateEmail(email) {
  // UC1 - Initial regex
  const pattern =
    /^abc(\.[a-z]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return pattern.test(email);
}

// Test cases
const emails = [
  "abc@bridgelabz.co",
  "abc@bridgelabz.in",
  "abc.xyz@bridgelabz.co.in",
  "xyz@bridgelabz.co",
  "abc@co",
];

emails.forEach((email) => {
  if (validateEmail(email)) {
    console.log(`${email}: Valid Email`);
  } else {
    console.log(`${email}: Invalid Email`);
  }
});