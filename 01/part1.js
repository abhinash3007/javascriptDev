/*    ch-1      variables           */
const accountId=1445;
let account="abhi@gmail.com";
var password="random12";
acountHolderCity="JAIPUR";
let bankSate;

/*
var is notusedmostly today because of its block scope and unctional scope problem
never use var. avoid it
bankState willl give undefined 
*/

console.log(accountId);
console.log(account);
console.log(acountHolderCity);


/*    ch-2      datatypes       */

// "use strict" this is the new version of writting js but now js has became so advance that we do not require to write this("use strict")
//alert(3+3) we are using node not browser so this will give error in vs code ,but if we write this in brower console pop up will come and print 6
// code readability to be maitained

/**
 * number= 2 to power 23
 * bigint
 * string= " "
 * boolean= true/false
 * null = standalone value
 * symbol= unique
 * 
 * console.log(typeof undefined) // undefined
 * console.log(typeof null) //object
 * 
 */



/*    ch-3     conversions       */
let score="33ab";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
//33 =33
//33ab= NaN
//true =1 , false=2;

let isLoggedIn="abhi"
let booleanIsLoggedIN=Boolean(isLoggedIn);
console.log(booleanIsLoggedIN);

// let a = 1;

// System.out.println(a++); //You will see 1
// //Now a is 2
// System.out.println(++a); //You will see 3

// a = 5;
// i=++a + ++a + a++; 
// i=6 + 7 + 7; (a=8)

// a = 5;
// i=a++ + ++a + ++a; 
// i=5 + 7 + 8; (a=8)

/*     comparision    ch-4       */

console.log("2">2);
console.log("02">2);

console.log(null>0); //it converts null to 0
console.log(null==0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

//strict check === it check it data and datatype both are same or not 

/*       ch-5     primitive*/
// types 7= number,string,boolean,symbol,bigint,null,undefined

// non-primitive=arrays,objects,functions


/** stack used for primitive
 * let myName="abhinash";
 * let mySecondName=myName;
 * mySecondName="bittu";
 * 
 * console.log(myName);
 * console.log(mySecondName);
 *  in stack the copy is kept whatever chane we do it  not efffect the original vakue it always copies it
 * heap used for non-primitive
 * 
 * let userOne={
 *   email:"abhi@12"
 *   phone:123546
 * }
 * let userTwo=userOne
 * userTwo.email="bittu12";
 * 
 * console.log(userOne);
 * console.log(userTwo);
 * 
 * 
 * heap uses reference means whatever change we do it will effcts the other also in this case the email will be changed for both the emails
 */