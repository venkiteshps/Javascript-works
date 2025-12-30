var mobiles=[
    {IME:123,model:"15 Pro",brand:"apple",price:80000},
    {IME:124,model:"X200",brand:"vivo",price:50000},
    {IME:125,model:"X300 Pro",brand:"vivo",price:80000},
    {IME:126,model:"S23 Ultra",brand:"samsung",price:60000},
    {IME:127,model:"Narzo 30",brand:"Realme",price:15000},
    {IME:128,model:"Neo 2",brand:"iqoo",price:30000},
    {IME:129,model:"Pixel",brand:"google",price:75000},
    {IME:121,model:"Poco",brand:"mi",price:15000},
    {IME:121,model:"17 Plus",brand:"apple",price:75000}
]

var allPhones=mobiles.map(mb=>mb.model)
// console.log(allPhones);

// aplle brand phones

var appleMob=mobiles.filter(mb=>mb.brand=="apple").map(mb=>mb.model)
console.log(appleMob);

// mobiles above 50k

var mobGt50k=mobiles.filter(mb=>mb.price>=50000).map(mb=>mb.model)
console.log(mobGt50k);

mobiles.sort((mb1,mb2)=>mb2.price-mb1.price)
// console.log(mobiles);

var costly=mobiles.reduce((mb1,mb2)=>mb1.price>mb2.price?mb1:mb2).price
// console.log(costly);
var costlyMobiles=mobiles.filter(mb=>mb.price==costly).map(mb=>mb.model)
console.log(costlyMobiles);






