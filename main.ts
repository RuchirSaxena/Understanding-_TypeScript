//DECLARING VALIABLE IN Typescript
var a = 10;
let b = 20;

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //  console.log(i); =>will throw an error in ts
}

//Type Annotations
let a1: number;
let b1: boolean;
let c1: string;
let d: any; //by default values are any (not good practice)
let e: number[] = [1, 2, 3];
let f: string[] = ["Hello", "World"];

//Enum in Typescript
enum Color {
    red = 0, green = 1, blue = 2
}
let backgroundcolor = Color.red;

//Type Assertions
let message = 'Hello World';
let messageOther; //Not recommended way of defining variables
let messagePerfect: string; //Defining whats its actual type is
messagePerfect = "Perfect World";
messageOther = 'Other World';
/*
 Below code not working
function checkMessage() {
    let result=(message as string).endsWith('P');
    if (result) {
        console.log("cool");
    } else {
        console.log("un cool");
    } 
}*/

//console.log(checkMessage());

//Arrow Functions
//old way
let log = function (message) {
    console.log(message);
}
//Arrow way
let dolog = (message) => {
    console.log(message);
}

dolog("Arrow function");

//Custom Types

//old way of declaring parameters in function
let drawPoint = (x, y, z, p, q) => {
    //... your code
}

let drawPoint1 = (points) => {

}
//Custom Types 
drawPoint1({
    x: 1,
    y: 2,
    z: 3,
    p: 4,
    q: 9
})
/* The above code can broke coz we can pass string to it , to improve it we can write below code*/
let drawPoint2 = (points: {
    x: number,
    y: number
}) => {
    //your code
}
//Custom Types 
drawPoint2({
    x: 1,
    y: 2

})

//The other approach will to to use interfaces

interface Point3{
    x:number,
    y:number
}

let drawPoint3=(point:Point3)=>{
    //your code
}

//The above has voilating the concept of cohesion (oops) which states that things which are related should be part of 1 unit

import{Point} from './point'
let point=new Point(10,50);

//=>Private members can not be accesed outside
//point.x=10; 
//point.y=30;

//After setting of property
/* point.x=10; 
point.y=70; */


//Calling call method
point.draw();




