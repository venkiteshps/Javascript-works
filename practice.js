// // armstrong

// var num=8208
// var numcopy=num
// var numcopy2=num
// var sum=0
// var count=0

// while(num!=0){
//     count++
//     num=Math.floor(num/10)
// }

// while (numcopy!=0) {
//     digit=numcopy%10
//     exponent=digit**count
//     sum=sum+exponent
//     numcopy=Math.floor(numcopy/10)
    
// }

// console.log(numcopy2==sum?`Armstrong no`:`Not armstrong`);


// var text="javascript"
// var count=0

// for (t of text)
//     if (t=="a"||t=="e"||t=="i"||t=="o"||t=="U") {
//         count++

        
//     }
//     console.log(count);
    

// var limit=10
// var prev=0
// var curr=1
// var res=" "


// res=res+prev+","
// res=res+curr+","

// for(let i=3;i<=limit;i++){
//     let next=curr+prev
//     res=res+next+","

//     prev=curr
//     curr=next
    
// }

// console.log(res);


// palindrome

// var text="racecar"
// var res=""
// var strlen=text.length-1

// for(let i=strlen;i>=0;i--){
//     res=res+text[i]
// }
// console.log(res);


// console.log(res==text?`Palindrome`:`Not Palindrome`);

// reverse

// var word="helloworld"

// var res=""

// var strlen=word.length-1

// for(let i=strlen;i>=0;i--){
//     res=res+word[i]
// }
// console.log(res);


for(let r=1;r<=4;r++){
    let pattern=""

    for(let c=1;c<=4;c++){
        if (c%2==0) {
            pattern=pattern+"0 \t"
            
        }
        else{
            pattern+="E \t"
        }
    }
    console.log(pattern);
}
