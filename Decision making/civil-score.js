var civil = 740;


if (civil>=300 && civil<580){ //740 >=300 && 740<580  F
    console.log("POOR");
    
}

else if (civil>=580 && civil<670){ //740 >=580 && 740<670  F
    console.log("FAIR");
    
}

else if (civil>=670 && civil<740){ //740 >=670 && 740<740  F
    console.log("GOOD");
    
}

else if (civil>=740 && civil<800) { //740 >=740 && 740<800  T
    console.log("VERY GOOD");
    
    
}

else if (civil>=800 && civil<=850) {
    console.log("EXCELLENT");
    
    
}

else{
    console.log("Invalid");
    
}