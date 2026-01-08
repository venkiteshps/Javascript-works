class employee{
    setEmployee(id,name,designation,salary){
        this.empid=id
        this.empname=name
        this.empdesignation=designation
        this.empsalary=salary
    }

    displayEmployee(){
        console.log(this.empid,this.empname,this.empdesignation,this.empsalary);
        
    }
}

var employeeInstance=new employee()
employeeInstance.setEmployee(11,"John","manager",25000)
employeeInstance.displayEmployee()

var employeeInstance1=new employee()
employeeInstance1.setEmployee(12,"Sajan","HR",35000)
employeeInstance1.displayEmployee()

var employeeInstance2=new employee()
employeeInstance2.setEmployee(13,"Manas","developer",55000)
employeeInstance2.displayEmployee()


