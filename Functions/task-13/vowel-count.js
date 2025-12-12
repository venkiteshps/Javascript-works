function vowels(text){
    var vcount=0

    for(ch of text){
        if (ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" ) {
            vcount++
            
        }
    }
    return vcount
}

console.log(vowels("javascript"));
