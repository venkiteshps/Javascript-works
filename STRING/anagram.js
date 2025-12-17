function isanagram(word1,word2){

let anagramWord=true



for (let ch of word1){
    if (word2.indexOf(ch)==-1) {
        anagramWord=false
        break
    }

}
return anagramWord
}
console.log(isanagram("listen","silent"));
