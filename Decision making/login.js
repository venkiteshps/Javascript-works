var dbpassword = "Password@123";

var dbotp = 1234;

var userPassword = "password@123";

var userOtp = 2255;

if (dbpassword==userPassword){ // Password@123==password@123  F
    if (dbotp==userOtp) {
        console.log("Login Successful");
        
        
    }
    else {
        console.log("Incorrect OTP");
        
    }
}

else {
    console.log("Incorrect Password");
    
}

