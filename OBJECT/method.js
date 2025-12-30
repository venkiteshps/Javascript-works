// Object.keys(object)
// Object.values(object)
// Object.entries(object)

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

// for(let k of Object.keys(footBAll)){
//     console.log(k);
    
// }

// for(let v of Object.values(footBAll)){
//     console.log(v);
    
// }

for(let item of Object.entries(footBAll)){
    console.log(item);
    
} 