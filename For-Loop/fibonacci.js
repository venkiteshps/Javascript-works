var limit = 10;
var prev = 0;
var cur = 1;
var res=" "

// console.log(prev);
// console.log(cur);
res+=prev+","
res+=cur+","

for(let i=3;i<=limit;i++){ 
    let next = cur + prev;
    res+=next+","
    // console.log(next);
    prev = cur;
    cur = next;
    
}


console.log(res);
