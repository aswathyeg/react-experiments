import React from 'react'
class Dog{
name:string;

constructor(data:string){
    this.name=data;
}

} 
let dog:any=new Dog('Rover')
if(dog instanceof Dog){
   
    console.log(`${dog.name} is a dog`)
}
export default Dog;