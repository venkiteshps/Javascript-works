function isFibonacci(num){
    var prev = 0
    var curr = 1;
    var res = ""

    res+=prev 
    res+=curr

    for(let i=3;i<=num;i++){
        let next = curr+prev;
        res+=next

        prev = curr
        curr = next

        if (curr+prev==num) {
            return true
            
        }
    }
    return false
}

console.log(isFibonacci(3));
