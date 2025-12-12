function leapyear(year) {
    if ((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)) {
        return true
        
        
    }
    else{
        return false        
    }
    
}

console.log(leapyear(2000));
