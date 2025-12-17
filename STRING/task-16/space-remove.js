function spaceRemover(text){

    newText=text.trim().replaceAll("  "," ")

    return newText
}
console.log(spaceRemover(" hello  world  javascript"));
