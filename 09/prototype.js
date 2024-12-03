const { name } = require("ejs");

function mutiply5(num){
    return 5*num
}
console.log(mutiply5(5));
console.log(mutiply5.power=2); //2
console.log(mutiply5.prototype);//{}

//evrythings in js is a object function is a function and a object

function createUser(userName,score){
    this.userName=userName;
    this.score=score;
}
createUser.prototype.inreament=function(){
    this.score++;
}
createUser.prototype.print=function(){
    console.log(`${this.score}`)
}
const hai= new createUser("chai",10);
const coff=new createUser("coffee",100);
hai.print();

//A new object is created=>the new keyword initiates the creation of new javascript object
//A prototype is linked => the newly created object get linked to the protytype property of the constructor function . this mans that it has access tp property and method defined on the constructor's prototype
//

let myName="abhi   "
console.log(myName.trim().length);
//console.log(myName.trueLength());

let hero=["spiderman","batman"];
// let heroPower={
//     spider
// }

Object.prototype.cut=function(){
    console.log(`name is present in all`)
}
Array.prototype.sayHello=function(){
    console.log(`saying hii`);
}
//heroPower.cut();
hero.cut();


//inheritence
const teacher={
    makeVideo:true,
}

const teachingSupport={
    isAvailable:true,
}
const tutior={
    makeAssingment:'js assingment',
    fullTime:true,
    __proto__:teachingSupport,
}
//teacher.__proto__=

//modern syntax
Object.setPrototypeOf(teachingSupport,teacher);

let anotherNmae="bittu mishra     ";
String.prototype.trueLength=function(){
    console.log(`true length is ${anotherNmae.trim().length}`)
}
anotherNmae.trueLength();
