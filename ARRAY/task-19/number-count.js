//.Given the array [1, 3, 5, 3, 7, 3], check whether the number 3 appears more than once.
var array =[1,3,5,3,7,3]

var count=0

for(let ar of array){
    if (ar==3) {
        count++
        
    }
}
if (count==1) {
    console.log("Number appears once");
    
    
}
else if (count>1) {
    console.log("Number appears more than oonce");
    

    
}

