for(let r=1;r<=4;r++){
    let pattern=""

    for(let c=1;c<=7;c++){
        if ((c+r==5) || (c-r==3)) {
            pattern+="*"
            
        }
        else if (r==4 && c%2!=0) {
            pattern+="*"
            
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern);
    
}