//function in typescript

function addNumbers(num1:number,num2:number):number
{
    return num1+num2
}
console.log(addNumbers(23,45));



function printDetails(name:string,age:number):void
{
console.log(`${name} and ${age}`)
}

printDetails("saurabh",22)




//class 

class Product
{
    name:string=""
    price:number=0

    printDetails()
    {
          console.log(`${this.name} and ${this.price}`)
    }
}
//created a class with 2 property and 1 method  now if i create 10 object of that class all the 10 object will have those 2 
//propeerty and 1 method 

let product=new Product()
product.name="samsung M51"
product.price=20000

product.printDetails()



//2nd object
let product1=new Product()
product1.name="nokia M51"
product1.price=10000

product1.printDetails()

//3rd object

let product2=new Product()
product2.name="i phone"
product2.price=50000

product2.printDetails()