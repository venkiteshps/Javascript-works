function palindrome(text){

var result = ""

var strLength=text.length-1

for(let i=strLength;i>=0;i--){
    result+=text[i]
}
return result==text?`Palindrome`:`Not a palindrome`

}

console.log(palindrome("racecar"));












