function validatePinCode(pinCode) {
    
    // UC-02 : Starts with digit 1-9
    const pinCodePattern = /^[1-9][0-9]{5}$/;

    if (pinCodePattern.test(pinCode)) {
        console.log("Valid PIN code");
    } else {
        console.log("Invalid PIN code");
    }
}

// Example usage
validatePinCode("400088");  
validatePinCode("400088B"); // false