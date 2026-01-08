class car{
    setCarDetail(brand,model,color,price){
        this.brand=brand
        this.model=model
        this.color=color
        this.price=price
    }
    displaycar(){
        console.log(this.brand,this.model,this.color,this.price);
        
    }


}

var car1=new car()
car1.setCarDetail("suzuki","baleno","white",950000)
var car2=new car()
car2.setCarDetail("volkwagen","polo","red",100000)
var car3=new car()
car3.setCarDetail("hyundie","creta","black",1550000)
var car4=new car()
car4.setCarDetail("kia","seltos","black",2050000)

car1.displaycar()
car2.displaycar()
car3.displaycar()
car4.displaycar()

