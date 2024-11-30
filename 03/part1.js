/**       function      */
function call(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
}
call();

function addTwoNumber(num1,num2){  // in this it is called parameter
    console.log(num1+num2);
}
addTwoNumber(4,5); // in this it called argument
const result =addTwoNumber(4,5) // this will give undefined
function sum(num1,num2){
    return `the answer is ${num1+num2}`
}
const ans=sum(7,5);
console.log(ans);

function loggedInUser(userName){
    if(userName===undefined){
        return `${userName} not defined`
    }
    return `hello ${userName}`
}
const user=loggedInUser();
console.log(user);

/**          functions with objects         */
function calculate(num){
    return num;
}
console.log(calculate(5));

function calculate1(...num){
    return num;
}
console.log(calculate1(500,1000,65));  //[ 500, 1000, 65 ]

function calculate2(num){
    return num;
}
console.log(calculate2(500,1000,65));  //500

function cal(val,val2,...num){
    return num;
}
console.log(cal(500,1000,97,54,65)); //[ 97, 54, 65 ] as first two has been taken by val1 and val2
