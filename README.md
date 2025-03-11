# typescript

//if we do not define a type it will take type automatically the concept of picking type automatically i s called type inference
//arrays:-collection of similar type of elements
//tuple:-collection of different type of elements

//union type :-it is used to define multiple types of a variable
    let empId:string|number="1234"

    type person={
    id:number,
    name:string,
    age:number
    address:Adderss
}




let user :person={
    id:1,
    name:"rahul",
    age:22,
    address:{
        city:"bangalore",
        country:"india"
    }
}

type Adderss={
    city:string,
    country:string
}

type teacher={
    subjects:string[],
}
//someone id name and subject

let Teacher :teacher & person={
    id:1,
    name:"rahul",
    address:{
        city:"bangalore",
        country:"india"
    },
    age:22,
    subjects:["maths","science"]

}




//literal type:-it is used to define a fixed value to a variable
//like in this out of 3
let category:"sports"|"entertainment"|"politics"


//enums:-collection of constant value or fixed value 

enum Color{
    PrimaryColor,
    SecondaryColor,
    FontColor,
    BackgroundColor
}
console.log(Color.PrimaryColor)

//create the enum ones and usewhere in application



//interface:  it is nothing but collection of property

interface ProductInterface{

  readonly  id:number,      //readonly becoz no one can change it id 
           name:string,
           price:number
           category?:string
}

let prod1:ProductInterface={
    id:1,
    name:"mobile",
    price:10000
}
//there is a diif between type and interface using type we can create union intersection object  literal type interface needs to be
//collection of property

//created a class with 2 property and 1 method  now if i create 10 object of that class all the 10 object will have those 2 
//propeerty and 1 method 
