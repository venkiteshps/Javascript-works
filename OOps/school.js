class student {

    constructor(rollno, name, grade, total) {

        this.rollno = rollno
        this.name = name
        this.grade = grade
        this.total = total
    }
    diplay() {
        console.log(this.rollno,this.name,this.grade,this.total);
        

    }
}

s1= new student(1,"amit","A+",100)
s2= new student(2,"john","B+",80)
s3= new student(3,"rahul","C+",40)
s4= new student(4,"roshan","E+",10)

s1.diplay()
s2.diplay()
s3.diplay()
s4.diplay()