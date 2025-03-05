function validatePinCode(pinCode) {
    
    // UC1 : Regex pattern to validate a 6-digit Indian PIN code
    const pinCodePattern = /^[0-9]{6}$/;

    if (pinCodePattern.test(pinCode)) {
        console.log("Valid PIN code");
    } else {
        console.log("Invalid PIN code");
    }
}

// Example usage
validatePinCode("400088");  
validatePinCode("002244"); 