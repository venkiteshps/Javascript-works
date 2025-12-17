function isanagram(word1,word2){

let anagramWord=true

if (word1.length!=word2.length) {
    anagramWord=false
}


for (let ch of word1){
    if (word2.indexOf(ch)==-1) {
        anagramWord=false
        break
    }

}
return anagramWord
}
console.log(isanagram("listen","silent"));
