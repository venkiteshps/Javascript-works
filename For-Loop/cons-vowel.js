var text = "hello &world"
vCount=0
cCount=0

for(let ch of text){
    if (ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u") {
        vCount++
        
    }
    else if(ch>"a" && ch<"z"){ 
        cCount++
    }
}
console.log(cCount);
console.log(vCount);
