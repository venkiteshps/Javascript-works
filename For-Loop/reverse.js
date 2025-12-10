var word = "helloworld"

var result = ""

var count = 0;

for(ch of word){
    count++
}



for(let i=count-1;i>=0;i--){
    result= result+word[i]
}
console.log(result);
