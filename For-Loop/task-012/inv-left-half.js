for(let r=5;r>=1;r--){
    let pattern=""
    
    for(let sp=1;sp<=5-r;sp++){
        pattern+=" "
    }

    for(let c=1;c<=r;c++){
        pattern+="*"
    }
    console.log(pattern);
    
}