var num = 28; 

sum = 0;


for (let i=1;i<num;i++){ //i=1 1<28-T i=2 2<28-T
    if(num%i==0){// 28%1==0-T  28%2==0-T 
        sum = sum+i; // 0+1=1 1+2=3
    }

    
    

}
console.log(sum==num?`Perfect No`:`Not a perfect No`);