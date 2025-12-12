function leapyear(year){

    if ((year%100==0 && year%400==0)||(year%100!=0 && year%4==0))  {
        return "leapyear"
        
    }
    else{
        return "Not a Leapyear"
    }
}

console.log(leapyear(2000));
