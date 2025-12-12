function numberCheck(num){
    if (num>0) {
        return "+ve"
        
    }
    else if (num==0) {
        return "zero"
        
    }
    else{
        return "-ve"
    }
}

console.log(numberCheck(0));
