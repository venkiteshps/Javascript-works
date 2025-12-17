function isPalindromeWord(word){
   var result=""
    let newWord=word.toLowerCase()
    let spaceword=newWord.replaceAll(" ","")

    for(let i=spaceword.length-1;i>=0;i--){
    result+=spaceword[i]
}
return result==spaceword


}

console.log(isPalindromeWord("A MAN A plan a canal panama"));


