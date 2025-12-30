var word="javascript"

var char_count={} 

for(ch of word){
    if (ch in char_count) {
        char_count[ch]+=1
        
    }
    else{
        char_count[ch]=1
    }
}

console.log(char_count);
