function wordCheck(text,word){
    let wordContain = true
    
        if (text.indexOf(word)==-1) {
            wordContain=false
            
            
        }

    return wordContain
}

console.log(wordCheck("hello world","hello"));
