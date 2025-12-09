var text = "hello world"

var cCount = 0;

var vCount = 0;

for(ch of text){
    if (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u") {
        vCount++;
        
    }
    else if(ch>"a" && ch<"z"){
        cCount++
    }
}

console.log(cCount);
console.log(vCount);

