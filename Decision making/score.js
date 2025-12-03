var mark1 = 45;

var mark2 = 41;

var mark3 = 46;

var total = mark1 + mark2 + mark3; // total = 132 

if (total>=140 && total<=150){ // 132>=140 && 132<=150  F
    console.log("Grade A");
    
}

else if (total>=130 && total<140) { // 132>=130 && 132<140 T
    console.log("Grade B");
    
    
}

else if (total>=120 && total<130) {
    console.log("Grade B");
    
    
}

else if(total<120){
    console.log("FAILED");
    
}


