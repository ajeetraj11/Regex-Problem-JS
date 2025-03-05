function validatePinCode(pinCode) {
    
    // UC-04 : Make sure 400 088 is also valid along with 400088
    const pinCodePattern = /^[0-9]{3}\s?[0-9]{3}$/;

    if (pinCodePattern.test(pinCode)) {
        console.log("Valid PIN code");
    } else {
        console.log("Invalid PIN code");
    }
}

// Example usage
validatePinCode("400 088");
validatePinCode("400088");  
validatePinCode("400-088"); // false