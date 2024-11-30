/**            global and local scope              */
{}// this is called scope

const v=11;  //this is global scope
if(true){                   //this is local scope everything we wrie inside in {}
    let a=10;
    const b=40;
    var c=1;
}
//console.log(a);  // it will give error
//console.log(b);  // this will also give error
console.log(c);   // it will work fine
console.log(2);
function one(){
    const user="abhi";
    function two(){
        const website="youtube"
        console.log(user);
    }
    console.log(3);
    //console.log(website);   //we are consoling it  outside the scope as it is mentioned in local so it through an error
    two();
}
console.log(4);
one();
console.log(5);





/**      Arrow functions    */
// this refers to the curent context
const user={
    userName:"abhi",
    price:30,
    welcome: function(){
        console.log(`${this.userName} welcome`);
        console.log(this)  // it will give current context //{ userName: 'bittu', price: 30, welcome: [Function: welcome] }
    }
}
user.welcome();
user.userName="bittu"
user.welcome();  //bittu welcome
console.log(this) // this will print {}

function chai(){
    let userame="mishra"
    console.log(this.userame);// it willprint nothing as this doesnot work in functions it worksin object
    //console.log(this);
}
chai();

const add=(a,b)=>{
    return a+b; ///   this is explict way
}
console.log(add(4,5));




/**           IIFE         */

//IIFE used to execute function immediately
//to protect from global scope pollution

function chai(){
    console.log(`connected to code`);
}
chai();

(function chai(){  /// this is a named iife as we have him a name
    console.log(`connected to code`);
})();   // as we  using two iife so semi ; is compulsory to use for end else error will come 

((name)=>{  //it is parameter iife if we remove parameter it will be simple iife
    console.log(`${name}connected to code`);
})("abhi");