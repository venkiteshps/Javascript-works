function wordEnd(text,word){
    let end = true

    if (text.at(-1)!=word) {
        end = false
        
    }
    return end
}

console.log(wordEnd("Hello world","d"));
