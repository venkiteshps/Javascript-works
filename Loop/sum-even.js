var limit = 5 ;

var sum = 0;
  
var i = 1;

while (i<=limit) { //1<=5-T 2<=5-T 3<=5-T
    if (i%2==0) { //1%2==0 -F 2%2==0 -T 3%2==0 -F
        sum=sum+i; // 0+2=2
        
    }
    i++;//i-2 , 3 , 4
    
}

console.log(sum);
