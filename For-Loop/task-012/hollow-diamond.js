for(let r=1;r<=4;r++){
    let pattern=""

    for(let c=1;c<=7;c++){
        if ((c+r==5) || (c-r==3)) {
            pattern+="*"
            
        }
        
        else{
            pattern+=" "
        }
    }
        console.log(pattern);
    
}

for(let r=4-1;r>=1;r--){
    let pattern=""

    for(let c=1;c<=7;c++){
        if ((c+r==5) || (c-r==3)) {
            pattern+="*"
            
        }
        
        else{
            pattern+=" "
        }
    }
        console.log(pattern);
    
}