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
//    private name:string=""
//    private price:number=0

constructor(private name:string, private price:number)
{

    // this.name=name
    // this.price=price
    // console.log("this is constructor")
    //constructor method is automatically called whenever we create an object of it 
}


    printDetails()
    {
          console.log(`${this.name} and ${this.price}`)
    }
}
//created a class with 2 property and 1 method  now if i create 10 object of that class all the 10 object will have those 2 
//propeerty and 1 method 

 let product1=new Product("Nokia 5233",2522)
// product.name="samsung M51"
// product.price=20000

// product.printDetails()



// //2nd object
// let product1=new Product()
// product1.name="nokia M51"
// product1.price=10000

// product1.printDetails()

// //3rd object

// let product2=new Product()
// product2.name="i phone"
// product2.price=50000

// product2.printDetails()



// now if i want to acces with the constructor 
product1.printDetails()







//creating class by own

class student
{


 constructor(private name:string,private roll:number,private address:string)
 {

 }

   doingTask()
   {
     console.log(`${this.name} ${this.roll} ${this.address}`)
   }


}

let myStudent= new student("rahul",12,"delhi")
myStudent.doingTask()