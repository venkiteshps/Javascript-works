class bank {

    createAcc(accno, customer_name, acc_type, balance) {
        this.accno = accno
        this.customer_name = customer_name
        this.acc_type = acc_type
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log(`${this.accno} has been credited Rs${amount}, Your aval Balance:${this.balance}`);

    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance,Transaction failed");

        }
        else {
            this.balance -= amount
            console.log(`${this.accno} has been debited Rs${amount}, Your aval Balance:${this.balance}`);

        }

    }

    balanceEnq() {
        console.log(`Aval Balance:${this.balance}`);
        

    }
}

var customerInstance1=new bank()
customerInstance1.createAcc(123,"John","Savings",25000)
customerInstance1.deposit(5000)
customerInstance1.withdraw(5000)
customerInstance1.balanceEnq()
