var expenses=[5000,3000,1000,4000,2000,2000,2500,1500,3000,3500,2000,4500]

//console.log("Index method");

// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
    
// }

// console.log("of method");

// for(ex of expenses){
//     console.log(ex);
    
// }

var totalExpense=0


for(ex of expenses){
    totalExpense+=ex
}

// console.log(`Total expense:${totalExpense}`);


var costly=0
for(let ex of expenses){
    if (ex>costly) {
        costly=ex
        
    }
    
}
console.log("Highest Expense :",costly);


var min = costly

for(let ex of expenses ){
    if (ex<min) {
        min=ex
        
    }
}
console.log("Lowest Expense :",min);



