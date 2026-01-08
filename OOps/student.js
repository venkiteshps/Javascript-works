class student{
    
    setstudentDetail(name,id,gender,std){

    this.name=name
    this.id=id
    this.gender=gender
    this.std=std
    }
    diplay(){
    console.log(this.name,this.id,this.gender,this.std);
    }

    
    
}
var thusharInstance=new student()
thusharInstance.setstudentDetail("Thushar",12,"Male","10th")
thusharInstance.diplay()