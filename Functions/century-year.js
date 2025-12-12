function isCenturyYear(year){
    if (year%100==0) {
        return true
        
    }
    else{
        return false
    }
}
console.log(isCenturyYear(2001));
