/**     array      */

const arr=[4,5,8,6,20];
// arrays methods

arr.push(6);
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.shift();
console.log(arr);

//arr.includes()   arr.indexOf()    join()
// slice()   splice()
//arr=[0,1,2,3,4,5];
//slpice manipulates original array i.e arr.splice(1,3) it will remove value from 1 to 3 ne arr will be [0,4,5]


/**            part 2 arrays                      */

const indHero=["SRK","SAK","SK","AK"];
const pakHero=["BAK","FM","WA"];

//indHero.push(pakHero);
//console.log(indHero); // it will result in array in array i.e [ 'SRK', 'SAK', 'SK', 'AK', [ 'BAK', 'FM', 'WA' ] ]
// const joinHero=indHero.concat(pakHero);// concat joins two or more arrays and returns new array
// console.log(joinHero);

//spread opreator i.e it will spread all aray into individual
const allHero=[...indHero,...pakHero];
console.log(allHero);

console.log(Array.isArray("Abhi")); //false
console.log(Array.from("Abhi")); //[ 'A', 'b', 'h', 'i' ]


/**       objects        */

//objects literals
const mySymbol=Symbol("key1");
const user={
    name:"abhi",
    [mySymbol]:"jite raho",
    age:12,
    location:"bengal"
}
console.log(user);
console.log(user.name);
console.log(user[mySymbol]);
//Object.freeze(user) // by doing this we will not be able to change or manipulate value it will be freezed
user.greetings=function(){
    console.log(`hello ${user.name}`);
}
console.log(user.greetings());

/**         object singleton      */
//const tinderUser = new Object()  //singleton object
const tinderUser={}  // non-singleton object
tinderUser.id=132;
tinderUser.name="bittu"
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const obj1={1:"a" ,2:"b"};
const obj2={4:"c" ,3:"d"};

// const obj3=Object.assign(obj1,obj2);
const obj3={...obj1,...obj2};
console.log(obj3);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ 132, 'bittu', false ]
console.log(Object.entries(tinderUser));

const course={
    courseName:"JAVASCRIPT",
    fees:2500,
    courseInstrctor:"Abhi",
}
const {courseInstrctor}=course;
console.log(courseInstrctor);
