var dbpassword = "password123";

var dbotp = 2555;

var userPassword = "password123";

var userOtp =2555;


if (dbpassword==userPassword) {
    if (dbotp==userOtp) {
        console.log("Login Successfull");
        
        
    }
    else{
        console.log("Incorrect OTP");
        
    }
    
}
else{
    console.log("Incorrect Password");
    
}