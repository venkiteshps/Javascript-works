const productSales = {
  laptop: 120,
  mobile: 250,
  headphones: 400,
  smartwatch: 180,
  tablet: 90,
  camera: 60,
  printer: 45,
  keyboard: 210,
  mouse: 320,
  speaker: 150
};

//q1 => trending product
var trending=Object.entries(productSales).reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)
console.log("Trending Product :",trending);



//q2=> product with lowest sale
var lowest=Object.entries(productSales).reduce((p1,p2)=>p1[1]<p2[1]?p1:p2)
console.log("Lowest sale :",lowest);

//q3 =>product with sales count > 200
var gt200=Object.entries(productSales).filter(p=>p[1]>200)
console.log("Products sold Gt 200 :",gt200);

// q4 => total number of products sold
var total=Object.entries(productSales).reduce((sum,p1)=>sum+p1[1],0)
console.log("Total Products sold :",total);

//q5=> sort products wrt sales order by desc
var sorted=Object.entries(productSales).sort((p1,p2)=>p2[1]-p1[1])
console.log(sorted);

