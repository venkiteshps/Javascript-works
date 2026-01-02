var expenses = [
    { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
    { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
    { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
    { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
    { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
    { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
    { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
    { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
    { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
    { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
    { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
    { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
    { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
    { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

// owner summary
var ownerSummary = {}
for (let t of expenses) {
    let owner = t.owner
    let amount = t.amount

    if (owner in ownerSummary) {
        ownerSummary[owner] += amount
    }
    else {
        ownerSummary[owner] = amount
    }
}
// console.log(ownerSummary);

//expense with highest amount
var costlyExpense = expenses.reduce((t1, t2) => t1.amount > t2.amount ? t1 : t2)
// console.log(costlyExpense);


//cash transactions
var cashtransaction = expenses.filter(t => t.payment_method == "cash")
// console.log(cashtransaction);

//cash transaction above 1000

var cashgt1k = expenses.filter(t => t.amount >= 1000)
// console.log(cashgt1k);

//total expense

var total = expenses.reduce((sum, t1) => sum + t1.amount, 0)
// console.log(total);

//most used payment method

var paymentCount = {}
for (let t of expenses) {
    let type = t.payment_method

    if (type in paymentCount) {
        paymentCount[type] += 1

    }
    else {
        paymentCount[type] = 1
    }
}

// console.log(paymentCount);

var mostUsed = Object.entries(paymentCount).reduce((t1, t2) => t1[1] > t2[1] ? t1 : t2)
// console.log("Most used payment method : ",mostUsed);


//sara food expense

var sFoodTrans = expenses.filter(t => t.owner == "sarah" && t.category == "food").reduce((s, t) => s + t.amount, 0)
// console.log(sFoodTrans);

//priority summary

var prioritySumm = {}

for (let t of expenses) {
    let amount = t.amount
    let priority = t.priority

    if (priority in prioritySumm) {
        prioritySumm[priority] += amount

    }

    else {
        prioritySumm[priority] = amount
    }
}
// console.log(prioritySumm);

//transaction of jazeel

var jazeel = expenses.filter(t => t.owner == "jazeel")
// console.log(jazeel);

//highest paid category
var CategorySumm = {}

for (let t of expenses) {
    let category = t.category


    if (category in CategorySumm) {
        CategorySumm[category] += 1

    }

    else {
        CategorySumm[category] = 1
    }
}

// console.log(CategorySumm);

//priority summary wrt owner

var summary = {}

for (let t of expenses) {
    let priorities = t.priority
    let owners = t.owner
    let money = t.amount

    if (owners in summary) {
        summary[owners][priorities] += money

    }
    else {
        if (priorities == "need") {
            summary[owners] = { "need":money, "want": 0 }

        }
        else{
            summary[owners]={"need":0,"want":money}
        }

    }
}
console.log(summary);


//payment method

var methodSumm = {}

for (let t of expenses) {
    let method = t.payment_method


    if (method in methodSumm) {
        methodSumm[method] += 1

    }

    else {
        methodSumm[method] = 1
    }
}

// console.log(methodSumm);












