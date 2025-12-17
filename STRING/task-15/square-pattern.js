function square(num){

    for(let r=1;r<=num;r++){
        let pattern = ""

        for(let c=1;c<=num;c++){
            pattern+="* "
        }
        console.log(pattern);
        
    }
  

}
square(5)
