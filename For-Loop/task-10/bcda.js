for(let r=1;r<=4;r++){
    let pattern=""

    for(let c=1;c<=4;c++){
        if (r==1) {
            pattern+= "A\t"
            
        }
        else if (r==2) {
            pattern+="B\t"
            
        }
        else if (r==3) {
            pattern+="C\t"
            
        }
        else{
            pattern+="D\t"
        }
    }
    console.log(pattern);
}