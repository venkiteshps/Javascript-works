for(let r=1;r<=5;r++){
    let pattern=""

    for(let c=1;c<=9;c++){
        if ((r+c==6) || (c-r==4)) {
            pattern+= "*\t"
            
        }
        
        else if ((r==5 && c%2!=0) || (c==5 && r%2!=0)) {
            pattern+="*\t"
            
        }
        else if (r==4 && c%2==0) {
            pattern+="*\t"
            
        }
        else{
            pattern+="\t"
        }
    }
    console.log(pattern);
}