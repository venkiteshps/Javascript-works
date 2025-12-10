for(let r=1;r<=4;r++){
    let pattern=""

    for(let c=1;c<=4;c++){
        if (c<=r) {
            pattern+=1 +"\t"
            
        }
        else{
            pattern+="A\t"
        }
    }
    console.log(pattern);
    
}