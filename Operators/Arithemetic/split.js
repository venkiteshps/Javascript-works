
var headCount = 4;
 
var total = 350;

var gst = 8;

var gstBill = (gst/100)*total + total;

var split = gstBill / headCount;

console.log("Tea Amount :",split);

var fuelCharge = 500;

var fuelsplit = split + (fuelCharge/headCount);

console.log("Split with Fuelcharge",fuelsplit );


