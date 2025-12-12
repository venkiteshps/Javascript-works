function reverse(text){
    var res = ""
    var count = 0

    for(ch of text){
        count++
    }

    for(let i=count-1;i>=0;i--){
        res+=text[i]
    }
    return res
}

console.log(reverse("hello"));
