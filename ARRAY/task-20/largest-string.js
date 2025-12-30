//Given an array of strings, display the string with the maximum length.

var array =["Hello","world","javascript"]

var maxlength=array[0]



for(ar of array){
    

    if (ar.length>maxlength.length) {
        maxlength=ar
        
    }
    
}
console.log(maxlength);


