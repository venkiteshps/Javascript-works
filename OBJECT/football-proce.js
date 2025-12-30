var footBAll={
    brazil:5,
    portugal:0,
    england:1,
    germany:4,
    argentina:3,
    urugay:2,
    spain:1,
    italy:4,
    france:2
}

for (let [k,v] of Object.entries(footBAll)){
    
if (v>1) {
    console.log(k,v);
}
    
}