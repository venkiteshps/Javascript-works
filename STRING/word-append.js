var word ="ABC123"

var challangeCode="7YZ"

var newWord=word.concat(challangeCode)


var masked=""
var count=1

for(let i=0;i<=newWord.length-1;i++){
    
    if (count==3) {
        masked+="X"
        count=1
        
    }
    else{
        masked+=newWord[i]
        count++
    }
}



console.log(masked);
