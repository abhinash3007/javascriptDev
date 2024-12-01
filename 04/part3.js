
const lang=["java","javascript","ruby","python"];
const ans=lang.forEach(function(val){
    console.log(val);
    return val;
});
console.log(ans); //undefined as foreach loop does not return any val means return not works in for each




/**        filter  and  map  reduce      */

const myNum=[1,2,3,4,5,6,7,8,9];
//const num=myNum.filter((val)=>(val>4));    //implicit return
const num=myNum.filter((item)=>{
    return item>5;     //explicit return
});
console.log(num);

// with foreach loop
const newNum=[];
myNum.forEach((val)=>{
    if(val>3){
        newNum.push(val);
    }
});
console.log(newNum);

const numbers=[1,2,3,4,5,6,7,8,9];
const answer=numbers
           .map((val)=>val*10)
           .map((val)=>val+1)
           .filter((val)=>val>40)
;
console.log(answer);

//reduce 
//it takes two things one is accumulator and other one is current value;
const num3=[1,2,3,4];
const sum=num3.reduce((acc,currVal)=>{
    console.log(`accumulator is ${acc} and current calue is ${currVal}`);
    return acc+currVal;
},0)
console.log(sum);
