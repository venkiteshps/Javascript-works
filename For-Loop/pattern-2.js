for(let r=1;r<=4;r++){
    let pattern = ""

    for(let c=1;c<=4;c++){
        
        if (c%2!=0) {
            pattern+= "E \t"
            
        }
        else{
            pattern+="O \t"
        }

        // pattern+=c%2==0?"E":"O"        
    }
    console.log(pattern);
    
}