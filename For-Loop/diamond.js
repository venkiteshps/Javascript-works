for(let r=1;r<=4;r++){
    let pattern=" "

    for(let sp=1;sp<=4-r;sp++){
        pattern+=" "
    }

    for(let c=1;c<=r;c++){
        pattern+="* "
    }
    console.log(pattern);
    
}

for(let r=4;r>=1;r--){
    let pattern=" "

    for(let sp=1;sp<=4-r;sp++){
        pattern+=" "
    }

    for(let c=1;c<=r;c++){
        pattern+="* "
    }
    console.log(pattern);
    
}

