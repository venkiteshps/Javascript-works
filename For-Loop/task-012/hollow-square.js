for(let r=1;r<=5;r++){
    let pattern=""

    for(let c=1;c<=5;c++){
        if ((c==1 || r==1)||(r==5 ||c==5)) {
            pattern+="*\t"
            
        }
        else{
            pattern+=" \t"
        }
    }
    console.log(pattern);
    
}