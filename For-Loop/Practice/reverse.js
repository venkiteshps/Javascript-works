var text = "malayalam"

var result = ""

var strLength=text.length-1;

for(let i=strLength;i>=0;i--){
    result+=text[i];


}
console.log(result==text?`Palindrome`:`Not a palindrome`);
