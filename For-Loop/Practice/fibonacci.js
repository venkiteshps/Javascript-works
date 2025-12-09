var limit=10;

var prev = 0;

var curr = 1;

console.log(prev);
console.log(curr);


for(let i=3;i<=limit;i++){
    let next = prev + curr;
    console.log(next);

    prev=curr;
    curr=next;
    
}

