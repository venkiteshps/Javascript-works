function vowelReplace(text){

    let vowels = "aeiou"
    let newText=""
    for(let ch of text){
        if (vowels.indexOf(ch)!=-1) {
     newText+=text.replaceAll(ch,"*")
            
        }
    }
    return newText
}

console.log(vowelReplace("Hello world"));
