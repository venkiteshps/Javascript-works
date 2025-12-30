var words=["thoughtful","meaningful","beautiful","powerful","housefull"]

var upperWords=words.map(w=>w.toUpperCase())

console.log(upperWords);

var fulEndingWord=words.filter(w=>w.endsWith("ful"))
console.log(fulEndingWord);

